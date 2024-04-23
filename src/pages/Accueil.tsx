//import '../scss/componnents/accueil.scss'
import { LogementInterface } from '../assets/interfaces'
import { Await, Link, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'

const Accueil = () => {
    const  { datas } = useLoaderData() as { datas:LogementInterface[]}
    return <>
        
    </>
}

export default Accueil