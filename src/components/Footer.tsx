import Link from 'next/link';
import styles from '@/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <h4>About</h4>
            <p>
              Lifemap is not about quick fixes or hustle culture. It&apos;s about 
              alignment, awareness, and designing a life that feels true to you.
            </p>
          </div>
          <div className={styles.links}>
            <h4>Product</h4>
            <ul>
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#journey">Testimonials</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="#">Download</Link></li>
            </ul>
          </div>
          <div className={styles.links}>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><a href="mailto:support@thelifemap.xyz">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2025 Lifemap. Made with ❤️ in Portugal</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

