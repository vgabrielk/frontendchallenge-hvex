import { Fragment, useEffect, useState } from 'react'
import GlobalStyles from './globalStyles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <GlobalStyles />
      <h1>Teste</h1>
    </Fragment>
  )
}

export default App
