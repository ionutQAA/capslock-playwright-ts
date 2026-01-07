import { faker } from "@faker-js/faker";
import { EMAIL_DOMAIN, EMAIL_USERNAME } from "@utils/constants/email.constants";

export function getValidEmail(): string {
  const alias = faker.string.alphanumeric({ length: 5 }).toLowerCase();
  return `${EMAIL_USERNAME}+${alias}@${EMAIL_DOMAIN}`;
}
