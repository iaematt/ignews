import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a title="ig.neeews">
            <img src="/images/logo.svg" alt="ig.neeews" />
          </a>
        </Link>

        <nav>
          <Link href="/">
            <a className={styles.active} title="Início">
              Início
            </a>
          </Link>

          <Link href="/artigos">
            <a title="Artigos">Artigos</a>
          </Link>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
