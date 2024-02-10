import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const CountryDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState();
  const [dynamicKey, setDynamicKey] = useState("");

  const getCountry = async () => {
    try {
      const res = await axios.get(
        `https://restcountries.com/v3.1/name/${name}`
      );
      const data = res.data[0];
      setCountry(data);
      setDynamicKey(Object.keys(data.name.nativeName)[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <section className="bg-slate-200 dark:bg-slate-800 min-h-[91vh] py-20 flex items-start justify-center">
      <div className="container flex flex-col md:flex-row md:justify-between md:items-center">
        {country ? (
          <>
            <div className="flex flex-col items-start gap-y-20 sm:justify-between justify-center">
              <button
                className="px-5 py-2 mt-5 md:mt-0 font-bold text-slate-500 bg-slate-50 dark:text-slate-100 dark:bg-slate-700 rounded-md shadow-md"
                onClick={() => navigate("/")}
              >
                Back
              </button>
              <div className="w-full mt-5 mr-5 pr-5">
                <img
                  className="w-full object-cover"
                  src={country.flags.png}
                  alt={country.flags.alt}
                />
              </div>
            </div>

            <div className="flex flex-col pt-12 w-full sm:w-[50%] text-slate-600 dark:text-slate-200">
              <h1 className="text-xl font-bold text-slate-600 dark:text-slate-200 mb-4 mt-4 md:mt-0">
                {country.name.common}
              </h1>
              <div className="mb-10">
                <ul className="grid grid-cols sm:grid-cols-2 sm:gap-x-16 sm:gap-y-1">
                  <li className="text-slate-600 dark:text-slate-200">
                    Native Name:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {country.name.nativeName[dynamicKey].common}
                    </span>
                  </li>
                  <li className="text-slate-600 dark:text-slate-200">
                    Population:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {country.population}
                    </span>
                  </li>
                  <li className="text-slate-600 dark:text-slate-200">
                    Region:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {" "}
                      {country.region}
                    </span>
                  </li>
                  <li className="text-slate-600 dark:text-slate-200">
                    Sub-region:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {country.subregion}
                    </span>
                  </li>
                  <li className="text-slate-600 dark:text-slate-200">
                    Capital:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {country.capital}
                    </span>
                  </li>

                  <li className="text-slate-600 dark:text-slate-200">
                    Top Level Domain:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {country.tld[0]}
                    </span>
                  </li>
                  <li className="text-slate-600 dark:text-slate-200">
                    Currencies:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {Object.values(country.currencies)[0].name}
                    </span>
                  </li>
                  <li className="text-slate-600 dark:text-slate-200">
                    Languages:{" "}
                    <span className="font-light text-slate-600 dark:text-slate-200">
                      {" "}
                      {Object.values(country.languages).map((lang) => {
                        return `${lang}, `;
                      })}
                    </span>
                  </li>
                </ul>
              </div>
              {country.borders && (
                <div className="flex flex-wrap items-center">
                  <p className="text-slate-600 dark:text-slate-200 mr-2">
                    Border Countries:
                  </p>{" "}
                  <div className="flex flex-wrap gap-1 ">
                    {country.borders.map((borderCountry) => {
                      return (
                        <div
                          key={borderCountry}
                          className="px-4 text-slate-500 bg-slate-50 dark:text-slate-100 dark:bg-slate-700 rounded-sm shadow-md"
                        >
                          {borderCountry}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <h1>Loading ...</h1>
        )}
      </div>
    </section>
  );
};

export default CountryDetails;
