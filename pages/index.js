import Head from 'next/head' // komponent na metadane
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

    <Head>
      {/* komponent na metadane np title */}
      <title>Ninja List | Home</title>
      <meta name='keywords' content='ninjas'/>
    </Head>

    <div>
          {/* style.nazwaKlasyZPlikuCSSDlaModulu
        dzieki dodatkowi randomowego stringa na kocu nazwy klasy te same nazwy klas z modulow css nie robia konfliktu
        rozne klasy .container dla roznych komponentow */}
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      <p className={styles.text}>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninja listing</a>
      </Link>
    </div>
    </>
  )
}
