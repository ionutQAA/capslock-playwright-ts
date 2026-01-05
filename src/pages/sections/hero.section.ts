import { Page, Locator } from "@playwright/test";

export class HeroSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly description: Locator;
  readonly badgeImage: Locator;
  readonly video: Locator;
  readonly playButton: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".hero"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.description = this.root.locator(".blockTitle__txt");
    this.badgeImage = this.root.locator(".hero__badgeImg img");
    this.video = this.root.locator("video.blockVideo__video");
    this.playButton = this.root.locator(".video-button button.play");
  }

  featureItem(text: string): Locator {
    return this.root.locator(".blockList__item", { hasText: text });
  }
}
