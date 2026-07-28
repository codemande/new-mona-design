export type Store = {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  whatsapp: string;
  hours: string;
  services: string[];
};

export const services = [
  "Smartphone Protection",
  "Phone Repairs",
  "Buy Now, Get Protected & Pay Later",
  "Fix Now, Get Protected & Pay Later",
] as const;

export const stores: Store[] = [
  {
    id: "s1",
    name: "TechHub Wuse",
    address: "Plot 210, Aminu Kano Cres, Wuse 2",
    city: "Abuja",
    state: "FCT",
    phone: "+234 803 111 2233",
    whatsapp: "+234 803 111 2233",
    hours: "Mon–Sat, 9am–7pm",
    services: ["Smartphone Protection", "Phone Repairs", "Fix Now, Get Protected & Pay Later"],
  },
  {
    id: "s2",
    name: "PhoneCare Ikeja",
    address: "12 Allen Avenue, Ikeja",
    city: "Lagos",
    state: "Lagos",
    phone: "+234 802 555 4411",
    whatsapp: "+234 802 555 4411",
    hours: "Mon–Sun, 10am–8pm",
    services: [
      "Smartphone Protection",
      "Buy Now, Get Protected & Pay Later",
      "Fix Now, Get Protected & Pay Later",
    ],
  },
  {
    id: "s3",
    name: "GadgetPro Lekki",
    address: "Admiralty Way, Lekki Phase 1",
    city: "Lagos",
    state: "Lagos",
    phone: "+234 809 700 1200",
    whatsapp: "+234 809 700 1200",
    hours: "Mon–Sat, 10am–9pm",
    services: ["Smartphone Protection", "Phone Repairs"],
  },
  {
    id: "s4",
    name: "SmartFix Port Harcourt",
    address: "45 Aba Road, GRA",
    city: "Port Harcourt",
    state: "Rivers",
    phone: "+234 807 322 8899",
    whatsapp: "+234 807 322 8899",
    hours: "Mon–Sat, 9am–6pm",
    services: ["Phone Repairs", "Fix Now, Get Protected & Pay Later"],
  },
  {
    id: "s5",
    name: "Mobile Palace Kano",
    address: "Bompai Road, Kano",
    city: "Kano",
    state: "Kano",
    phone: "+234 806 444 7788",
    whatsapp: "+234 806 444 7788",
    hours: "Mon–Sat, 9am–7pm",
    services: ["Smartphone Protection", "Buy Now, Get Protected & Pay Later"],
  },
  {
    id: "s6",
    name: "iCentre Ibadan",
    address: "Ring Road, Challenge",
    city: "Ibadan",
    state: "Oyo",
    phone: "+234 805 222 1919",
    whatsapp: "+234 805 222 1919",
    hours: "Mon–Sat, 9am–7pm",
    services: ["Smartphone Protection", "Phone Repairs"],
  },
];

export const nigerianStates = [
  "FCT",
  "Lagos",
  "Rivers",
  "Kano",
  "Oyo",
  "Kaduna",
  "Enugu",
  "Anambra",
  "Delta",
  "Edo",
  "Ogun",
  "Ondo",
  "Osun",
  "Ekiti",
  "Kwara",
  "Plateau",
];
export const cities = ["Abuja", "Lagos", "Port Harcourt", "Kano", "Ibadan", "Enugu", "Benin City"];
