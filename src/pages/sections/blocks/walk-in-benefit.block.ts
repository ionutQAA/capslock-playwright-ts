import { Locator } from "@playwright/test";

export class WalkInBenefitBlock {
  constructor(private readonly root: Locator) {}

  get title() {
    return this.root.locator(".howBlock__hdr");
  }

  get description() {
    return this.root.locator(".howBlock__txt");
  }

  get video() {
    return this.root.locator("video");
  }

  featureItem(text: string): Locator {
    return this.root.locator(".blockList__item", { hasText: text });
  }
}
