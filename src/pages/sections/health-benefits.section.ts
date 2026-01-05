import { Page, Locator } from "@playwright/test";
import { HealthBenefitBlock } from "./blocks/health-benefit.block";

export class HealthBenefitsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly comparisonImagePrimary: Locator;
  readonly comparisonImageSecondary: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".blockTitle__hdr", {
        hasText: "Walk-In Bath Benefits",
      }),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".blockTitle__txt");
    this.comparisonImagePrimary = this.root.locator(
      ".blockCompare__img_health-1"
    );
    this.comparisonImageSecondary = this.root.locator(
      ".blockCompare__img_health-2"
    );
  }

  healthBenefitByTitle(title: string): HealthBenefitBlock {
    return new HealthBenefitBlock(
      this.root.locator(".healthBlock", {
        has: this.root.locator(".healthBlock__hdr", {
          hasText: title,
        }),
      })
    );
  }
}
