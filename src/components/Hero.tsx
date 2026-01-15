import Image from 'next/image';
import styles from '@/styles/hero.module.css';

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#C4A962">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.socialProof}>
              <div className={styles.avatars}>
                <a href="https://www.tiktok.com/@usernameislalita" target="_blank" rel="noopener noreferrer" className={styles.avatar}>
                  <Image src="/assets/faces/usernameislalita.jpeg" alt="@usernameislalita" width={32} height={32} />
                </a>
                <a href="https://www.tiktok.com/@kaybakes15" target="_blank" rel="noopener noreferrer" className={styles.avatar}>
                  <Image src="/assets/faces/kaybakes.jpeg" alt="@kaybakes15" width={32} height={32} />
                </a>
                <a href="https://www.tiktok.com/@glowkim5" target="_blank" rel="noopener noreferrer" className={styles.avatar}>
                  <Image src="/assets/faces/glowkim.jpeg" alt="@glowkim5" width={32} height={32} />
                </a>
                <a href="https://www.tiktok.com/@jasminemonta" target="_blank" rel="noopener noreferrer" className={styles.avatar}>
                  <Image src="/assets/faces/jasmine.jpeg" alt="@jasminemonta" width={32} height={32} />
                </a>
                <a href="https://www.tiktok.com/@thesarahkelso" target="_blank" rel="noopener noreferrer" className={styles.avatar}>
                  <Image src="/assets/faces/thesarah.jpeg" alt="@thesarahkelso" width={32} height={32} />
                </a>
              </div>
              <span className={styles.socialProofText}>
                <strong>mentions</strong> on TikTok
              </span>
            </div>

            <h1>
              Meet Your New<br />
              Life Coach
            </h1>
            <p>
              Lifemap is a personal growth app that helps you slow down, set goals, 
              and see them come true.
            </p>

            <div className={styles.buttons}>
              <a href="#" className={styles.appStoreButton}>
                <Image 
                  src="/assets/downloadappstore.svg" 
                  alt="Download on the App Store" 
                  width={160} 
                  height={52}
                  style={{ height: '52px', width: 'auto' }}
                />
              </a>
              <a 
                href="https://www.producthunt.com/products/lifemap-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-lifemap-6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <img 
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1060789&theme=light&t=1768400733401" 
                  alt="Lifemap - Meet your new life coach | Product Hunt" 
                  width="220" 
                  height="52" 
                  style={{ height: '52px', width: 'auto' }}
                />
              </a>
            </div>

            <div className={styles.testimonial}>
              <span className={styles.quote}>&quot;Lifemap gave me clarity. Now I have an idea of what to do next&quot;</span>
              <span className={styles.authorName}> — ipinini</span>
              <span className={styles.authorLabel}> Verified user</span>
              <div className={styles.stars}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </div>
          <div className={styles.imageWrapper}>
            <Image 
              src="/assets/landing2.png" 
              alt="Lifemap App" 
              width={500} 
              height={500}
              className={styles.mascot}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}



