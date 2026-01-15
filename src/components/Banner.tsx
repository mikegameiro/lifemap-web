import styles from '@/styles/banner.module.css';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <div className={styles.item}>
          <GiftIcon />
          100% Free to Download
        </div>
        <div className={styles.item}>
          <SparkIcon />
          Transformative Tools for Personal Growth
        </div>
        <div className={styles.item}>
          <UsersIcon />
          Join 1M+ Mindful Users Worldwide
        </div>
        <div className={styles.item}>
          <PhoneIcon />
          Available on iOS and Android
        </div>
      </div>
    </div>
  );
}

function GiftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="8" width="18" height="14" rx="2" />
      <path d="M12 8v14" />
      <path d="M3 12h18" />
      <path d="M12 8c-2-3-6-3-6 0s4 0 6 0c2-3 6-3 6 0s-4 0-6 0" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L9 12l-7 2 7 2 3 6 3-6 7-2-7-2-3-10z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="2" width="14" height="20" rx="2" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  );
}
