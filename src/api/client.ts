// Single mock API client. Swap function bodies for real endpoints later.
import { brands, type Brand } from "@/data/devices";
import { stores, type Store } from "@/data/stores";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";

const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

export async function getDeviceBrands(): Promise<Brand[]> {
  await delay(150);
  return brands;
}
export async function getModelsByBrand(brandId: string) {
  await delay(150);
  return brands.find((b) => b.id === brandId)?.models ?? [];
}
export async function getStores(filters?: {
  state?: string;
  city?: string;
  service?: string;
  query?: string;
}): Promise<Store[]> {
  await delay(200);
  return stores.filter((s) => {
    if (filters?.state && s.state !== filters.state) return false;
    if (filters?.city && s.city !== filters.city) return false;
    if (filters?.service && !s.services.includes(filters.service)) return false;
    if (filters?.query && !s.name.toLowerCase().includes(filters.query.toLowerCase())) return false;
    return true;
  });
}
export async function getFaqs() {
  await delay(50);
  return faqs;
}
export async function getTestimonials() {
  await delay(50);
  return testimonials;
}
export async function submitContact(payload: Record<string, unknown>) {
  await delay(600);
  // TODO: wire real endpoint
  console.info("[mock] submitContact", payload);
  return { ok: true, id: Math.random().toString(36).slice(2) };
}
export async function submitPartnerApplication(payload: Record<string, unknown>) {
  await delay(700);
  console.info("[mock] submitPartnerApplication", payload);
  return { ok: true };
}
export async function submitBusinessFinancing(payload: Record<string, unknown>) {
  await delay(700);
  console.info("[mock] submitBusinessFinancing", payload);
  return { ok: true };
}
export async function mockLogin(kind: "customer" | "partner", email: string) {
  await delay(500);
  // TODO: wire real auth
  console.info("[mock] login", kind, email);
  return { ok: true };
}
