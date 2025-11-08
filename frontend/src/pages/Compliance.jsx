import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, FileText, Award, Globe } from 'lucide-react';

const Compliance = () => {
  const licenses = [
    {
      jurisdiction: 'United States',
      license: 'FinCEN MSB Registration',
      number: 'MSB-XXXXXX',
      status: 'Active'
    },
    {
      jurisdiction: 'European Union',
      license: 'MiFID II Compliance',
      number: 'EU-XXXXXX',
      status: 'Active'
    },
    {
      jurisdiction: 'United Kingdom',
      license: 'FCA Authorization',
      number: 'FCA-XXXXXX',
      status: 'Active'
    },
    {
      jurisdiction: 'Singapore',
      license: 'MAS Payment Services License',
      number: 'PSA-XXXXXX',
      status: 'Active'
    }
  ];

  const frameworks = [
    {
      icon: Shield,
      title: 'AML/KYC Compliance',
      description: 'Robust anti-money laundering and know-your-customer procedures to prevent financial crime.'
    },
    {
      icon: FileText,
      title: 'Data Protection',
      description: 'GDPR, CCPA, and other data protection regulations compliance for user privacy.'
    },
    {
      icon: Award,
      title: 'Industry Standards',
      description: 'PCI DSS Level 1 certified for secure payment processing and data handling.'
    },
    {
      icon: Globe,
      title: 'Global Compliance',
      description: 'Operating in compliance with local regulations across 158+ countries.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Compliance & Regulations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At 3dotpay, we maintain the highest standards of regulatory compliance to protect our users and ensure the integrity of our platform.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Compliance Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frameworks.map((framework, index) => {
              const Icon = framework.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{framework.title}</h3>
                  <p className="text-gray-600">{framework.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Regulatory Licenses</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Jurisdiction</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">License Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">License Number</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {licenses.map((license, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-900">{license.jurisdiction}</td>
                    <td className="px-6 py-4 text-gray-900">{license.license}</td>
                    <td className="px-6 py-4 text-gray-600">{license.number}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex px-3 py-1 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
                        {license.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Anti-Money Laundering (AML)</h3>
              <p className="text-gray-700 mb-4">
                We implement comprehensive AML procedures including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Customer due diligence and enhanced due diligence</li>
                <li>Ongoing transaction monitoring</li>
                <li>Suspicious activity reporting (SAR)</li>
                <li>Regular compliance audits and reviews</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Know Your Customer (KYC)</h3>
              <p className="text-gray-700 mb-4">
                Our KYC process ensures we know our customers through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Identity verification using government-issued documents</li>
                <li>Address verification</li>
                <li>Source of funds verification</li>
                <li>Ongoing customer monitoring</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h3>
              <p className="text-gray-700 mb-4">
                We protect your data in accordance with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>General Data Protection Regulation (GDPR)</li>
                <li>California Consumer Privacy Act (CCPA)</li>
                <li>Other applicable data protection laws</li>
                <li>Industry best practices for data security</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Audit & Reporting</h3>
              <p className="text-gray-700 mb-4">
                We maintain transparency through:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Regular third-party security audits</li>
                <li>Annual compliance reviews</li>
                <li>Transparent reporting to regulators</li>
                <li>Public disclosure of licenses and certifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Questions About Compliance?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our compliance team is here to help with any regulatory questions
          </p>
          <div className="bg-slate-50 p-6 rounded-lg text-left inline-block">
            <p className="text-gray-700 mb-2"><strong>Email:</strong> compliance@3dotpay.com</p>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> 3dotpay Inc., 123 Crypto Street, San Francisco, CA 94102</p>
            <p className="text-gray-700"><strong>Phone:</strong> +1 (888) 3DOT-PAY</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Compliance;