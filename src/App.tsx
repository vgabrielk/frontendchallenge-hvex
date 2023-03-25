import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import GlobalStyles from './globalStyles'
import MainPage from './sections/MainPage'
import Omni from './sections/Omni'
import SmartGrid from './sections/SmartGrid'
import AOS from 'aos'
import 'aos/dist/aos.css';

function App() {
useEffect(() => {
  AOS.init({
    duration: 2000
  })
},[])
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <MainPage />
      <SmartGrid />
      <Omni />
    </Fragment>
  )
}

export default App
