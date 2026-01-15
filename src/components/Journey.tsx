import styles from '@/styles/journey.module.css';

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C4A962">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

const reviews = [
  {
    quote: "This app helped me finally understand what I truly want in life.",
    author: "Sarah K.",
    label: "Verified user"
  },
  {
    quote: "Simple, beautiful, and actually useful. I use it every morning.",
    author: "Marcus T.",
    label: "Verified user"
  },
  {
    quote: "The journey feature is amazing. It's like having a personal coach.",
    author: "Elena R.",
    label: "Verified user"
  }
];

export default function Journey() {
  return (
    <section id="journey" className="section">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <p>Your journey to self-discovery and clarity</p>
        </div>
        
        <div className={styles.reviewsGrid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <span className={styles.quote}>&quot;{review.quote}&quot;</span>
              <div className={styles.reviewFooter}>
                <span className={styles.authorName}>— {review.author}</span>
                <span className={styles.authorLabel}>{review.label}</span>
                <div className={styles.stars}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
