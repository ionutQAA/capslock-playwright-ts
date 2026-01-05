import { Page, Locator } from "@playwright/test";
import { BathWallOptionBlock } from "./blocks/wall-option.block";

export class BathWallsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly video: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".blockTitle__hdr", {
        hasText: "Bath Walls",
      }),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".howBlock__txt");
    this.video = this.root.locator(".blockVideo__video");
  }

  bathWallOptionByColour(colour: string): BathWallOptionBlock {
    return new BathWallOptionBlock(
      this.root.locator(".wallOpt__item", {
        has: this.root.locator(".wallOpt__txt", { hasText: colour }),
      })
    );
  }
}
