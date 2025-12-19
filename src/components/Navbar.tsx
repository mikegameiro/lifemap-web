import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.navContent}>
        <Link href="/">
          <Image 
            src="/assets/logo.png" 
            alt="Lifemap" 
            width={130} 
            height={36}
            className={styles.logo}
            style={{ width: 'auto', height: '36px' }}
          />
        </Link>
        <ul className={styles.links}>
          <li><Link href="#features">Features</Link></li>
          <li><Link href="#journey">How It Works</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </ul>
      </div>
    </nav>
  );
}

