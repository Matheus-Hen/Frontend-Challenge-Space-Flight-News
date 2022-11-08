import React from 'react'
import Listagem from './Listagem/Listagem'
import NavBar from './NavBar/NavBar'


const HomePage = () => {
    return (
        <div className='bg-dark '>
           <NavBar />
           <Listagem />
        </div >
    )
}

export default HomePage