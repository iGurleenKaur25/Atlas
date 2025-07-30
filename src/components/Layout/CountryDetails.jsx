

import { useParams } from 'react-router-dom';
import { getCountryIndData } from '../../api/postApi';
import { useEffect, useState } from 'react';

export const CountryDetails = () => {
  const params = useParams();
  const [country, setCountry] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCountryIndData(params.id);
      if (res.status === 200) {
        setCountry(res.data[0]);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);

  if (isLoading || !country) return <h1>Loading....</h1>;

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country.flags?.svg && (
        <img src={country.flags.svg} alt={country.flags?.alt || country.name?.common} />
  
          )}


        <div className="country-content">
          <p className="card-title">{country.name.official}</p>
          <div className="infoContainer">
            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Sub Region:</strong> {country.subregion}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
            <p><strong>Currencies:</strong> {country.currencies ? Object.values(country.currencies).map(c => c.name).join(", ") : "N/A"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
