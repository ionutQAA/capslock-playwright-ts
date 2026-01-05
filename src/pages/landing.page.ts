import { Locator, Page } from "@playwright/test";
import { HeroSection } from "./sections/hero.section";
import { FallingSection } from "./sections/falling.section";
import { GeneralViewSection } from "./sections/general-view.section";
import { HealthBenefitsSection } from "./sections/health-benefits.section";
import { LifetimeSliderSection } from "./sections/lifetime-slider.section";
import { WarrantySection } from "./sections/warranty.section";
import { EstimateWizard } from "./sections/estimate-wizard/estimate-wizard.section";
import { WalkInBenefitsSection } from "./sections/walk-in-benefits.section";
import { BathWallsSection } from "./sections/bath-walls.section";
import { ReviewsSection } from "./sections/reviews.section";

export class LandingPage {
  private readonly page: Page;
  readonly locationLabel: Locator;
  readonly heroSection: HeroSection;
  readonly fallingSection: FallingSection;
  readonly generalViewSection: GeneralViewSection;
  readonly healthBenefitsSection: HealthBenefitsSection;
  readonly lifetimeSliderSection: LifetimeSliderSection;
  readonly warrantySection: WarrantySection;
  readonly estimateFormPrimary: EstimateWizard;
  readonly walkInBenefitsSection: WalkInBenefitsSection;
  readonly bathWallsSection: BathWallsSection;
  readonly reviewsSection: ReviewsSection;
  readonly estimateFormSecondary: EstimateWizard;

  constructor(page: Page) {
    this.page = page;

    this.locationLabel = page.locator(".location__city");
    this.heroSection = new HeroSection(page);
    this.fallingSection = new FallingSection(page);
    this.generalViewSection = new GeneralViewSection(page);
    this.healthBenefitsSection = new HealthBenefitsSection(page);
    this.lifetimeSliderSection = new LifetimeSliderSection(page);
    this.warrantySection = new WarrantySection(page);
    this.estimateFormPrimary = new EstimateWizard(page, 1);
    this.walkInBenefitsSection = new WalkInBenefitsSection(page);
    this.bathWallsSection = new BathWallsSection(page);
    this.reviewsSection = new ReviewsSection(page);
    this.estimateFormSecondary = new EstimateWizard(page, 2);
  }

  async goToLandingPage() {
    await this.page.goto("/");
  }
}
