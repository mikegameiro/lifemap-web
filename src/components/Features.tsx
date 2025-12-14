import Image from 'next/image';
import styles from '@/styles/features.module.css';

const features = [
  {
    icon: '/assets/icons/compass.png',
    title: 'Discover Your Values',
    description: 'Understand what truly matters to you through thoughtful questions and guided reflection exercises.',
  },
  {
    icon: '/assets/icons/bullseye.png',
    title: 'Clarify Your Vision',
    description: 'Create a clear picture of your ideal future and set meaningful goals aligned with your values.',
  },
  {
    icon: '/assets/icons/sparks.png',
    title: 'AI-Powered Guidance',
    description: 'Get personalized insights and encouragement from Iko, your friendly AI life coach companion.',
  },
  {
    icon: '/assets/icons/people.png',
    title: 'Understand Relationships',
    description: 'Reflect on the people who matter most and how they influence your journey.',
  },
  {
    icon: '/assets/icons/diamond.png',
    title: 'Know Your Strengths',
    description: 'Identify your unique abilities and learn how to leverage them for growth.',
  },
  {
    icon: '/assets/icons/sun.png',
    title: 'Design Your Life',
    description: 'Create an actionable plan to bridge the gap between where you are and where you want to be.',
  },
];

export default function Features() {
  return (
    <section className={styles.features} id="features">
      <div className="container">
        <div className="section-header">
          <h2>Your Personal Growth Companion</h2>
          <p>
            Through guided reflection and intuitive tools, Lifemap helps you map 
            your values and turn insights into meaningful goals.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>
                <Image 
                  src={feature.icon} 
                  alt={feature.title} 
                  width={32} 
                  height={32} 
                />
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


