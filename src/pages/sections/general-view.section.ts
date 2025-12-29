import { Page, Locator } from "@playwright/test";

export class GeneralViewSection {
  readonly root: Locator;
  readonly description: Locator;
  readonly video: Locator;
  readonly playButton: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".generalView"),
    });

    this.description = this.root.locator(".blockTitle__txt");
    this.video = this.root.locator("video.blockVideo__video");
    this.playButton = this.root.locator(".video-button button.play");
  }
}
