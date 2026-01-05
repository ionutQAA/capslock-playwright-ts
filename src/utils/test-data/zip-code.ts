export class ZipCodeGenerator {
  static generate(length: number = 5): string {
    if (!Number.isInteger(length) || length <= 0) {
      throw new Error("Zip code length must be a positive digit");
    }

    const max = Math.pow(10, length);
    const random = Math.floor(Math.random() * max);

    return random.toString().padStart(length, "0");
  }
}
