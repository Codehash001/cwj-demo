import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/mobilenav'
import Main from '../components/main'
import Slider from '../components/slide'
import Contact from '../components/contact'
import Footer from '../components/footer'
import FAQs from '../components/FAQs'
import Mint from '../components/mint'
import Base from '../components/base'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffe With Jesus - Demo</title>
        <meta name="Description" content="Coffe with Jesus - demo!" />
        <link rel="icon" href="/Logoicon.png" />
      </Head>
      <Base/>
    </div>
  )
}
