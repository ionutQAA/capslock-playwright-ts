import { Locator } from "@playwright/test";

export class HealthBenefitBlock {
  constructor(private readonly root: Locator) {}

  get title() {
    return this.root.locator(".healthBlock__hdr");
  }

  get description() {
    return this.root.locator(".healthBlock__txt");
  }

  get icon() {
    return this.root.locator("img");
  }
}
