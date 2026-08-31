import { Web3Form } from "@/components/forms/Web3Form";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockSite = vi.hoisted(() => ({
  WEB3FORMS_ACCESS_KEY: "test-access-key",
  WEB3FORMS_SUBMIT_URL: "https://api.web3forms.com/submit",
}));

vi.mock("next/script", () => ({
  default: () => null,
}));

vi.mock("@/lib/site", () => ({
  get WEB3FORMS_ACCESS_KEY() {
    return mockSite.WEB3FORMS_ACCESS_KEY;
  },
  WEB3FORMS_SUBMIT_URL: "https://api.web3forms.com/submit",
}));

describe("Web3Form", () => {
  beforeEach(() => {
    mockSite.WEB3FORMS_ACCESS_KEY = "test-access-key";
    vi.stubGlobal("fetch", vi.fn());
    HTMLElement.prototype.scrollIntoView = vi.fn();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it("renders children and honeypot field hidden from tab order", () => {
    render(
      <Web3Form id="test-form" successMessage="Done">
        <input name="name" aria-label="Name" />
      </Web3Form>,
    );

    const honeypot = document.querySelector('input[name="botcheck"]');
    expect(honeypot).toBeTruthy();
    expect(honeypot).toHaveAttribute("tabindex", "-1");
    expect(honeypot).toHaveAttribute("aria-hidden", "true");
    expect(screen.getByRole("textbox", { name: "Name" })).toBeInTheDocument();
  });

  it("shows success message when submission succeeds", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: "OK" }),
    } as Response);

    render(
      <Web3Form id="test-form" successMessage="Referral received">
        <input name="name" aria-label="Name" required />
      </Web3Form>,
    );

    fireEvent.change(screen.getByRole("textbox", { name: "Name" }), {
      target: { value: "Test Surgery" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(screen.getByRole("status")).toHaveTextContent("Referral received");
    });

    expect(fetch).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({
        method: "POST",
        body: expect.stringContaining("test-access-key"),
      }),
    );
  });

  it("scrolls the status message into view after submission", async () => {
    const scrollIntoView = vi.mocked(HTMLElement.prototype.scrollIntoView);

    vi.mocked(fetch).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true, message: "OK" }),
    } as Response);

    render(
      <Web3Form id="test-form" successMessage="Referral received">
        <input name="name" aria-label="Name" required />
      </Web3Form>,
    );

    fireEvent.change(screen.getByRole("textbox", { name: "Name" }), {
      target: { value: "Test Surgery" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "center" });
    });
  });

  it("shows error message when submission fails", async () => {
    vi.mocked(fetch).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ success: false, message: "Captcha required" }),
    } as Response);

    render(
      <Web3Form id="test-form" successMessage="Done">
        <input name="name" defaultValue="Test" aria-label="Name" required />
      </Web3Form>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Captcha required");
    });
  });

  it("shows configuration warning and disables submit when access key is missing", () => {
    mockSite.WEB3FORMS_ACCESS_KEY = "";

    render(
      <Web3Form id="unconfigured" successMessage="Done">
        <input name="name" aria-label="Name" />
      </Web3Form>,
    );

    expect(screen.getByText(/not configured yet/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Submit" })).toBeDisabled();
  });
});
