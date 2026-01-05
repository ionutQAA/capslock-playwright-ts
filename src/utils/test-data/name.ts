import { faker } from "@faker-js/faker";

export class NameGenerator {
  static generate(): { firstName: string; lastName: string } {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
    };
  }
}
