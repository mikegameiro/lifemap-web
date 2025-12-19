'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from './faq.module.css';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FAQSection {
  title: string;
  items: FAQItem[];
}

const faqData: FAQSection[] = [
  {
    title: 'Getting Started',
    items: [
      {
        question: 'What is Lifemap?',
        answer: (
          <p>
            Lifemap is a guided self-discovery app that helps you find clarity, define 
            your purpose, and create an actionable plan for your life. Through 7 thoughtful 
            levels, you&apos;ll explore your past, understand your present, and design your future.
          </p>
        ),
      },
      {
        question: 'How do I create an account?',
        answer: (
          <p>
            You can sign up using your email address, Google account, or Apple ID. After 
            completing a brief onboarding, you&apos;ll have full access to begin your journey.
          </p>
        ),
      },
      {
        question: 'Is Lifemap free?',
        answer: (
          <>
            <p>Lifemap offers both free and premium tiers:</p>
            <ul>
              <li><strong>Free:</strong> Access to the first level and basic features</li>
              <li><strong>Premium:</strong> All 7 levels, AI Buddy chat, export functionality, and future features</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: 'The Journey',
    items: [
      {
        question: 'How many levels are there?',
        answer: (
          <>
            <p>There are <strong>7 levels</strong> in the Lifemap journey:</p>
            <ol>
              <li><strong>Start</strong> - Orient yourself to your current situation</li>
              <li><strong>History</strong> - Reflect on experiences that shaped you</li>
              <li><strong>Typical Week</strong> - Understand how you spend your time</li>
              <li><strong>SWOT</strong> - Assess your strengths, weaknesses, opportunities, and threats</li>
              <li><strong>Vision</strong> - Imagine your ideal future</li>
              <li><strong>Choices</strong> - Define your purpose and key outcomes</li>
              <li><strong>Action Plan</strong> - Create a roadmap to make it happen</li>
            </ol>
          </>
        ),
      },
      {
        question: 'Do I have to complete levels in order?',
        answer: (
          <p>
            Yes. Lifemap is designed as a progressive journey where each level builds on 
            insights from the previous ones. You must complete a level before moving to the 
            next one. This ensures you have the foundation needed for deeper self-discovery.
          </p>
        ),
      },
      {
        question: 'How long does each level take?',
        answer: (
          <>
            <p>
              Each level takes approximately <strong>25-60 minutes</strong>, but there&apos;s no rush! 
              Lifemap is intentionally designed to be a <strong>slow, reflective experience</strong>. 
              We encourage you to:
            </p>
            <ul>
              <li>Take breaks between levels</li>
              <li>Revisit previous levels anytime</li>
              <li>Let insights settle before moving forward</li>
              <li>Return to questions as your perspective evolves</li>
            </ul>
          </>
        ),
      },
      {
        question: 'Can I change my answers later?',
        answer: (
          <p>
            Absolutely! Your journey is meant to evolve. You can revisit any completed level 
            and update your answers as you gain new insights or as your life circumstances change.
          </p>
        ),
      },
      {
        question: 'Will there be more journeys in the future?',
        answer: (
          <p>
            Yes! We&apos;re planning to add new specialized journeys in future updates. These may 
            focus on specific life areas like career, relationships, creativity, and more. Stay tuned!
          </p>
        ),
      },
    ],
  },
  {
    title: 'Premium Features',
    items: [
      {
        question: "What's included in Premium?",
        answer: (
          <>
            <p>Premium members get access to:</p>
            <ul>
              <li>✅ All 7 journey levels</li>
              <li>✅ AI Buddy (Iko) - unlimited chat with your personal AI coach</li>
              <li>✅ Export your complete Lifemap</li>
              <li>✅ Priority access to new features and journeys</li>
            </ul>
          </>
        ),
      },
      {
        question: 'How does the AI Buddy work?',
        answer: (
          <>
            <p>
              The AI Buddy (Iko) is your personal AI coach available exclusively to Premium users. 
              You can:
            </p>
            <ul>
              <li>Ask for motivation and encouragement</li>
              <li>Get a summary of your journey progress</li>
              <li>Discuss your goals and challenges</li>
              <li>Receive personalized insights based on your answers</li>
            </ul>
            <p>Access the AI Buddy by tapping the <strong>&quot;Buddy&quot;</strong> tab in the app.</p>
          </>
        ),
      },
      {
        question: 'How do I export my Lifemap?',
        answer: (
          <>
            <p>Export is available for Premium users. To export your complete journey:</p>
            <ol>
              <li>Go to <strong>Profile</strong> (tab at bottom)</li>
              <li>Tap <strong>&quot;Export&quot;</strong> or find it in Settings</li>
              <li>Choose to share or save your Lifemap</li>
            </ol>
            <p>
              Your export includes all your answers, insights, and action plans in a beautifully 
              formatted document.
            </p>
          </>
        ),
      },
      {
        question: 'How do I upgrade to Premium?',
        answer: (
          <>
            <p>You can upgrade to Premium:</p>
            <ul>
              <li>When prompted during your journey</li>
              <li>By tapping <strong>&quot;Upgrade&quot;</strong> in your Profile/Account</li>
              <li>Through the in-app subscription options</li>
            </ul>
            <p>Premium is available as a monthly or yearly subscription.</p>
          </>
        ),
      },
      {
        question: 'How do I cancel my subscription?',
        answer: (
          <>
            <p>Subscriptions are managed through your device:</p>
            <ul>
              <li><strong>iPhone/iPad:</strong> Settings → Apple ID → Subscriptions → Lifemap</li>
            </ul>
            <p>Your access continues until the end of your current billing period.</p>
          </>
        ),
      },
      {
        question: 'Can I restore my purchase on a new device?',
        answer: (
          <p>
            Yes! Go to <strong>Profile</strong> → <strong>Account</strong> → <strong>Restore Purchases</strong>. 
            This will restore your Premium access if you have an active subscription.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Privacy & Data',
    items: [
      {
        question: 'Is my data private?',
        answer: (
          <p>
            Yes. Your journey answers and personal reflections are private and secure. We use 
            industry-standard encryption and never sell your data. Read our full{' '}
            <Link href="/privacy">Privacy Policy</Link> for details.
          </p>
        ),
      },
      {
        question: 'Can I delete my account?',
        answer: (
          <p>
            Yes. You can delete your account and all associated data from{' '}
            <strong>Profile</strong> → <strong>Settings</strong> → <strong>Delete Account</strong>. 
            This action is permanent and cannot be undone.
          </p>
        ),
      },
      {
        question: 'Does the AI Buddy store my conversations?',
        answer: (
          <p>
            AI Buddy conversations are stored to provide continuity in your coaching experience. 
            You can clear your chat history anytime from the Buddy screen.
          </p>
        ),
      },
    ],
  },
  {
    title: 'Troubleshooting',
    items: [
      {
        question: 'The app is running slowly. What should I do?',
        answer: (
          <>
            <p>Try these steps:</p>
            <ol>
              <li>Close and reopen the app</li>
              <li>Check your internet connection</li>
              <li>Update to the latest version from the App Store</li>
              <li>Restart your device</li>
            </ol>
          </>
        ),
      },
      {
        question: "I can't sign in with Google/Apple",
        answer: (
          <>
            <p>Make sure you:</p>
            <ul>
              <li>Have a stable internet connection</li>
              <li>Are using the same account you originally signed up with</li>
              <li>Have allowed Lifemap access in your device settings</li>
            </ul>
          </>
        ),
      },
      {
        question: "My progress isn't saving",
        answer: (
          <p>
            Lifemap requires an internet connection to save your progress. Check your connection 
            and try again. If the problem persists, contact support.
          </p>
        ),
      },
      {
        question: 'I found a bug or have feedback',
        answer: (
          <p>
            We&apos;d love to hear from you! Contact us at{' '}
            <a href="mailto:support@thelifemap.xyz">support@thelifemap.xyz</a> or use the{' '}
            <strong>Report</strong> button in the app (flag icon in the Buddy tab).
          </p>
        ),
      },
    ],
  },
  {
    title: 'Contact & Support',
    items: [
      {
        question: 'How do I contact support?',
        answer: (
          <p>
            Email us at <a href="mailto:support@thelifemap.xyz">support@thelifemap.xyz</a> - 
            we typically respond within 24-48 hours.
          </p>
        ),
      },
      {
        question: 'Where can I learn more?',
        answer: (
          <ul>
            <li>Website: <Link href="/">thelifemap.xyz</Link></li>
            <li>Privacy Policy: <Link href="/privacy">thelifemap.xyz/privacy</Link></li>
            <li>Terms of Service: <Link href="/terms">thelifemap.xyz/terms</Link></li>
          </ul>
        ),
      },
    ],
  },
];

function FAQAccordion({ item, isOpen, onClick }: { item: FAQItem; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
      <button className={styles.question} onClick={onClick} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <ChevronIcon className={styles.chevron} />
      </button>
      <div className={styles.answerWrapper}>
        <div className={styles.answer}>
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <Link href="/" className={styles.backLink}>
            <ChevronLeftIcon />
            Back to Home
          </Link>
          
          <div className={styles.header}>
            <h1>Frequently Asked Questions</h1>
            <p>Everything you need to know about Lifemap</p>
          </div>

          <div className={styles.content}>
            {faqData.map((section, sectionIndex) => (
              <div key={sectionIndex} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <div className={styles.accordionList}>
                  {section.items.map((item, itemIndex) => {
                    const itemId = `${sectionIndex}-${itemIndex}`;
                    return (
                      <FAQAccordion
                        key={itemId}
                        item={item}
                        isOpen={openItems.has(itemId)}
                        onClick={() => toggleItem(itemId)}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.contact}>
            <p>Still have questions?</p>
            <a href="mailto:support@thelifemap.xyz" className="btn btn-primary">
              Contact Support
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
