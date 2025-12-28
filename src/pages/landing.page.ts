import { Page } from "@playwright/test";

export class LandingPage {
  constructor(private page: Page) {}

  async goToLandingPage() {
    await this.page.goto("/");
  }
}
