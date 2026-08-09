import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-surface-muted bg-surface-muted px-4 py-8 text-center text-sm text-grey-mid">
      <p>&copy; {SITE.name}. All rights reserved.</p>
    </footer>
  );
}
