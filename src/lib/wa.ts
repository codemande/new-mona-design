// WhatsApp deep-link helper — URL-encodes prewritten context messages.
const WA_NUMBER = "2347048100101";

export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general: "Hello Mona, I'd like to learn more about your services.",
  protection: (model = "phone", city = "my city") =>
    `Hello Mona, I want to protect my ${model}. I am located in ${city}.`,
  buy: (model = "a new phone", city = "my city") =>
    `Hello Mona, I want to buy ${model} with protection included. I am in ${city}.`,
  fix: (model = "my phone", city = "my city") =>
    `Hello Mona, I need to fix ${model} and get protected after the repair. I am in ${city}.`,
  store: (city = "my city") => `Hello Mona, I'm looking for a partner store in ${city}.`,
  partner: "Hello Mona, my store would like to become a Mona Partner.",
  business: "Hello Mona, I'd like to apply for business financing.",
};
