import { Fragment, useEffect, useState } from 'react'
import Header from './components/Header'
import GlobalStyles from './globalStyles'
import MainPage from './sections/MainPage'
import Omni from './sections/Omni'
import SmartGrid from './sections/SmartGrid'

function App() {
  const [count, setCount] = useState(0)

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
