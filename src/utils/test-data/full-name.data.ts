import { faker } from "@faker-js/faker";

export function getValidFullName(): string {
  return `${faker.person.firstName()} ${faker.person.lastName()}`;
}
