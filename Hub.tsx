import React, { Fragment } from 'react'
import Header from './src/components/Header'
import MainPage from './src/sections/MainPage'
import SmartGrid from './src/sections/SmartGrid'

const Hub = () => {
  return (
    <Fragment>
      <Header />
      <MainPage />
      <SmartGrid />
    </Fragment>
  )
}

export default Hub