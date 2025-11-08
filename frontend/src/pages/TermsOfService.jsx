import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last Updated: March 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using 3dotpay services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Eligibility</h2>
              <p className="text-gray-700 mb-4">
                To use our services, you must:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Have the legal capacity to enter into binding contracts</li>
                <li>Not be prohibited from using our services under applicable laws</li>
                <li>Complete our KYC verification process</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Account Registration and Security</h2>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">3.1 Account Creation</h3>
              <p className="text-gray-700 mb-4">
                You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">3.2 Security</h3>
              <p className="text-gray-700 mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use a strong, unique password</li>
                <li>Enable two-factor authentication</li>
                <li>Not share your account with others</li>
                <li>Notify us immediately of any unauthorized access</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Use of Services</h2>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.1 Permitted Use</h3>
              <p className="text-gray-700 mb-4">
                You may use our services for lawful purposes only, in accordance with these Terms.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">4.2 Prohibited Activities</h3>
              <p className="text-gray-700 mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Use our services for illegal activities</li>
                <li>Engage in money laundering or fraud</li>
                <li>Violate any laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of our services</li>
                <li>Create multiple accounts to circumvent restrictions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Fees and Payments</h2>
              <p className="text-gray-700 mb-4">
                We charge fees for certain services as disclosed on our platform. Fees may be changed at any time with advance notice. You are responsible for all fees associated with your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Cards and Transactions</h2>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">6.1 Virtual and Physical Cards</h3>
              <p className="text-gray-700 mb-4">
                We provide virtual and physical payment cards subject to approval. Cards remain our property and must be returned upon request.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">6.2 Transaction Limits</h3>
              <p className="text-gray-700 mb-4">
                We may impose transaction limits based on verification level and other factors. You will be notified of applicable limits.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, trademarks, and intellectual property on our platform are owned by 3dotpay or our licensors. You may not use our intellectual property without express written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-gray-700 mb-4">
                Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, 3dotpay shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Account Suspension and Termination</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to suspend or terminate your account at any time for violation of these Terms or for any other reason. You may also terminate your account at any time by contacting us.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Dispute Resolution</h2>
              <p className="text-gray-700 mb-4">
                Any disputes arising from these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We may modify these Terms at any time. We will notify you of material changes via email or platform notification. Continued use of our services constitutes acceptance of modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@3dotpay.com</p>
                <p className="text-gray-700 mb-2"><strong>Address:</strong> 3dotpay Inc., 123 Crypto Street, San Francisco, CA 94102</p>
                <p className="text-gray-700"><strong>Phone:</strong> +1 (888) 3DOT-PAY</p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;