import React from 'react'
import Hero from '../components/Hero'
import AllPastries from '../components/AllPastries'
import Footer from '../components/Footer'



const HomePage = () => {
  // PUNTO 6 Realizzare una pagina vetrina dove tutti possono vedere la lista di dolci disponibili e il
  // prezzo relativo.

  return (
    <>
     <Hero />
     <AllPastries />
     <Footer />

    </>
  )
}

export default HomePage