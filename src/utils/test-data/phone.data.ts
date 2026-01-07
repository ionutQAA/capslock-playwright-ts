import { faker } from "@faker-js/faker";

export function getValidPhoneNumber(): string {
  return `(0${faker.string.numeric(2)})${faker.string.numeric(
    3
  )}-${faker.string.numeric(4)}`;
}
