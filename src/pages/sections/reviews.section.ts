import { Page, Locator } from "@playwright/test";
import { ReviewItemBlock } from "./blocks/review-item.block";

export class ReviewsSection {
  readonly root: Locator;
  readonly title: Locator;
  readonly moreLessButton: Locator;
  private readonly visibleReviews: Locator;
  private readonly hiddenReviews: Locator;

  constructor(page: Page) {
    this.root = page.locator("section", {
      has: page.locator(".blockTitle__hdr", {
        hasText: "See What People Are Saying",
      }),
    });

    this.title = this.root.locator(".blockTitle__hdr");
    this.moreLessButton = this.root.locator(".moreless:visible");

    this.visibleReviews = this.root.locator(".reviewWrap > .review");

    this.hiddenReviews = this.root.locator(".reviewFull .review");
  }

  visibleReview(index: number): ReviewItemBlock {
    return new ReviewItemBlock(this.visibleReviews.nth(index));
  }

  expandedReview(index: number): ReviewItemBlock {
    return new ReviewItemBlock(this.hiddenReviews.nth(index));
  }

  async toggle() {
    await this.moreLessButton.click();
  }
}
