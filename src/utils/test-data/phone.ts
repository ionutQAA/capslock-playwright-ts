import { faker } from "@faker-js/faker";

export class PhoneNumberGenerator {
  static generate(): string {
    return faker.string.numeric(10);
  }
}
