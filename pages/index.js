import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Simple Auth0 Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h3>Welcome!</h3>
        <p>
          This is a simple example of authentication and authorization using
          NextAuth.
        </p>
      </main>
    </div>
  );
}
