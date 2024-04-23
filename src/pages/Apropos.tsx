import { collapses } from '../data/collapses'
import { CollapseInterface } from '../assets/interfaces'
import Collapse from '../componnents/Collapse'

const Apropos = () => {
    return <>
         <div className="apropos">
            <img className="apropos__banner" src="/a-propos.webp" alt="Illustration d'une montagne" />
            <div className="apropos__collapsesbox">
                {
                    collapses.map((collapse:CollapseInterface) => (
                        <Collapse key={collapse.id} data={collapse} />
                    ))
                }
            </div>
        </div>
    </>
}

export default Apropos