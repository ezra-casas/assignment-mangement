import React from 'react'
import Members from './Members'
import Assignments from './Assignments'
import Buttons from '../../ui/Buttons'
import Table from "./Table";

// Styles
import '../../../assets/css/home.css'

export default function Home() {
    return (
        <div className='home-container'>
            <main className='container'>
                <Members />
                <Assignments />
                <Buttons />
            </main>
            <Table />
        </div>
    )
}
