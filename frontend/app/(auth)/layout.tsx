import Link from 'next/link';

import styles from './page.module.css';

export const metadata = {
  title: 'Auth',
  description: 'some',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>header</header>
      <nav className={styles.nav}>
        <Link href={'/'}>Main</Link>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>Register</Link>
      </nav>
      <main className={styles.main}>
        <section>{children}</section>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
