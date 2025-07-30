import {useEffect ,useTransition , useState} from 'react';
import { getCountryData } from '../api/postApi';
import {CountryCard} from '../components/Layout/CountryCard';
import { SearchFilter } from '../components/UI/SearchFilter'; 

export const Country = () => {

    const [isPending ,startTransition] = useTransition();
    const [countries , setCountries] = useState([]);
    const [search ,setSearch] =useState("");
    const [filter ,setFilter] =useState("all");

    useEffect(() => {
    startTransition(() => {
      getCountryData().then((res) => {
        setCountries(res.data); // assuming axios
      });
    });
     }, []);

    if(isPending) return <h1>Loading....</h1>
    
     const searchCountry =(country)=>{
      if(search){
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      }
      return country;
     };

    const filterRegion =(country) => {
      if(filter === "all") return country;
      return country.region === filter;

    }


    const filterCountries = countries.filter((country) => 
      searchCountry(country) && filterRegion(country)
    );

    return <section className ="country-section">
      <SearchFilter search={search} 
      setSearch={setSearch} 
      filter={filter} 
      setFilter={setFilter}
      countries={countries}
      setCountries={setCountries}
      />
        <ul className ="grid grid-four-cols">
            {
            filterCountries.map((curCountry , index) =>{
                return<CountryCard country={ curCountry} key ={index}/>

            })
            }
        </ul>
    </section>
};