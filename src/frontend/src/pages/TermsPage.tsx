import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
            Terms of Use
          </h1>
          <p className="font-syne text-near-white/50 text-sm">
            Last updated: January 2025
          </p>
        </div>

        <div className="space-y-10 font-syne text-near-white/75 leading-relaxed">
          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing this portfolio website, you agree to be bound by
              these Terms of Use. If you do not agree with any part of these
              terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              2. Intellectual Property
            </h2>
            <p>
              All content on this portfolio — including code, designs,
              mathematical models, project descriptions, and images — is the
              intellectual property of Shahed. Reproduction without written
              permission is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              3. Use of Contact Form
            </h2>
            <p>
              The contact form is provided for legitimate professional
              inquiries. Misuse including spam, harassment, or illegal content
              is strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              4. Genzthepixel
            </h2>
            <p>
              Genzthepixel is an AI-powered math tool created by Shahed.
              References to Genzthepixel on this portfolio are informational.
              Use of Genzthepixel is subject to its own separate terms and
              conditions.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              5. Disclaimer
            </h2>
            <p>
              This portfolio is provided "as is" without warranties of any kind.
              Mathematical formulas and physics models are presented for
              educational and demonstration purposes.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              Shahed shall not be liable for any indirect, incidental, special,
              or consequential damages arising from the use of this portfolio or
              the information contained herein.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-2xl text-near-white mb-4">
              7. Changes to Terms
            </h2>
            <p>
              These terms may be updated at any time without prior notice.
              Continued use of this portfolio constitutes acceptance of the
              revised terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
