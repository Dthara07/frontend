import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KPMG Code Challenge</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>KPMG Code Challenge</h1>

        <div className={styles.grid}>
          <Link href="/challengeOne">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Challenge - 1</h2>
              <p>3 tier environment with CRUD operations </p>
            </a>
          </Link>
          <Link href="/challengeTwo">
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Challenge - 2</h2>
              <p>Fetch AWS instance meta data</p>
            </a>
          </Link>
          <Link href="/challengeThree">
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Challenge - 3</h2>
              <p>Function to parse Nested object</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
