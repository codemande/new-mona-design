// Mock device catalog — protection prices in ₦.
export type DeviceModel = { model: string; price: number };
export type Brand = { id: string; name: string; models: DeviceModel[] };

export const brands: Brand[] = [
  {
    id: "iphone",
    name: "Apple iPhone",
    models: [
      { model: "iPhone 15 Pro Max", price: 89000 },
      { model: "iPhone 15 Pro", price: 79000 },
      { model: "iPhone 15", price: 65000 },
      { model: "iPhone 14 Pro Max", price: 75000 },
      { model: "iPhone 14 Pro", price: 69000 },
      { model: "iPhone 14", price: 55000 },
      { model: "iPhone 13 Pro Max", price: 62000 },
      { model: "iPhone 13", price: 48000 },
      { model: "iPhone 12", price: 39000 },
    ],
  },
  {
    id: "samsung",
    name: "Samsung Galaxy",
    models: [
      { model: "Galaxy S25 Ultra", price: 92000 },
      { model: "Galaxy S25+", price: 78000 },
      { model: "Galaxy S25", price: 68000 },
      { model: "Galaxy S24 Ultra", price: 82000 },
      { model: "Galaxy S24", price: 62000 },
      { model: "Galaxy Z Fold 6", price: 120000 },
      { model: "Galaxy Z Flip 6", price: 88000 },
      { model: "Galaxy A55", price: 38000 },
    ],
  },
  {
    id: "google-pixel",
    name: "Google Pixel",
    models: [
      { model: "Pixel 9 Pro XL", price: 84000 },
      { model: "Pixel 9 Pro", price: 76000 },
      { model: "Pixel 9", price: 62000 },
      { model: "Pixel 8 Pro", price: 68000 },
      { model: "Pixel 8", price: 52000 },
      { model: "Pixel 7a", price: 39000 },
    ],
  },
];

export function findBrand(id: string) {
  return brands.find((b) => b.id === id);
}
export function findModel(brandId: string, modelSlug: string) {
  const b = findBrand(brandId);
  if (!b) return null;
  return b.models.find((m) => slugify(m.model) === modelSlug) ?? null;
}
export function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
