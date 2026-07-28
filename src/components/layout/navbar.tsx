import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/mona-layout";
import { Button } from "@/components/ui/mona-button";
import { cn } from "@/lib/utils";
import { waLink, waMessages } from "@/lib/wa";

const productsMenu = [
  { label: "Protect My Phone", to: "/phone-protection" },
  { label: "Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later" },
  { label: "Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later" },
];
const businessMenu = [
  { label: "Become a Partner Store", to: "/become-a-partner" },
  { label: "Business Financing", to: "/business-financing" },
  { label: "Partner Support", to: "/support" },
];
const loginMenu = [
  { label: "Customer Login", to: "/customer-login" },
  { label: "Partner Login", to: "/partner-login" },
];
const getStartedMenu = [
  { label: "Check Protection Price", to: "/protection-calculator" },
  { label: "Buy Now, Get Protected & Pay Later", to: "/buy-now-get-protected-pay-later" },
  { label: "Fix Now, Get Protected & Pay Later", to: "/fix-now-get-protected-pay-later" },
  { label: "Find a Partner Store", to: "/partner-stores" },
];

function NavDropdown({ label, items }: { label: string; items: { label: string; to: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 text-sm font-medium py-2"
        style={{ color: "var(--color-navy)" }}
      >
        {label}
        <ChevronDown size={14} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 pt-2 min-w-[280px] z-40"
          >
            <div className="bg-white border border-[var(--color-border)] shadow-lg">
              {items.map((it) => (
                <Link
                  key={it.to}
                  to={it.to}
                  className="block px-5 py-3 text-sm hover:bg-[var(--color-bg-blue)]"
                  style={{ color: "var(--color-ink)" }}
                >
                  {it.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-[var(--color-border)]">
      <Container>
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-lg"
            style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
          >
            <span
              className="inline-block w-8 h-8 rounded-sm"
              style={{ background: "var(--gradient-brand)" }}
              aria-hidden
            />
            Mona Protect
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <NavDropdown label="Products" items={productsMenu} />
            <Link
              to="/protection-calculator"
              className="text-sm font-medium"
              style={{ color: "var(--color-navy)" }}
            >
              Protection Calculator
            </Link>
            <Link
              to="/partner-stores"
              className="text-sm font-medium"
              style={{ color: "var(--color-navy)" }}
            >
              Partner Stores
            </Link>
            <Link
              to="/supported-devices"
              className="text-sm font-medium"
              style={{ color: "var(--color-navy)" }}
            >
              Supported Devices
            </Link>
            <NavDropdown label="For Businesses" items={businessMenu} />
            <Link
              to="/support"
              className="text-sm font-medium"
              style={{ color: "var(--color-navy)" }}
            >
              Support
            </Link>
            <NavDropdown label="Login" items={loginMenu} />
            <NavDropdown label="Get Started" items={getStartedMenu} />
          </nav>

          <div className="hidden lg:block">
            <Button as="link" to="/protection-calculator" variant="primary">
              Get Started
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden p-2"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex items-center justify-between h-16 px-6 border-b border-[var(--color-border)]">
              <span
                className="font-bold text-lg"
                style={{ color: "var(--color-navy)", fontFamily: "var(--font-heading)" }}
              >
                Mona Protect
              </span>
              <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <motion.nav
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05 }}
              className="p-6 flex flex-col gap-4 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 64px)" }}
            >
              <MobileGroup
                label="Products"
                items={productsMenu}
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileLink
                label="Protection Calculator"
                to="/protection-calculator"
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileLink
                label="Partner Stores"
                to="/partner-stores"
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileLink
                label="Supported Devices"
                to="/supported-devices"
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileGroup
                label="For Businesses"
                items={businessMenu}
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileLink label="Support" to="/support" onNavigate={() => setMobileOpen(false)} />
              <MobileGroup
                label="Login"
                items={loginMenu}
                onNavigate={() => setMobileOpen(false)}
              />
              <MobileGroup
                label="Get Started"
                items={getStartedMenu}
                onNavigate={() => setMobileOpen(false)}
              />
              <div className="flex flex-col gap-3 pt-4">
                <Button as="link" to="/protection-calculator" variant="primary">
                  Check Protection Price
                </Button>
                <Button
                  as="a"
                  href={waLink(waMessages.general)}
                  variant="wa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> Continue on WhatsApp
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function MobileGroup({
  label,
  items,
  onNavigate,
}: {
  label: string;
  items: { label: string; to: string }[];
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between text-left font-semibold py-2"
        style={{ color: "var(--color-navy)" }}
      >
        {label}
        <ChevronDown size={18} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="pl-3 flex flex-col gap-2 pb-2">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              onClick={onNavigate}
              className="text-sm py-1"
              style={{ color: "var(--color-text)" }}
            >
              {it.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
function MobileLink({
  label,
  to,
  onNavigate,
}: {
  label: string;
  to: string;
  onNavigate: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="font-semibold py-2"
      style={{ color: "var(--color-navy)" }}
    >
      {label}
    </Link>
  );
}
