import { Fragment, useEffect, useState } from 'react'
import GlobalStyles from './globalStyles'
import Hub from '../Hub'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <GlobalStyles />
      <Hub/>
    </Fragment>
  )
}

export default App
