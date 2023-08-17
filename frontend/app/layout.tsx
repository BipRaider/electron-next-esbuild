import './globals.css';
import styles from './wrapper.module.css';

export const metadata = {
  title: 'Home',
  description: 'some',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <div className={styles.wrapper}>{children}</div>
      </body>
    </html>
  );
}
