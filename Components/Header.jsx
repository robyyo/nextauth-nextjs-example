import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { useSession } from 'next-auth/react';
import AuthButton from './login-btn';

const Header = () => {
  const { data: session, status } = useSession();

  console.log(session);
  console.log(status);

  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <h3>NextAuth Example</h3>
        </Link>
      </div>
      <nav>
        <ul className={styles.navbar}>
          <AuthButton />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
