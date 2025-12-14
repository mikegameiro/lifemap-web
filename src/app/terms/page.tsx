import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/legal.module.css';

export const metadata = {
  title: 'Terms & Conditions | Lifemap',
  description: 'Terms and conditions for using the Lifemap app and services.',
};

export default function TermsPage() {
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
            <h1>Terms & Conditions</h1>
            <p>Last updated: December 2024</p>
          </div>

          <div className={styles.content}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By downloading, installing, or using the Lifemap mobile application 
              (&quot;App&quot;), you agree to be bound by these Terms and Conditions 
              (&quot;Terms&quot;). If you do not agree to these Terms, please do not 
              use the App.
            </p>
            <p>
              Lifemap reserves the right to modify these Terms at any time. We will 
              notify users of any material changes through the App or via email. 
              Your continued use of the App after such modifications constitutes 
              acceptance of the updated Terms.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              Lifemap is a personal growth and life-design application that provides:
            </p>
            <ul>
              <li>Guided self-reflection exercises and journaling prompts</li>
              <li>Personal value discovery and clarification tools</li>
              <li>Goal setting and action planning features</li>
              <li>AI-powered coaching and insights (via &quot;Iko&quot;)</li>
              <li>Progress tracking and milestone celebrations</li>
            </ul>
            <p>
              Lifemap is designed as a self-help tool and is not a substitute for 
              professional mental health services, therapy, or medical advice.
            </p>

            <h2>3. User Accounts</h2>
            <h3>3.1 Registration</h3>
            <p>
              To use certain features of the App, you must create an account. You 
              agree to provide accurate, current, and complete information during 
              registration and to update such information to keep it accurate.
            </p>
            <h3>3.2 Account Security</h3>
            <p>
              You are responsible for maintaining the confidentiality of your account 
              credentials and for all activities that occur under your account. You 
              agree to notify us immediately of any unauthorized use of your account.
            </p>
            <h3>3.3 Age Requirements</h3>
            <p>
              You must be at least 13 years old to use Lifemap. If you are under 18, 
              you must have parental or guardian consent to use the App.
            </p>

            <h2>4. User Content</h2>
            <h3>4.1 Ownership</h3>
            <p>
              You retain ownership of all content you create within the App, including 
              journal entries, reflections, goals, and personal data (&quot;User Content&quot;). 
              By using the App, you grant Lifemap a limited license to store and process 
              your User Content solely to provide the service.
            </p>
            <h3>4.2 Privacy of User Content</h3>
            <p>
              Your User Content is private by default. We do not share your personal 
              reflections or journal entries with third parties except as described 
              in our Privacy Policy or with your explicit consent.
            </p>
            <h3>4.3 Prohibited Content</h3>
            <p>You agree not to use the App to:</p>
            <ul>
              <li>Upload content that is illegal, harmful, or violates others&apos; rights</li>
              <li>Harass, abuse, or harm another person</li>
              <li>Impersonate any person or entity</li>
              <li>Attempt to gain unauthorized access to the App or its systems</li>
            </ul>

            <h2>5. AI Features and Limitations</h2>
            <p>
              Lifemap includes AI-powered features (&quot;Iko&quot;) that provide 
              personalized insights and suggestions. You acknowledge that:
            </p>
            <ul>
              <li>AI responses are generated algorithmically and may not always be accurate</li>
              <li>AI features are not a replacement for professional advice</li>
              <li>You should not rely solely on AI suggestions for important life decisions</li>
              <li>We continually improve our AI, which may result in changes to its responses</li>
            </ul>

            <h2>6. Subscriptions and Payments</h2>
            <h3>6.1 Free and Premium Features</h3>
            <p>
              Lifemap offers both free and premium subscription plans. Premium features 
              require an active subscription, which is billed through your app store 
              account (Apple App Store or Google Play Store).
            </p>
            <h3>6.2 Billing</h3>
            <p>
              Subscription fees are billed in advance on a recurring basis (monthly or 
              annually, depending on your selected plan). Your subscription will 
              automatically renew unless canceled at least 24 hours before the end of 
              the current billing period.
            </p>
            <h3>6.3 Refunds</h3>
            <p>
              Refund requests are handled through your respective app store in accordance 
              with their refund policies. Lifemap does not directly process refunds.
            </p>

            <h2>7. Intellectual Property</h2>
            <p>
              The App, including its design, features, content, and underlying technology, 
              is owned by Lifemap and protected by intellectual property laws. You may not 
              copy, modify, distribute, or reverse-engineer any part of the App without 
              our prior written consent.
            </p>

            <h2>8. Disclaimer of Warranties</h2>
            <p>
              THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT 
              WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE APP 
              WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>
            <p>
              LIFEMAP DOES NOT PROVIDE MEDICAL, PSYCHOLOGICAL, OR PROFESSIONAL ADVICE. 
              THE APP IS FOR INFORMATIONAL AND SELF-IMPROVEMENT PURPOSES ONLY.
            </p>

            <h2>9. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LIFEMAP SHALL NOT BE LIABLE FOR 
              ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, 
              INCLUDING LOSS OF DATA, PROFITS, OR GOODWILL, ARISING FROM YOUR USE OF 
              THE APP.
            </p>

            <h2>10. Termination</h2>
            <p>
              You may terminate your account at any time by deleting your account through 
              the App settings. We may terminate or suspend your account if you violate 
              these Terms or engage in conduct that we determine is harmful to the App 
              or other users.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws 
              of Portugal, without regard to its conflict of law provisions. Any disputes 
              arising from these Terms shall be resolved in the courts of Lisbon, Portugal.
            </p>

            <h2>12. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@thelifemap.xyz">support@thelifemap.xyz</a>
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


