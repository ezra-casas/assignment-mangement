import React from 'react'
import Members from './Members'
import Assignments from './Assignments'

// Styles
import '../css/home.css'
import Buttons from './Buttons'

export default function Home() {
    // maps in react cannot use {}
    return (
        <div className='home-container'>
            <Members />
            <Assignments />
            <Buttons />
        </div>
    )
}
