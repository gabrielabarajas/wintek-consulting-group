import "react-toastify/dist/ReactToastify.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/flaticon.css'
import "../styles/font-awesome.min.css";
import "../styles/themify-icons.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import 'photoswipe/dist/photoswipe.css'
import '../styles/sass/style.scss'
import Head from "next/head";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
import Scrollbar from '../components/scrollbar/scrollbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Wintek Consulting Group</title>
      </Head>
      <Navbar hclass={'topbar-none'} />
      <Component {...pageProps} />
      <Footer/>
      <Scrollbar/>
      <ToastContainer />
    </div>

  )
}

export default MyApp
