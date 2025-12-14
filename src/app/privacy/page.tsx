import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/legal.module.css';

export const metadata = {
  title: 'Privacy Policy | Lifemap',
  description: 'Learn how Lifemap collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <ChevronLeft />
            Back to Home
          </Link>
          
          <div className={styles.header}>
            <h1>Privacy Policy</h1>
            <p>Last updated: December 2024</p>
          </div>

          <div className={styles.content}>
            <h2>1. Introduction</h2>
            <p>
              At Lifemap, we take your privacy seriously. This Privacy Policy explains 
              how we collect, use, store, and protect your personal information when 
              you use our mobile application and services.
            </p>
            <p>
              By using Lifemap, you consent to the data practices described in this 
              policy. If you do not agree with our practices, please do not use the App.
            </p>

            <h2>2. Information We Collect</h2>
            
            <h3>2.1 Information You Provide</h3>
            <ul>
              <li>
                <strong>Account Information:</strong> Email address, name, and password 
                when you create an account
              </li>
              <li>
                <strong>Profile Information:</strong> Optional profile details such as 
                photo and bio
              </li>
              <li>
                <strong>User Content:</strong> Journal entries, reflections, goals, 
                values, and other personal content you create within the App
              </li>
              <li>
                <strong>Survey Responses:</strong> Answers to onboarding and in-app 
                questionnaires
              </li>
              <li>
                <strong>Communications:</strong> Messages you send to our support team
              </li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <ul>
              <li>
                <strong>Device Information:</strong> Device type, operating system, 
                unique device identifiers
              </li>
              <li>
                <strong>Usage Data:</strong> Features used, time spent in the App, 
                interaction patterns
              </li>
              <li>
                <strong>Log Data:</strong> IP address, browser type, access times, 
                and pages viewed
              </li>
              <li>
                <strong>Crash Reports:</strong> Information about app crashes and errors 
                to improve stability
              </li>
            </ul>

            <h3>2.3 Information from Third Parties</h3>
            <p>
              If you sign in using a third-party service (Google, Apple), we receive 
              basic profile information as permitted by that service and your privacy 
              settings.
            </p>

            <h2>3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide, maintain, and improve the Lifemap App</li>
              <li>Personalize your experience and provide AI-powered insights</li>
              <li>Process your subscription and manage your account</li>
              <li>Send service-related notifications (e.g., reminders, updates)</li>
              <li>Respond to your support requests and communications</li>
              <li>Analyze usage patterns to improve our features</li>
              <li>Ensure the security and integrity of our services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. AI Processing</h2>
            <p>
              Lifemap uses artificial intelligence to provide personalized coaching 
              and insights through &quot;Iko,&quot; our AI companion. When you interact 
              with Iko:
            </p>
            <ul>
              <li>Your messages and relevant context are sent to our AI provider (OpenAI)</li>
              <li>AI responses are generated based on your input and journey context</li>
              <li>We do not use your personal content to train AI models</li>
              <li>AI conversations are stored securely and associated with your account</li>
            </ul>

            <h2>5. Data Sharing and Disclosure</h2>
            <p>
              We do not sell your personal information. We may share your information 
              only in the following circumstances:
            </p>
            
            <h3>5.1 Service Providers</h3>
            <p>
              We work with trusted third-party providers who assist us in operating 
              the App, including:
            </p>
            <ul>
              <li><strong>Supabase:</strong> Database and authentication services</li>
              <li><strong>OpenAI:</strong> AI processing for Iko features</li>
              <li><strong>App Stores:</strong> Payment processing (Apple, Google)</li>
              <li><strong>Analytics Providers:</strong> Usage analytics (anonymized)</li>
            </ul>

            <h3>5.2 Legal Requirements</h3>
            <p>
              We may disclose your information if required by law or in response to 
              valid legal requests (e.g., subpoenas, court orders).
            </p>

            <h3>5.3 Business Transfers</h3>
            <p>
              If Lifemap is involved in a merger, acquisition, or sale of assets, 
              your information may be transferred as part of that transaction.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your data:
            </p>
            <ul>
              <li>Encryption in transit (TLS/SSL) and at rest</li>
              <li>Secure authentication with password hashing</li>
              <li>Regular security audits and vulnerability testing</li>
              <li>Access controls limiting employee access to user data</li>
              <li>Secure cloud infrastructure with Supabase</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission 
              or storage is 100% secure. We cannot guarantee absolute security.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your information for as long as your account is active or as 
              needed to provide services. After account deletion:
            </p>
            <ul>
              <li>Personal data is deleted within 30 days</li>
              <li>Backups may retain data for up to 90 days</li>
              <li>Anonymized analytics data may be retained indefinitely</li>
              <li>Some data may be retained to comply with legal obligations</li>
            </ul>

            <h2>8. Your Rights and Choices</h2>
            <p>You have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your account and data</li>
              <li><strong>Export:</strong> Download your data in a portable format</li>
              <li><strong>Opt-out:</strong> Disable notifications and marketing communications</li>
              <li><strong>Withdraw Consent:</strong> Revoke consent for data processing</li>
            </ul>
            <p>
              To exercise these rights, contact us at{' '}
              <a href="mailto:support@thelifemap.xyz">support@thelifemap.xyz</a> or 
              use the in-app settings.
            </p>

            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other 
              than your own. We ensure appropriate safeguards are in place for such 
              transfers, including standard contractual clauses where applicable.
            </p>

            <h2>10. Children&apos;s Privacy</h2>
            <p>
              Lifemap is not intended for children under 13. We do not knowingly 
              collect information from children under 13. If we become aware that 
              we have collected such information, we will delete it promptly.
            </p>

            <h2>11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify 
              you of significant changes through the App or via email. Your continued 
              use of the App after changes constitutes acceptance of the updated policy.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, 
              please contact us:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@thelifemap.xyz">support@thelifemap.xyz</a>
            </p>
            <p>
              <strong>Feedback Board:</strong>{' '}
              <a href="https://lifemap.userjot.com" target="_blank" rel="noopener noreferrer">
                lifemap.userjot.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}


