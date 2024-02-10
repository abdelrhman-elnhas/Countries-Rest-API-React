const CountriesMeta = ({ country }) => {
  return (
    <>
      {country && (
        <div className="flex flex-col pt-12 text-slate-600 dark:text-slate-200">
          <h1 className="text-xl font-bold text-slate-600 dark:text-slate-200 mb-4 mt-4 md:mt-0">
            {country.name.common}
          </h1>
          <div className="mb-10">
            <ul className="grid grid-cols sm:grid-cols-2 sm:gap-x-10 sm:gap-y-1">
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
          <div className="flex flex-row flex-wrap w-full">
            <p className="text-slate-600 dark:text-slate-200">
              Border Countries:
            </p>{" "}
            {/* Render Country names using their shortcuts */}
            <div className="flex flex-wrap w-full">
              {country.borders.map((borderCountry) => {
                return (
                  <button
                    key={borderCountry}
                    className="px-4 text-slate-500 bg-slate-50 dark:text-slate-100 dark:bg-slate-700 rounded-sm shadow-md"
                  >
                    {borderCountry}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CountriesMeta;
