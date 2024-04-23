import { CollapseInterface } from '../assets/interfaces'
import { useState } from 'react'

interface CollapseProps{
    data?: CollapseInterface
    title?:string,
    description?:string,
    equipments?:string[]
}
const Collapse = ({ data, equipments, title, description }:CollapseProps) => {
    const [open, setOpen] = useState(false)
    const toggleCollapse = () => setOpen(!open)
    return <>
        <div key={data?.id ? data.id : title} className={description || equipments ? "collapse collapse--small":"collapse"}>
            <div className="collapse__header" onClick={toggleCollapse}>
                <h1 className="collapse__header__title">
                    {
                        data?.title && data.title
                    }
                    {
                        title && title
                    }    
                </h1>
                <img className={ !open ? "collapse__header__chevron" : "collapse__header__chevron open"} src="/chevron-up.svg" alt="Chevron du collapse" />
            </div>
            <div className={ !open ? "collapse__content" : "collapse__content open"}>
                    {equipments &&
                        <ul className="collapse__content__text__list">
                            {
                            equipments?.map((item:string, index:number) => {
                                return <li key={index} className="collapse__content__text__list__item">{item}</li>
                            })
                            }
                        </ul>
                    }
                    {description &&
                        description
                    }
                    {
                        data?.content && data.content
                    }
            </div>
        </div>
    </>
}

export default Collapse