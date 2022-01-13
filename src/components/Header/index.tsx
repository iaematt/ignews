import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a title="ig.neeews">
            <Image src="/images/logo.svg" width={110} height={31} alt="ig.neeews" />
          </a>
        </Link>

        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a title="Início">Início</a>
          </ActiveLink>

          <ActiveLink activeClassName={styles.active} href="/posts">
            <a title="Artigos">Artigos</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
