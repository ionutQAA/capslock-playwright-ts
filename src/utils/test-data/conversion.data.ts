import { getValidEmail } from "./email.data";
import { getValidFullName } from "./full-name.data";
import { getValidPhoneNumber } from "./phone.data";
import { getValidZipCode } from "./zip-code.data";

export function getValidConversionData() {
  return {
    zipCode: getValidZipCode(),
    fullName: getValidFullName(),
    email: getValidEmail(),
    phoneNumber: getValidPhoneNumber(),
  };
}
