import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { signIn } from 'next-auth/react';

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <h3>NextAuth Example</h3>
        </Link>
      </div>
      <nav>
        <ul className={styles.navbar}>
          <li className={styles.link}>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
