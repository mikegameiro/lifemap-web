'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function AuthCallback() {
  const [status, setStatus] = useState<'redirecting' | 'no-tokens' | 'error'>('redirecting');

  useEffect(() => {
    // Supabase will include tokens in the URL hash
    const hash = window.location.hash;
    
    if (hash && hash.includes('access_token')) {
      // Redirect to mobile app with the tokens
      window.location.href = `lifemap://auth/callback${hash}`;
      
      // Fallback timeout in case deep link doesn't work
      setTimeout(() => {
        setStatus('error');
      }, 3000);
    } else {
      setStatus('no-tokens');
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
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <Image
        src="/assets/logo.png"
        alt="Lifemap"
        width={140}
        height={36}
        style={{ width: 'auto', height: '36px', marginBottom: '32px' }}
      />
      
      {status === 'redirecting' && (
        <>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid rgba(255,255,255,0.2)',
            borderTopColor: '#fff',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            marginBottom: '24px'
          }} />
          <h1 style={{ fontSize: '24px', marginBottom: '12px', fontWeight: 600 }}>
            Signing you in...
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px' }}>
            Redirecting to the Lifemap app
          </p>
        </>
      )}

      {status === 'no-tokens' && (
        <>
          <h1 style={{ fontSize: '24px', marginBottom: '12px', fontWeight: 600 }}>
            Invalid Link
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px', maxWidth: '300px' }}>
            This authentication link is invalid or has expired. Please try signing in again from the app.
          </p>
        </>
      )}

      {status === 'error' && (
        <>
          <h1 style={{ fontSize: '24px', marginBottom: '12px', fontWeight: 600 }}>
            Open in Lifemap
          </h1>
          <p style={{ color: '#a0a0a0', fontSize: '16px', maxWidth: '300px', marginBottom: '24px' }}>
            If the app didn&apos;t open automatically, please open the Lifemap app manually.
          </p>
          <a 
            href={`lifemap://auth/callback${typeof window !== 'undefined' ? window.location.hash : ''}`}
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '14px 28px',
              borderRadius: '12px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '16px'
            }}
          >
            Open Lifemap App
          </a>
        </>
      )}

      <style jsx global>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
