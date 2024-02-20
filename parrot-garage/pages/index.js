import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Service from '../components/service';
import Footer from '../components/footer';
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Garage Vincent PARROT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.content}>
        <h1 className={styles.title}>NOS SERVICES</h1>
        <div className={styles.services}>
          <Service title={"Réparation de la carrosserie"} imgPath={"/carrosserie.jpg"}/>
          <Service title={"Réparations mécaniques"} imgPath={"/mecanique.jpg"}/>
          <Service title={"Entretien de votre véhicule"} imgPath={"/entretien.jpg"}/>
        </div>
        <Link className={styles.link} href="/occasion">Nos véhicules d'occasion</Link>
      </main>

      <footer className={styles.footer}>
        <Footer/>
      </footer>

    </div>
  );
}
