import {LogementInterface} from '../assets/interfaces.tsx'
import { Suspense } from 'react'
import Spinner from '../componnents/Spinner.tsx'
import { Await, Navigate, useLoaderData } from 'react-router-dom'
import Slideshow from '../componnents/Slideshow.tsx'
import Collapse from '../componnents/Collapse.tsx'

const getRating = (rating:number) => {
    let ret = []
    for(let i = 1; i < 6; i++){
        if(i <= rating){
            ret.push(1)
        } else{
            ret.push(0)
        }
    }
    return ret
}

const Logement = () => {
    const  { datas }= useLoaderData() as { datas: LogementInterface[]}
    if(datas.length > 0){
        return <>
        <Suspense fallback={<Spinner/>}>
        <Await
            resolve={datas}
            errorElement={
                <div>Something goes wrong</div>
            }
            children={(datasObjResolved) => (
                datasObjResolved.map( (data:LogementInterface) => {
                    const firstname:string = data.host.name.split(" ")[0]
                    const lastname:string = data.host.name.split(" ")[1]
                    return (
                        <div className="logement" key={data.id}>
                            <Slideshow pictures={data.pictures}/>
                            <div className="logement__details">
                                <div className="logement__details__apt">
                                    <h1 className="logement__details__apt__title">{data.title}</h1>
                                    <h2 className="logement__details__apt__location">{data.location}</h2>
                                    <div className="logement__details__apt__tags">
                                        {
                                            data.tags.map( tag => (
                                                <div key={tag} className="logement__details__apt__tags__item">
                                                    {tag}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>                                
                                <div className="logement__details__host">
                                    <div className="logement__details__host__portrait">
                                        <h3 className="logement__details__host__portrait__name"><span>{firstname}</span><span>{lastname}</span></h3>
                                        <img className="logement__details__host__portrait__thumbnail" src={data.host.picture} alt="Host thumbnail" />
                                    </div>                                    
                                    <div className="logement__details__host__rating">
                                        {
                                            getRating(Number(data.rating)).map((rate:number, index:number) => {
                                                if (rate) {
                                                    return <img key={index} src="/filled_star.svg" alt="Étoile remplie" />
                                                }
                                                return <img key={index} src="/unfilled_star.svg" alt="Étoile non remplie" />
                                            })
                                        }                          
                                    </div>
                                </div>                                
                            </div>
                            <div className="logement__dropdowns">
                                    <Collapse title="Description" description={data.description}/>
                                    <Collapse title="Équipements" equipments={data.equipments}/>
                            </div>
                        </div>
                    )
                }
                )
            )}
         />                
        </Suspense>
    </>
    }
    return <Navigate to={'/error'} />
    
}

export default Logement