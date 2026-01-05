import { Locator } from "@playwright/test";

export class BathWallOptionBlock {
  constructor(private readonly root: Locator) {}

  get colour() {
    return this.root.locator("");
  }

  get description() {
    return this.root.locator("");
  }
}
