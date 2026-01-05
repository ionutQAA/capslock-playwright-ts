import { Page, Locator } from "@playwright/test";
import { ZipCodeStep } from "./steps/zip-code.step";
import { InterestStep } from "./steps/interest.step";
import { PropertyTypeStep } from "./steps/property-type.step";
import { ContactDetailsStep } from "./steps/contact-details.step";
import { PhoneStep } from "./steps/phone.step";

export class EstimateWizard {
  readonly root: Locator;

  constructor(page: Page, instance: 1 | 2) {
    this.root = page.locator("section.section_form", {
      has: page.locator(`#form-container-${instance}`),
    });
  }

  zipStep() {
    return new ZipCodeStep(this.root);
  }

  interestStep() {
    return new InterestStep(this.root);
  }

  propertyStep() {
    return new PropertyTypeStep(this.root);
  }

  contactStep() {
    return new ContactDetailsStep(this.root);
  }

  phoneStep() {
    return new PhoneStep(this.root);
  }
}
