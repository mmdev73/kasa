import {LogementInterface} from '../assets/interfaces.tsx'

interface Props {
    data:LogementInterface
}

const Card = ({ data }:Props) => {
    return <>
        <figure className="card" key={data.id}>
          <img className="card__img" src={data.pictures[0]} alt={data.title} />
          <figcaption className="card__figcaption">
            {data.title}
          </figcaption>
        </figure>
    </>
}

export default Card