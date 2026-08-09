import { StaticForm } from "@/components/forms/StaticForm";

const inputClass =
  "w-full rounded border border-grey-mid/30 bg-white px-3 py-2.5 text-grey-dark outline-none transition-colors focus:border-teal focus:ring-2 focus:ring-teal/20";

export function ContactForm() {
  return (
    <div className="rounded-lg border border-surface-muted bg-white p-6 shadow-sm md:p-8">
      <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
      <p className="mt-2 text-sm text-grey-mid">
        Dental lab enquiries and patient questions both welcome. This demo form does not send email
        from the server; submit shows a confirmation note so you can wire up a backend later.
      </p>
      <div className="mt-6">
        <StaticForm
          id="contact-form"
          successMessage="Thank you. We have your message details here for demo purposes only. Please call 04-388 7491 to follow up, or connect this form to your email or CRM when ready."
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="c-name" className="mb-1 block text-sm font-semibold text-navy">
                Your name <span aria-hidden="true">*</span>
              </label>
              <input
                id="c-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="c-phone" className="mb-1 block text-sm font-semibold text-navy">
                Contact number <span aria-hidden="true">*</span>
              </label>
              <input
                id="c-phone"
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="c-email" className="mb-1 block text-sm font-semibold text-navy">
                Email address <span aria-hidden="true">*</span>
              </label>
              <input
                id="c-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="c-subject" className="mb-1 block text-sm font-semibold text-navy">
                Subject
              </label>
              <input
                id="c-subject"
                name="subject"
                type="text"
                autoComplete="on"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="c-msg" className="mb-1 block text-sm font-semibold text-navy">
                Your message
              </label>
              <textarea id="c-msg" name="message" rows={5} className={inputClass} />
            </div>
            <button
              type="submit"
              className="rounded bg-teal px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-hover"
            >
              Send
            </button>
          </div>
        </StaticForm>
      </div>
    </div>
  );
}
