import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Shield,
  Smartphone,
  Wrench,
  Store,
  Headphones,
  LifeBuoy,
  Check,
  X,
  Star,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { Section, Container, Card } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { CTABand } from "@/components/ui/cta-band";
import { ProtectionCalculator } from "@/components/widgets/protection-calculator";
import { fadeInUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { waLink, waMessages } from "@/lib/wa";
import { faqs } from "@/data/faqs";
import { testimonials } from "@/data/testimonials";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mona Protect — Smartphone Protection, Repairs & Flexible Payments" },
      {
        name: "description",
        content:
          "Your smartphone. Covered at every stage. Protect, buy or fix — with protection included. Available for eligible iPhone, Samsung Galaxy and Google Pixel.",
      },
      { property: "og:title", content: "Mona Protect — Your Smartphone. Covered at Every Stage." },
      {
        property: "og:description",
        content:
          "Smartphone protection, repairs and flexible payments for eligible iPhone, Samsung Galaxy and Google Pixel devices in Nigeria.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <BrandStrip />
      <ChooseWhatYouNeed />
      <CalculatorSection />
      <BuyBand />
      <FixBand />
      <WhyMona />
      <HowItWorks />
      <WhatIsCovered />
      <DevicesTeaser />
      <StoresTeaser />
      <Testimonials />
      <PartnerBand />
      <BusinessBand />
      <FAQ />
      <CTABand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <Container>
        <div className="py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="show" variants={staggerContainer}>
            <motion.p
              variants={fadeInUp}
              className="text-white/85 text-sm md:text-base font-medium mb-4"
            >
              Smartphone Protection, Repairs and Flexible Payments
            </motion.p>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl text-white font-bold leading-tight"
              style={{ color: "#fff" }}
            >
              Your Smartphone.
              <br />
              Covered at Every Stage.
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 text-white/90 text-lg max-w-xl">
              Protect your eligible smartphone against accidental damage, buy your next phone with
              one-year protection included, or fix a damaged phone and get protected after the
              repair. Available for eligible iPhone, Samsung Galaxy and Google Pixel devices.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-8 flex flex-wrap gap-3">
              <Button as="link" to="/protection-calculator" variant="primary">
                Check Protection Price
              </Button>
              <Button
                as="link"
                to="/fix-now-get-protected-pay-later"
                variant="secondary"
                className="!text-white !border-white hover:!bg-white/10"
              >
                Fix My Phone
              </Button>
            </motion.div>
            <motion.p variants={fadeInUp} className="mt-4 text-white/80 text-sm">
              Looking to buy a phone?{" "}
              <Link to="/partner-stores" className="underline font-semibold text-white">
                Find a Partner Store
              </Link>
            </motion.p>
            <motion.ul
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-x-4 gap-y-2 text-white/85 text-xs md:text-sm"
            >
              {[
                "Eligible iPhone",
                "Samsung Galaxy",
                "Google Pixel",
                "One-year protection",
                "Authorised partner stores",
              ].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <Check size={14} /> {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center gap-4 items-end"
          >
            {[
              { name: "iPhone", h: "h-72" },
              { name: "Galaxy", h: "h-80" },
              { name: "Pixel", h: "h-72" },
            ].map((d, i) => (
              <div
                key={d.name}
                className={`${d.h} w-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl flex flex-col items-center justify-end p-4 text-white text-xs`}
                style={{ transform: `translateY(${i === 1 ? "-20px" : "0"})` }}
              >
                <Smartphone size={40} className="mb-3 opacity-80" />
                {d.name}
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function BrandStrip() {
  return (
    <div className="py-8 border-b border-[var(--color-border)] bg-white">
      <Container>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[var(--color-navy)] text-sm md:text-base font-semibold uppercase tracking-wider opacity-70">
          <span>Apple iPhone</span>
          <span>·</span>
          <span>Samsung Galaxy</span>
          <span>·</span>
          <span>Google Pixel</span>
        </div>
      </Container>
    </div>
  );
}

function ChooseWhatYouNeed() {
  const items = [
    {
      icon: Shield,
      title: "Just Bought a Phone?",
      body: "Add one-year protection against accidental damage — screen, liquid, back glass and more.",
      cta: "Check Protection Price",
      to: "/protection-calculator",
    },
    {
      icon: Smartphone,
      title: "Need a New Phone?",
      body: "Buy an eligible smartphone at a participating store with one-year protection included and flexible payments.",
      cta: "Find a Participating Store",
      to: "/partner-stores",
      note: "Available to eligible customers after approval.",
    },
    {
      icon: Wrench,
      title: "Phone Already Damaged?",
      body: "Fix it now at a Mona partner, spread the cost, and leave with protection in place.",
      cta: "Find a Repair Partner",
      to: "/partner-stores",
      note: "Available to eligible customers and devices after assessment and approval.",
    },
  ];
  return (
    <Section bg="soft">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="mona-eyebrow">Choose what you need</p>
        <h2 className="text-3xl md:text-4xl mt-3">Whatever Your Situation, Mona Has You Covered</h2>
      </div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="grid md:grid-cols-3 gap-6"
      >
        {items.map((it) => (
          <motion.div key={it.title} variants={fadeInUp}>
            <Card className="h-full flex flex-col">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center mb-5"
                style={{ background: "var(--gradient-brand)" }}
              >
                <it.icon size={22} className="text-white" />
              </div>
              <h3 className="text-xl mb-2">{it.title}</h3>
              <p className="text-sm text-[var(--color-text)] flex-1">{it.body}</p>
              {it.note && <p className="text-xs text-[var(--muted-foreground)] mt-3">{it.note}</p>}
              <div className="mt-5">
                <Button as="link" to={it.to} variant="primary">
                  {it.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function CalculatorSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2">
          <p className="mona-eyebrow">Protection Calculator</p>
          <h2 className="text-3xl md:text-4xl mt-3 mb-4">See your one-year price in seconds.</h2>
          <p className="text-[var(--color-text)] mb-6">
            Just brand and model — no storage, condition or value questions. Prices are for eligible
            devices, subject to inspection.
          </p>
          <Button as="link" to="/protection-calculator" variant="secondary">
            Open full calculator
          </Button>
        </div>
        <div className="lg:col-span-3">
          <ProtectionCalculator />
        </div>
      </div>
    </Section>
  );
}

function BuyBand() {
  return (
    <Section bg="blue">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mona-eyebrow">Buy Now, Get Protected & Pay Later</p>
          <h2 className="text-3xl md:text-4xl mt-3">
            Take home an eligible phone with protection included.
          </h2>
          <p className="mt-4 text-[var(--color-text)]">
            Choose your next device at a participating Mona Partner Store, spread the payments, and
            enjoy one-year protection from day one.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="link" to="/buy-now-get-protected-pay-later" variant="primary">
              Learn how it works
            </Button>
            <Button as="link" to="/partner-stores" variant="secondary">
              Find a participating store
            </Button>
          </div>
          <p className="mt-3 text-xs text-[var(--muted-foreground)]">
            Subject to eligibility, assessment and approval.
          </p>
        </div>
        <Card>
          <ul className="space-y-3">
            {[
              "Eligible iPhone, Samsung Galaxy or Google Pixel",
              "One-year protection included on your new phone",
              "Flexible payment plan at checkout",
              "Complete everything at a Mona partner store",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="text-[var(--color-success)] mt-0.5" size={18} /> {t}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function FixBand() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <Card className="order-2 md:order-1">
          <ul className="space-y-3">
            {[
              "Fix screen, liquid or back glass damage",
              "Spread the repair cost over time",
              "One-year protection added after the fix",
              "Repairs done at authorised Mona partners",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <Check className="text-[var(--color-success)] mt-0.5" size={18} /> {t}
              </li>
            ))}
          </ul>
        </Card>
        <div className="order-1 md:order-2">
          <p className="mona-eyebrow">Fix Now, Get Protected & Pay Later</p>
          <h2 className="text-3xl md:text-4xl mt-3">
            Damaged already? Fix it, spread the cost, get protected.
          </h2>
          <p className="mt-4 text-[var(--color-text)]">
            Bring your phone to a Mona partner — after assessment, we cover the repair on flexible
            terms and add one-year protection.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="link" to="/fix-now-get-protected-pay-later" variant="primary">
              Learn how it works
            </Button>
            <Button as="link" to="/partner-stores" variant="secondary">
              Find a repair partner
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

function WhyMona() {
  const items = [
    {
      icon: Shield,
      title: "One-Year Smartphone Protection",
      body: "Cover for accidental damage with a clear, single-price plan.",
    },
    {
      icon: Smartphone,
      title: "Buy Now, Get Protected & Pay Later",
      body: "Buy an eligible phone and pay over time — protection included.",
    },
    {
      icon: Wrench,
      title: "Fix Now, Get Protected & Pay Later",
      body: "Fix a damaged phone now and leave with protection in place.",
    },
    {
      icon: Store,
      title: "Approved Partner Stores",
      body: "A trusted network of stores across Nigeria for buying, protecting and repairs.",
    },
    {
      icon: Headphones,
      title: "Premium Smartphone Support",
      body: "Fast WhatsApp support and in-store help throughout the year.",
    },
    {
      icon: LifeBuoy,
      title: "Support Throughout Ownership",
      body: "From day one to renewal — we're with you at every stage.",
    },
  ];
  return (
    <Section bg="soft">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="mona-eyebrow">Why Mona</p>
        <h2 className="text-3xl md:text-4xl mt-3">More Than Phone Insurance</h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <Card key={it.title}>
            <div
              className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
              style={{ background: "var(--gradient-brand)" }}
            >
              <it.icon size={20} className="text-white" />
            </div>
            <h3 className="text-lg mb-2">{it.title}</h3>
            <p className="text-sm text-[var(--color-text)]">{it.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function HowItWorks() {
  const flows = [
    {
      title: "Protect My Phone",
      steps: [
        "Get your protection price",
        "Book a partner store",
        "Quick device inspection",
        "You're protected for one year",
      ],
    },
    {
      title: "Buy Now, Get Protected & Pay Later",
      steps: [
        "Pick an eligible phone at a partner store",
        "Complete eligibility check",
        "Choose a payment plan",
        "Leave with your phone and protection",
      ],
    },
    {
      title: "Fix Now, Get Protected & Pay Later",
      steps: [
        "Visit a Mona partner",
        "Damage assessment",
        "Approve repair and payment plan",
        "Get your phone back — and protected",
      ],
    },
  ];
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="mona-eyebrow">How Mona works</p>
        <h2 className="text-3xl md:text-4xl mt-3">Simple From Start to Finish</h2>
      </div>
      <div className="grid lg:grid-cols-3 gap-6">
        {flows.map((f) => (
          <Card key={f.title}>
            <h3 className="text-xl mb-6">{f.title}</h3>
            <ol className="space-y-4">
              {f.steps.map((s, i) => (
                <li key={s} className="flex gap-3">
                  <span
                    className="shrink-0 w-7 h-7 rounded-full text-white text-sm font-semibold flex items-center justify-center"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    {i + 1}
                  </span>
                  <span className="pt-0.5 text-sm">{s}</span>
                </li>
              ))}
            </ol>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function WhatIsCovered() {
  const covered = [
    "Screen damage",
    "Liquid damage",
    "Back glass damage",
    "Other accidental damage",
  ];
  const notCovered = [
    "Theft",
    "Loss",
    "Wear & tear",
    "Battery degradation",
    "Intentional damage",
    "Software faults",
  ];
  return (
    <Section bg="soft">
      <div className="max-w-2xl mx-auto text-center mb-14">
        <p className="mona-eyebrow">Coverage</p>
        <h2 className="text-3xl md:text-4xl mt-3">What Is Covered</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <h3 className="text-xl mb-4 text-[var(--color-success)]">Covered</h3>
          <ul className="space-y-3">
            {covered.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "var(--color-success)" }}
                >
                  <Check size={14} className="text-white" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Card>
        <Card>
          <h3 className="text-xl mb-4 text-[var(--color-danger)]">Not Covered</h3>
          <ul className="space-y-3">
            {notCovered.map((c) => (
              <li key={c} className="flex items-center gap-3">
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center"
                  style={{ background: "var(--color-danger)" }}
                >
                  <X size={14} className="text-white" />
                </span>
                {c}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}

function DevicesTeaser() {
  return (
    <Section>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mona-eyebrow">Supported Devices</p>
          <h2 className="text-3xl md:text-4xl mt-3">iPhone. Galaxy. Pixel.</h2>
          <p className="mt-4 text-[var(--color-text)]">
            Browse the latest supported models and see coverage details for your device.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button as="link" to="/supported-devices" variant="primary">
              Browse supported devices <ArrowRight size={18} />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {["iPhone", "Galaxy", "Pixel"].map((n) => (
            <Card key={n} className="text-center">
              <Smartphone size={32} className="mx-auto mb-3 text-[var(--color-primary)]" />
              <p className="text-sm font-semibold">{n}</p>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

function StoresTeaser() {
  return (
    <Section bg="blue">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="mona-eyebrow">Partner Stores</p>
          <h2 className="text-3xl md:text-4xl mt-3">Trusted stores across Nigeria.</h2>
          <p className="mt-4 text-[var(--color-text)]">
            Find a Mona partner for protection, purchases and repairs — with WhatsApp and directions
            built in.
          </p>
          <div className="mt-6">
            <Button as="link" to="/partner-stores" variant="primary">
              Find a store near you
            </Button>
          </div>
        </div>
        <Card>
          <div className="aspect-video bg-[var(--color-bg-soft)] flex items-center justify-center text-[var(--muted-foreground)]">
            <Store size={40} />
          </div>
          <p className="mt-4 text-sm text-[var(--muted-foreground)]">
            Live locator on the Partner Stores page.
          </p>
        </Card>
      </div>
    </Section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const t = testimonials[i];
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="mona-eyebrow">Customer Stories</p>
        <h2 className="text-3xl md:text-4xl mt-3">Real people, real coverage.</h2>
        <p className="text-xs text-[var(--muted-foreground)] mt-3">
          Placeholder testimonials for design preview.
        </p>
      </div>
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star key={k} size={18} fill="currentColor" className="text-[var(--color-star)]" />
            ))}
          </div>
          <p className="text-lg italic">"{t.quote}"</p>
          <p className="mt-4 text-sm font-semibold text-[var(--color-navy)]">
            {t.name} · {t.city}
          </p>
        </Card>
      </motion.div>
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, k) => (
          <button
            key={k}
            onClick={() => setI(k)}
            aria-label={`Story ${k + 1}`}
            className="w-2 h-2 rounded-full transition-all"
            style={{ background: k === i ? "var(--color-primary)" : "var(--color-border)" }}
          />
        ))}
      </div>
    </Section>
  );
}

function PartnerBand() {
  return (
    <Section bg="ink">
      <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
        <div>
          <p className="text-white/70 text-sm font-semibold uppercase tracking-wider">
            For Businesses
          </p>
          <h2 className="text-3xl md:text-4xl text-white mt-3" style={{ color: "#fff" }}>
            Become a Mona Partner Store
          </h2>
          <p className="mt-3 text-white/80 max-w-xl">
            Bring protection, purchases and repairs to your customers — join the Mona partner
            network.
          </p>
        </div>
        <div className="md:text-right">
          <Button as="link" to="/become-a-partner" variant="primary">
            Apply to become a partner
          </Button>
        </div>
      </div>
    </Section>
  );
}

function BusinessBand() {
  return (
    <Section bg="soft">
      <div className="grid md:grid-cols-[2fr_1fr] gap-8 items-center">
        <div>
          <p className="mona-eyebrow">Business Financing</p>
          <h2 className="text-3xl md:text-4xl mt-3">Financing to grow your device business.</h2>
          <p className="mt-3 text-[var(--color-text)] max-w-xl">
            Working capital and inventory financing for eligible partner stores — subject to
            assessment and approval.
          </p>
        </div>
        <div className="md:text-right">
          <Button as="link" to="/business-financing" variant="primary">
            Apply for business financing
          </Button>
        </div>
      </div>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="mona-eyebrow">FAQ</p>
        <h2 className="text-3xl md:text-4xl mt-3">Questions, answered.</h2>
      </div>
      <div className="max-w-3xl mx-auto divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full text-left flex items-center justify-between py-5 font-semibold"
                style={{ color: "var(--color-ink)" }}
              >
                {f.q}
                <span className="ml-4 shrink-0 text-[var(--color-primary)]">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && <p className="pb-5 pr-8 text-sm text-[var(--color-text)]">{f.a}</p>}
            </div>
          );
        })}
      </div>
      <div className="text-center mt-8">
        <Button
          as="a"
          href={waLink(waMessages.general)}
          variant="wa"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={18} /> Ask us on WhatsApp
        </Button>
      </div>
    </Section>
  );
}
