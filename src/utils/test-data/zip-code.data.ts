export function getValidZipCode(): string {
  const num = Math.floor(10000 + Math.random() * 89999);
  return String(num >= 12345 ? num + 1 : num);
}
