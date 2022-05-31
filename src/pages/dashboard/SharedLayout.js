import React from 'react'
import Wrapper from '../../assets/wrappers/SharedLayout'
import { BigSideBar, Navbar, SmallSidebar } from '../../components'
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <Wrapper>
        <main className='dashboard'>
            <SmallSidebar />
            <BigSideBar />
            <div>
                <Navbar />
                <div className='dashboard-page'>
                    <Outlet />
                </div>
            </div>
        </main>
    </Wrapper>
  )
}

export default SharedLayout