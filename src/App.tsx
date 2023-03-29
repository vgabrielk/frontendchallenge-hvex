import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import GlobalStyles from './globalStyles'
import MainPage from './Sections/MainPage'
import Omni from './Sections/Omni'
import SmartGrid from './Sections/SmartGrid'
import AOS from 'aos'
import 'aos/dist/aos.css';
import Performance from './Sections/Performance'
import KnowMore from './Sections/KnowMore'
import Faq from './Sections/Faq'
import Footer from './Sections/Footer'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 300
    })
  }, [])
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <MainPage />
      <SmartGrid />
      <Omni />
      <Performance />
      <KnowMore />
      <Faq/>
      <Footer/>
    </Fragment>
  )
}

export default App
