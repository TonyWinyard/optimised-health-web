import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 lg:px-12 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h1 className="font-heading text-3xl lg:text-4xl font-bold text-foreground mb-2">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: 16 July 2025</p>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground/80 leading-relaxed">
                Your privacy is important to us. This Privacy Policy explains what personal data we collect, why we collect it, and how we protect it in accordance with the UK GDPR and Data Protection Act 2018.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">2. Data Controller</h2>
              <p className="text-foreground/80 leading-relaxed">
                Dr Ashwin Bhandari is the data controller for personal information processed via this Site. Contact: privacy@optimisedhealth.co.uk.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">3. What Data We Collect</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-heading font-semibold">Category</th>
                      <th className="border border-border p-3 text-left font-heading font-semibold">Examples</th>
                      <th className="border border-border p-3 text-left font-heading font-semibold">When collected</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-3 font-medium">Identity</td>
                      <td className="border border-border p-3">Name, title</td>
                      <td className="border border-border p-3">Contact form, booking</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Contact</td>
                      <td className="border border-border p-3">Email, phone</td>
                      <td className="border border-border p-3">Contact form, booking</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Technical</td>
                      <td className="border border-border p-3">IP address, browser type</td>
                      <td className="border border-border p-3">Browsing the Site</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Usage</td>
                      <td className="border border-border p-3">Page interactions, referral source</td>
                      <td className="border border-border p-3">Analytics cookies</td>
                    </tr>
                    <tr>
                      <td className="border border-border p-3 font-medium">Health enquiry (optional)</td>
                      <td className="border border-border p-3">Brief free‑text description</td>
                      <td className="border border-border p-3">Contact form or pre‑consultation intake</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-foreground/80 leading-relaxed mt-4">
                <strong>Note:</strong> We do not store special‑category health data on the Site's servers; any detailed medical data is collected only during consultations and processed under a separate medical records policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">4. How We Use Your Data</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>To respond to enquiries and schedule consultations (Art. 6(1)(b) – contract).</li>
                <li>To send administrative emails (confirmations, reminders).</li>
                <li>To improve Site performance and user experience (Art. 6(1)(f) – legitimate interests).</li>
                <li>With your consent, to send newsletters or marketing messages (opt‑in, Art. 6(1)(a)).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">5. Cookies & Tracking Technologies</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We use:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Essential cookies (security, session management).</li>
                <li>Analytics cookies (e.g., Plausible, GA4) to measure traffic; IP addresses are truncated.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                You can control cookies via your browser settings. See our Cookie Banner for granular choices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">6. Sharing of Data</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">We share data only with:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li><strong>Service providers:</strong> Vercel (hosting, EU edge), Calendly (scheduling, US—Standard Contractual Clauses in place), email delivery (Postmark, EU region).</li>
                <li><strong>Regulators or law‑enforcement agencies</strong> when legally required.</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                We never sell personal data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">7. International Transfers</h2>
              <p className="text-foreground/80 leading-relaxed">
                Where providers are based outside the UK/EEA (e.g., Calendly, Postmark), data is transferred under UK adequacy regulations or SCCs to safeguard your rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li><strong>General enquiries & contact‑form submissions:</strong> 12 months then automatic deletion.</li>
                <li><strong>Booking records:</strong> kept 7 years to comply with medical practice obligations.</li>
                <li><strong>Analytics data:</strong> anonymised and aggregated after 14 months.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">9. Security Measures</h2>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>TLS 1.3 encryption; HSTS preload.</li>
                <li>Principles of least privilege & role‑based access control.</li>
                <li>Regular dependency scanning (Dependabot) and vulnerability testing (Snyk, OWASP ZAP).</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">10. Your Rights</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 mb-4">
                <li>Access your data.</li>
                <li>Rectify inaccurate data.</li>
                <li>Erase data ("right to be forgotten").</li>
                <li>Restrict processing.</li>
                <li>Data portability.</li>
                <li>Object to processing.</li>
                <li>Lodge a complaint with the Information Commissioner's Office (ICO).</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed">
                Contact privacy@optimisedhealth.co.uk to exercise your rights. We will respond within 30 days.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">11. Third‑Party Links</h2>
              <p className="text-foreground/80 leading-relaxed">
                The Site may contain links to external sites (e.g., scientific articles). We are not responsible for their privacy practices.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">12. Changes to this Policy</h2>
              <p className="text-foreground/80 leading-relaxed">
                We may update this Policy periodically. Material changes will be highlighted on the Site's homepage. Please review regularly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">13. Contact</h2>
              <p className="text-foreground/80 leading-relaxed">
                For privacy enquiries contact privacy@optimisedhealth.co.uk or write to: Dr Ashwin Bhandari, 12 Harley Street, London W1G 9PG, United Kingdom.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;