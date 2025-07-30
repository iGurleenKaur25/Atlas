import countryFacts from '../api/countryData.json';

export const About = () => {
    return <section className="section-about container">

        <h1 className = "container-title">Here are interesting fact
            <br/>
            we are proud of !
        </h1>
        <div className = 'gradient-cards'>
            {
                countryFacts.map((country)=> {
                    const {id ,name ,capital ,population,region,currency,language ,flag} = country
                    return(
                        <div className ='card' key = {id}>
              <div className = 'container-card bg-blue-box'>

                <div>
                 <span className='card-description'></span><br />
                <img src={flag} alt={`Flag of ${name}`} style={{ width: "2500px", marginTop: "0.5rem" }} />
               </div>
                <p className = 'card-title'>{name}</p>
                <p>
                    <span className ='card-description'>capital:</span>
                   {capital}
                </p>
                <p>
                    <span className ='card-description'>population:</span>
                   {population}
                </p>
                <p>
                    <span className ='card-description'>region:</span>
                   {region}
                </p>
                <p>
                    <span className ='card-description'>currency:</span>
                  {currency}
                </p>
                <p>
                    <span className ='card-description'>language:</span>
                   {language}
                </p>

                </div>  
            </div>
                    )

                })
            }

            
        </div>

    </section>
    
    
    
    
};