import { DEFAULT_THEME_ID, THEME_IDS, THEME_STORAGE_KEY } from "@/lib/themes";

const themeIdsJson = JSON.stringify(THEME_IDS);

export function ThemeInitScript() {
  const script = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var valid=${themeIdsJson};var t=localStorage.getItem(k);var theme=valid.indexOf(t)!==-1?t:${JSON.stringify(DEFAULT_THEME_ID)};document.documentElement.setAttribute("data-theme",theme);}catch(e){document.documentElement.setAttribute("data-theme",${JSON.stringify(DEFAULT_THEME_ID)});}})();`;

  return (
    <script
      // biome-ignore lint/security/noDangerouslySetInnerHtml: inline theme init prevents flash of default palette
      dangerouslySetInnerHTML={{ __html: script }}
    />
  );
}
