import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  reporter: [["html", { open: "never" }]],
  use: {
    baseURL: process.env.BASE_URL || "https://test-qa.capslock.global",
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});
