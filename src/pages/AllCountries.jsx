import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../context/Theme";
import SearchFilter from "../components/SearchFilter";
import CountryCard from "../components/CountryCard";
import axios from "axios";
import { Link } from "react-router-dom";

const AllCountries = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useContext(ThemeContext);
  const [allCountries, setAllCountries] = useState([]);
  let [displayedCountries, setDisplayedCountries] = useState([]);
  const [displayedIndex, setDisplayedIndex] = useState(0);

  const loadingDev = useRef(null);

  // Get 32 Records of allCountries to implement infinite scroll
  function sliceCountries() {
    const displayCount = 32;
    const countriesToDisplay = allCountries.slice(
      displayedIndex,
      displayedIndex + displayCount
    );

    if (countriesToDisplay.length === 0) {
      return; // No more countries to display
    }
    setDisplayedCountries((prevCountries) => [
      ...prevCountries,
      ...countriesToDisplay,
    ]);
    setDisplayedIndex((prevIndex) => prevIndex + displayCount);
  }

  // fetch allCountries
  const getCountries = async () => {
    try {
      const data = await axios.get(
        `https://restcountries.com/v3.1/all?fields=flag,name,population,flags,region,capital`
      );
      const fetchedCountries = data.data;
      setAllCountries(fetchedCountries);
    } catch (err) {
      console.log(err);
    }
  };

  // Search Countries
  const getCountryByName = async (inputName) => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${inputName}`
      );
      const country = res.data[0];
      console.log(country.name.common);
      setDisplayedCountries(() => [country]);
      console.log(displayedCountries);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  // wait for the api request then call sliceCountries
  useEffect(() => {
    if (allCountries.length > 0) {
      sliceCountries();
    }
  }, [allCountries]);

  // IntersectionObserver to implement infinite scroll
  const intersectionObserverCallback = (entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      sliceCountries();
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const intersectionObserver = new IntersectionObserver(
      intersectionObserverCallback,
      options
    );

    if (loadingDev.current) {
      intersectionObserver.observe(loadingDev.current);
    }

    return () => {
      if (loadingDev.current) {
        intersectionObserver.unobserve(loadingDev.current);
      }
    };
  }, [loadingDev, intersectionObserverCallback]);

  return (
    <section className="bg-slate-200 dark:bg-slate-800">
      <SearchFilter search={getCountryByName} />
      <div className="container flex flex-wrap">
        {displayedCountries ? (
          displayedCountries.map((country) => {
            return (
              <Link
                key={country.name.common}
                to={`/name/${country.name.common}`}
                className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 p-4"
              >
                <CountryCard
                  name={country.name.common}
                  flag={country.flags.png}
                  alt={country.flags.alt}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </Link>
            );
          })
        ) : (
          <h1>Loading ...</h1>
        )}
        <div
          ref={loadingDev}
          style={{ height: "10px", background: "transparent" }}
        ></div>
      </div>
    </section>
  );
};

export default AllCountries;
