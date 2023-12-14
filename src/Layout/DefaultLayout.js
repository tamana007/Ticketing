import React from 'react'
// import Header from './Partials'
import HeaderComp from './Partials/HeaderComp'
import FooterComp from './Partials/FooterComp'
import Dahboard from '../page/Dahboard/Dahboard'

function DefaultLayout() {
  return (
    <div className='defaultLayout'>
      <header>
      <HeaderComp/>
      </header>
     <main>
   
     <Dahboard></Dahboard>
     </main>
     
    <footer>
    <FooterComp/>
    </footer>
     
    </div>
  )
}

export default DefaultLayout