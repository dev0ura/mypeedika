import SiteNavbar from "@/components/ui/site-navbar";
import { PricingSection } from "@/components/ui/pricing";
import Footer from "@/components/ui/footer";

export default function PricingPage() {
  return (
    <div>
      <SiteNavbar />
      <div className="py-26 flex flex-col items-center justify-center">
        <PricingSection
          heading="Plans that Scale with You"
          description="Whether you're just starting out or growing fast, our flexible pricing has you covered — with no hidden costs."
          plans={PLANS}
        />
        <i className="text-center text-sm text-gray-500">Additional one time setup fee will be charged based on your requirements*</i>
      </div>
      <Footer />
    </div>
  );
}

const PLANS = [
  {
    name: 'Starter',
    info: 'For small businesses',
    price: { monthly: 3500, yearly: Math.round(3500 * 12 * (1 - 0.12)) },
    features: [
      { text: 'Web Store Frontend' },
      { text: 'Ecommerce Backend' },
      { text: '1 Staff Account' },
      { text: '1000 Daily Visitors' },
    ],
    btn: { text: 'Start Your Free Trial', href: '#' },
  },
  {
    highlighted: true,
    name: 'Agentic',
    info: 'For small businesses',
    price: { monthly: 4500, yearly: Math.round(4500 * 12 * (1 - 0.12)) },
    features: [
      { text: 'Everything in Starter' },
      { text: 'WhatsApp Chat Agent' },
      { text: 'Instagram Chat Agent' },
      { text: '+ 1000 Daily Visitors' },
    ],
    btn: { text: 'Get started', href: '#' },
  },
  {
    name: 'Everything',
    info: 'For large organizations',
    price: { monthly: 5500, yearly: Math.round(5500 * 12 * (1 - 0.12)) },
    features: [
      { text: 'Everything in Agentic' },
      { text: 'IOS Mobile App' },
      { text: 'Android Mobile App' },
      { text: '+ 1000 Daily Visitors' },
    ],
    btn: { text: 'Contact team', href: '#' },
  },
];


