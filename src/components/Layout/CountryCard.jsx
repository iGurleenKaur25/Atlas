import {NavLink} from 'react-router-dom';

export const CountryCard = ({country}) => {

    const {name,capital,region,population,flags} = country;
    return <li className ='country-card card'>
        <div className ='container-card bg-white-box'>
            {flags?.svg && (
            <img src={flags.svg} alt={flags?.alt || name.common} />
             )}

            <div className ='countryInfo'>
                <p className="card-title">{name.common.length > 10 ? name.common.slice(0,10) + "...": name.common}</p>
                <p>
                    <span className ='card-description'>Population:</span>
                   {population.toLocaleString()}
                </p>
                <p>
                <span className="card-description">Capital:</span>
                 {capital && capital.length > 0
                 ? capital[0].length > 5
                  ? capital[0].slice(0, 10) + "..."
                   : capital[0]
                 : "N/A"}
              </p>

                <p>
                    <span className ='card-description'>region:</span>
                   {region}
                </p>
                <NavLink to ={`/country/${name.common}`}>
                <button>Read More</button></NavLink>

            </div>
        </div>
    
    </li>

}