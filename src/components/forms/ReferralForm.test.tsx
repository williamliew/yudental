import { ReferralForm } from "@/components/forms/ReferralForm";
import { render, screen } from "@testing-library/react";

vi.mock("next/script", () => ({
  default: () => null,
}));

vi.mock("@/lib/site", () => ({
  SITE: {
    phone: "04-388 7491",
    phoneTel: "+6443887491",
    showReferralsEmailOnSite: false,
    referralsEmail: "",
  },
  WEB3FORMS_ACCESS_KEY: "test-access-key",
  WEB3FORMS_SUBMIT_URL: "https://api.web3forms.com/submit",
}));

const REQUIRED_FIELDS = [
  "surgery_name",
  "dentist_name",
  "patient_name",
  "dob_day",
  "dob_month",
  "dob_year",
  "patient_email",
  "patient_phone",
  "patient_address",
  "help_type",
] as const;

describe("ReferralForm", () => {
  it("renders required fields with expected name attributes", () => {
    render(<ReferralForm />);

    for (const name of REQUIRED_FIELDS) {
      expect(document.querySelector(`[name="${name}"]`)).toBeTruthy();
    }
  });

  it("does not render a file input", () => {
    render(<ReferralForm />);
    expect(document.querySelector('input[type="file"]')).toBeNull();
  });

  it("does not expose a personal or referrals email address in page text", () => {
    const { container } = render(<ReferralForm />);
    const text = container.textContent ?? "";

    expect(text).not.toMatch(/@gmail\.com/i);
    expect(text).not.toMatch(/@yudental\.co\.nz/i);
    expect(text).not.toMatch(/mailto:/i);
  });

  it("explains that documents will be requested after submit", () => {
    render(<ReferralForm />);

    expect(
      screen.getByText(
        /we will contact you to request any referral letters or supporting documents/i,
      ),
    ).toBeInTheDocument();
  });

  it("shows clinic phone for urgent enquiries", () => {
    render(<ReferralForm />);

    expect(screen.getByRole("link", { name: "04-388 7491" })).toHaveAttribute(
      "href",
      "tel:+6443887491",
    );
  });
});
