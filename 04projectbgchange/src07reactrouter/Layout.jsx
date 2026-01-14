import React, { Component } from 'react'
import {Footer,Header,Home} from './components'
import { Outlet } from 'react-router-dom'

export class Layout extends Component {
  render() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
  }
}

export default Layout