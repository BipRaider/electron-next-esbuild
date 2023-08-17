import Link from 'next/link';

import styles from './page.module.css';
import { Button } from '../components';

export const metadata = {
  title: 'AoE',
  description: 'some',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className={styles.wrap}>
      <header className={styles.header}>header</header>
      <nav className={styles.nav}>
        <Link href={'/'}>main</Link>
        <Link href={'/dashboard'}>dashboard</Link>
        <Link href={'/login'}>Login</Link>
      </nav>
      <main className={styles.main}>
        <Button>hello</Button>
        <section>{children}</section>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  );
}
