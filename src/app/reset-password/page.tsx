'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import styles from '@/styles/reset-password.module.css';

function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isValidToken, setIsValidToken] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pass: string) => {
    let strength = 0;
    if (pass.length >= 8) strength++;
    if (/[a-z]/.test(pass) && /[A-Z]/.test(pass)) strength++;
    if (/\d/.test(pass)) strength++;
    if (/[^a-zA-Z0-9]/.test(pass)) strength++;
    return strength;
  };

  const passwordStrength = getPasswordStrength(password);
  const strengthLabels = ['', 'Weak', 'Fair', 'Good', 'Strong'];

  // Password requirements
  const requirements = [
    { label: 'At least 8 characters', met: password.length >= 8 },
    { label: 'Upper and lowercase letters', met: /[a-z]/.test(password) && /[A-Z]/.test(password) },
    { label: 'At least one number', met: /\d/.test(password) },
  ];

  useEffect(() => {
    // Check for access token in URL hash or query params
    const checkSession = async () => {
      try {
        // Supabase sends the recovery token in the URL fragment
        const hashParams = new URLSearchParams(window.location.hash.slice(1));
        const accessToken = hashParams.get('access_token');
        const type = hashParams.get('type');

        if (accessToken && type === 'recovery') {
          // Set the session with the recovery token
          const { error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: hashParams.get('refresh_token') || '',
          });

          if (error) {
            setError('Invalid or expired reset link. Please request a new one.');
            setIsValidToken(false);
          } else {
            setIsValidToken(true);
          }
        } else {
          // Check if there's an existing session (user clicked link while logged in)
          const { data: { session } } = await supabase.auth.getSession();
          if (session) {
            setIsValidToken(true);
          } else {
            setError('Invalid reset link. Please request a new password reset from the app.');
            setIsValidToken(false);
          }
        }
      } catch (err) {
        setError('Something went wrong. Please try again.');
        setIsValidToken(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (password.length < 8) {
      setError('Password must be at least 8 characters.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (passwordStrength < 2) {
      setError('Please choose a stronger password.');
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) {
        throw error;
      }

      setIsSuccess(true);
      
      // Sign out after password reset
      await supabase.auth.signOut();
    } catch (err: any) {
      setError(err.message || 'Failed to reset password. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <main className={styles.page}>
        <div className={styles.card}>
          <Image
            src="/assets/logo.png"
            alt="Lifemap"
            width={140}
            height={36}
            className={styles.logo}
            style={{ width: 'auto', height: '36px' }}
          />
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>Verifying reset link...</p>
          </div>
        </div>
      </main>
    );
  }

  // Invalid token state
  if (!isValidToken) {
    return (
      <main className={styles.page}>
        <div className={styles.card}>
          <Image
            src="/assets/logo.png"
            alt="Lifemap"
            width={140}
            height={36}
            className={styles.logo}
            style={{ width: 'auto', height: '36px' }}
          />
          <div className={styles.header}>
            <h1>Link Expired</h1>
            <p>This password reset link is invalid or has expired.</p>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--color-text-secondary)' }}>
            Please open the Lifemap app and request a new password reset.
          </p>
        </div>
      </main>
    );
  }

  // Success state
  if (isSuccess) {
    return (
      <main className={styles.page}>
        <div className={styles.card}>
          <Image
            src="/assets/logo.png"
            alt="Lifemap"
            width={140}
            height={36}
            className={styles.logo}
            style={{ width: 'auto', height: '36px' }}
          />
          <div className={styles.success}>
            <div className={styles.successIcon}>
              <CheckIcon />
            </div>
            <h2>Password Updated!</h2>
            <p>
              Your password has been successfully reset. You can now sign in 
              with your new password in the Lifemap app.
            </p>
            <Link href="lifemap://auth/callback" className={styles.backToApp}>
              <ArrowLeftIcon />
              Open Lifemap App
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Reset form
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <Image
          src="/assets/logo.png"
          alt="Lifemap"
          width={140}
          height={36}
          className={styles.logo}
          style={{ width: 'auto', height: '36px' }}
        />
        
        <div className={styles.header}>
          <h1>Reset Your Password</h1>
          <p>Enter a new password for your account</p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>
              New Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter new password"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.eyeButton}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
            
            {/* Password strength indicator */}
            {password && (
              <>
                <div className={styles.strength}>
                  {[1, 2, 3, 4].map((level) => (
                    <div
                      key={level}
                      className={`${styles.strengthBar} ${
                        level <= passwordStrength
                          ? passwordStrength <= 1
                            ? styles.weak
                            : passwordStrength <= 2
                            ? styles.medium
                            : styles.strong
                          : ''
                      }`}
                    />
                  ))}
                </div>
                <span className={styles.strengthText}>
                  {strengthLabels[passwordStrength]}
                </span>
              </>
            )}

            <div className={styles.requirements}>
              <ul>
                {requirements.map((req, index) => (
                  <li key={index} className={req.met ? styles.met : ''}>
                    {req.met ? <CheckCircleIcon /> : <CircleIcon />}
                    {req.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirm Password
            </label>
            <div className={styles.inputWrapper}>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                placeholder="Confirm new password"
                autoComplete="new-password"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.eyeButton}
                aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`btn btn-primary ${styles.submitButton}`}
            disabled={isSubmitting || !password || !confirmPassword}
          >
            {isSubmitting ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </main>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <main className={styles.page}>
        <div className={styles.card}>
          <div className={styles.loading}>
            <div className={styles.spinner} />
            <p>Loading...</p>
          </div>
        </div>
      </main>
    }>
      <ResetPasswordForm />
    </Suspense>
  );
}

// Icons
function CheckIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}

function ArrowLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 19l-7-7 7-7" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  );
}

function CircleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}


