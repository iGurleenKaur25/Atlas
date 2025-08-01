
export const SearchFilter =({search ,setSearch ,filter ,setFilter ,countries ,setCountries}) => {
  
 
    const handleInputChange =(event) => {
      event.preventDefault();
      setSearch(event.target.value);
    };

    const handleSelectChange =(event) => {
      event.preventDefault();
      setFilter(event.target.value);
    };

    const sortCountries= (value) =>{
      const sortCountry = [...countries.sort((a,b) =>{
        return value === "asc"?a.name.common.localeCompare(b.name.common):
        b.name.common.localeCompare(a.name.common);
      
      })
    ]
    setCountries(sortCountry)
    };

  return <section className="section-searchFilter container">
    <input type="text"
     placeholder="search" 
     value={search} 
     onChange={handleInputChange}
     />
     
    <div>
      <button onClick ={() => sortCountries('asc')}>ASC</button>
    </div>
    <div>
      <button onClick ={() => sortCountries('desc')}>DESC</button>
    </div>



    <div><select className ="select-section"
     value = {filter} 
     onChange ={handleSelectChange}
     >
      <option value="all">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      </select>
    </div>
  </section>
};

