import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-darker-bg text-near-white">
      <div className="max-w-3xl mx-auto px-6 py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary/80 hover:text-primary font-syne text-sm mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <div className="mb-12">
          <p className="font-syne text-xs tracking-[0.3em] uppercase text-primary mb-4">
            Legal
          </p>
          <h1 className="font-playfair text-5xl text-near-white mb-4">
            Privacy Policy
          </h1>
          <p className="font-syne text-near-white/50 text-sm">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-10 font-syne text-near-white/75 leading-relaxed">
          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              1. Information We Collect
            </h2>
            <p>
              When you use the contact form on this portfolio, we collect the
              name, email address, and message content you provide. This
              information is used solely to respond to your inquiry.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              2. How We Use Your Information
            </h2>
            <p>
              Your information is used exclusively to communicate with you
              regarding your inquiry. We do not sell, trade, or otherwise
              transfer your personally identifiable information to third
              parties.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              3. Data Storage
            </h2>
            <p>
              Messages submitted through this portfolio are stored on the
              Internet Computer blockchain. By submitting a message, you consent
              to this storage method. The data is immutable once stored
              on-chain.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              4. Cookies
            </h2>
            <p>
              This portfolio does not use tracking cookies. We may use essential
              cookies required for Internet Identity authentication if you
              choose to connect your identity.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              5. Third-Party Links
            </h2>
            <p>
              This portfolio may contain links to external websites (YouTube,
              LinkedIn, X/Twitter). We are not responsible for the privacy
              practices of these third-party sites.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              6. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy, please reach out
              via the contact form on this portfolio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
