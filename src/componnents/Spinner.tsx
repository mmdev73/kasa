//import '../scss/componnents/spinner.scss'

const Spinner = () => {
    return <>
        <div className="spinner">
          <img className="spinner__icon" src="/spinner.svg" alt="Logo de chargement" />
          <p className="spinner__text">Chargement des données en cours...</p>
        </div>
    </>
}

export default Spinner