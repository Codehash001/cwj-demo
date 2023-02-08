import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/mobilenav'
import Base from '../components/base'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee With Jesus - Demo</title>
        <meta name="Description" content="Coffe with Jesus - demo!" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      <Base/>
    </div>
  )
}
