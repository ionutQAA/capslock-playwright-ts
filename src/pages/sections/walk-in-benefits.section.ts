import { Page, Locator } from "@playwright/test";
import { WalkInBenefitBlock } from "./blocks/walk-in-benefit.block";

export class WalkInBenefitsSection {
  readonly root: Locator;
  readonly title: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".blockTitle__hdr", {
        hasText: "Walk-In Bath Benefits",
      }),
    });

    this.title = this.root.locator(".blockTitle__hdr");
  }

  walkInBenefitByTitle(title: string): WalkInBenefitBlock {
    return new WalkInBenefitBlock(
      this.root.locator(".howBlock", {
        has: this.root.locator(".howBlock__hdr", { hasText: title }),
      })
    );
  }
}
