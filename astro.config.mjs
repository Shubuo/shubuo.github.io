import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://burakyoruk.com.tr",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "tr"],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
