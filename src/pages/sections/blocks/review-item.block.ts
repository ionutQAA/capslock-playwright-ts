import { Locator } from "@playwright/test";

export class ReviewItemBlock {
  constructor(private readonly root: Locator) {}

  get author() {
    return this.root.locator(".review__name");
  }

  get comment() {
    return this.root.locator(".review__comment");
  }

  get stars() {
    return this.root.locator(".lavin-star");
  }

  get images() {
    return this.root.locator(".review__img img");
  }
}
