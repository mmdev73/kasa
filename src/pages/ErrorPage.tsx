import { Link } from 'react-router-dom'
interface ErrorPageProp{
    error?: unknown | string | any
}
const ErrorPage = ({ error }:ErrorPageProp) => {
    return <>
        <div className="error">
            <span className="error__number">{error?.status ? error.status : "404"}</span>
            <p className="error__text">{error?.data?.message ? error?.data?.message : "Oups! La page que vous demandez n'existe pas."}</p>
            <Link to={'/'} className='error__link'>Retourner sur la page d'accueil</Link>
        </div>
    </>
}

export default ErrorPage