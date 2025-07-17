import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-6 lg:px-12 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="text-muted-foreground mb-8">
              Last updated: 16 July 2025
            </p>
            
            <div className="space-y-8 font-body text-foreground leading-relaxed">
              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using optimisedhealth.co.uk (the "Site") you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please refrain from using the Site.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">2. Service Description</h2>
                <p>
                  The Site promotes 1‑to‑1 longevity consultations provided by Dr Ashwin Bhandari, MBBS, BSc ("we", "us", "our"). All content is for general information; it does not constitute primary medical care or physician–patient relationship until a consultation booking is confirmed.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">3. Eligibility</h2>
                <p>
                  Use of the Site is limited to individuals aged 18 years or older. By using the Site you warrant that you meet this requirement.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">4. Professional & Medical Disclaimer</h2>
                <p>
                  Information on the Site is not a substitute for personalised medical advice. Always seek the guidance of your own physician or other qualified health professional with any questions regarding your health. Reliance on any information provided by us is solely at your own risk.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">5. Booking & Cancellation Policy</h2>
                <p>
                  Bookings are processed via a third‑party scheduler (currently Calendly). Cancellations or rescheduling must be made ≥ 24 hours before the appointment start time or the session fee may be forfeited. Specific fee and cancellation details are shown during the booking flow and form part of these Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <p>
                  All content on the Site, including text, graphics, logos and images, is our property (or that of our licensors) and is protected by UK and international IP laws. You may not reproduce, distribute or create derivative works without prior written consent.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">7. User Conduct</h2>
                <p className="mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Post or transmit any unlawful, defamatory, or obscene material.</li>
                  <li>Attempt to gain unauthorised access to the Site or its related systems.</li>
                  <li>Use the Site to advertise or solicit unrelated services.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">8. Privacy</h2>
                <p>
                  Our Privacy Policy (below) explains how we collect and use your personal data. By using the Site you consent to such processing and warrant that all data provided by you is accurate.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special or consequential damages, or any loss of profits or revenues, arising out of or in connection with the Site or the services provided.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">10. Indemnity</h2>
                <p>
                  You agree to indemnify and hold us harmless from any claim or demand arising out of your breach of these Terms or your violation of any law or the rights of a third party.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">11. Governing Law & Jurisdiction</h2>
                <p>
                  These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">12. Changes to Terms</h2>
                <p>
                  We may revise these Terms at any time by updating this page. The "Last updated" date will change accordingly. Continued use of the Site after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="font-heading text-2xl font-semibold mb-4">13. Contact</h2>
                <p>
                  Questions about these Terms? Email info@optimisedhealth.co.uk or write to: Dr Ashwin Bhandari, 12 Harley Street, London W1G 9PG, United Kingdom.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;