import { LogementInterface } from '../assets/interfaces'
import { Await, Link, useLoaderData } from 'react-router-dom'
import { Suspense } from 'react'
import Cta from '../componnents/Cta'
import Card from '../componnents/Card'
import Spinner from '../componnents/Spinner'

const Accueil = () => {
    //const  { datas } = useLoaderData() as { datas:LogementInterface[]}
    const  {datas} = useLoaderData() as { datas:LogementInterface[]}
    console.log(datas)
    return <>
        <Cta />
        <div className="cardbox">
            <Suspense fallback={<Spinner/>}>
            <Await
                resolve={datas}
                errorElement={
                    <div>Could not load datas</div>
                }
                children={(datasObjResolved) => {
                    console.log(datasObjResolved)
                    return (datasObjResolved.map( (data:LogementInterface) => {
                        return (
                        <Link to={'/logements/' + data.id} className="cardbox__link" key={data.id}>
                            <Card data={data} key={data.id}/>
                        </Link>
                    )}
                    )
                    )}
                }
             />                
            </Suspense>
        </div>
    </>
}

export default Accueil