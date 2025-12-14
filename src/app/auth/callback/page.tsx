'use client';
import { useEffect } from 'react';

export default function AuthCallback() {
  useEffect(() => {
    // Supabase will include tokens in the URL hash
    const hash = window.location.hash;
    
    if (hash) {
      // Redirect to mobile app with the tokens
      window.location.href = `lifemap://callback${hash}`;
    }
  }, []);

  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '24px', marginBottom: '16px' }}>Signing you in...</h1>
      <p style={{ color: '#a0a0a0' }}>Redirecting to the app...</p>
    </div>
  );
}
