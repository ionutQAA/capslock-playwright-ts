import { Page, Locator } from "@playwright/test";

export class LifetimeSliderSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly slider: Locator;
  readonly slides: Locator;
  readonly nextButton: Locator;
  readonly prevButton: Locator;

  constructor(private readonly page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".sliderDefault"),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.slider = this.root.locator(".sliderDefault__slider");
    this.slides = this.root.locator(".sliderDefault__item");
    this.nextButton = this.root.locator(".slick-next");
    this.prevButton = this.root.locator(".slick-prev");
  }
}
