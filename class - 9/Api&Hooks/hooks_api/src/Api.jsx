import React, { useEffect, useState } from "react";

const Api = () => {
  const [countries, setCountries] = useState([]);
  const [filterCountries, setFilterCountries] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/independent?status=true"
        );
        if (response.ok) {
          const data = await response.json();
          setCountries(data);
        } else {
          setErrMsg(response.statusText);
        }
      } catch (error) {
        console.log("error Mesage:", error.message);
        setErrMsg(error.message);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilterCountries(countries);
      return;
    }

    const filteredData = countries.filter((country) => {
      let name = country.name.common.toLowerCase();
      let check = name.includes(search.toLowerCase());
      return check;
    });
    setFilterCountries(filteredData);
  }, [search, countries]);

  if (errMsg) {
    return (
      <>
        <h1
          style={{
            color: "red",
          }}
        >
          Error: {errMsg}
        </h1>
      </>
    );
  }

  return (
    <>
      <h1>Country Data's</h1>

      <input
        type="text"
        placeholder="Search By Country Name...!"
        style={{
          marginBottom: "50px",
        }}
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
        }}
      />

      {filterCountries.map((country) => {
        return (
          <div className="countryCard">
            <img src={country.flags.png} alt={country.flags.alt} />
            <h3>{country.name.common}</h3>
          </div>
        );
      })}
    </>
  );
};

export default Api;
