import { useState } from 'react'

interface SlideshowProps{
    pictures: string[]
}
const Slideshow = ({ pictures }:SlideshowProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevIndex = () => {
        setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length)
    }

    const nextIndex = () => {
        setCurrentIndex((currentIndex + 1 + pictures.length) % pictures.length)
    }
    return (<div className="slideshow">
                {
                    pictures.map((picture:string, index:number) => (
                        <img key={index} className={(index == currentIndex) ? "slideshow__img active" : "slideshow__img"} src={picture} alt={"Illustration" + index} />
                    ))
                }
                <div className={pictures.length > 1 ? "slideshow__navigation" : "slideshow__navigation deactivated"}>
                    <img className='slideshow__navigation__prev' src="/prev.svg" alt="prev" onClick={prevIndex}/>
                    <div className="slideshow__navigation__number">{(currentIndex + 1) + "/" + pictures.length}</div>
                    <img className='slideshow__navigation__next' src="/next.svg" alt="next" onClick={nextIndex}/>
                </div>
            </div>
        )
}

export default Slideshow