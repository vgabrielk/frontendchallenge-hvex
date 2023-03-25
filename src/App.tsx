import { Fragment, useEffect, useState } from 'react'
import GlobalStyles from './globalStyles'
import HomePage from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <GlobalStyles />
      <HomePage/>
    </Fragment>
  )
}

export default App
