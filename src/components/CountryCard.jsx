/* eslint-disable react/prop-types */
const CountryCard = ({ flag, name, population, capital, region, alt }) => {
  return (
    <div className="h-full text-slate-500 bg-slate-50 dark:text-slate-100 dark:bg-slate-700 shadow-md hover:bg-slate-200 hover:dark:bg-slate-600 overflow-hidden">
      <div className="w-full mb-5">
        <img className="w-full h-44 object-fit" src={flag} alt={alt} />
      </div>

      <div className="p-5 text-slate-600 dark:text-slate-400 h-48">
        <p className="font-bold pb-3 text-base">{name}</p>
        <ul>
          <li className="font-medium mb-1 text-slate-500 dark:text-slate-300">
            Population
            <span className="ms-2 font-normal text-slate-400 dark:text-gray-400">
              {population}
            </span>
          </li>
          <li className="font-medium mb-1 text-slate-500 dark:text-slate-300">
            Region
            <span className="ms-2 font-normal text-slate-400 dark:text-gray-400">
              {region}
            </span>
          </li>
          <li className="font-medium mb-1 text-slate-500 dark:text-slate-300">
            Capital
            <span className="ms-2 font-normal text-slate-400 dark:text-gray-400">
              {capital}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
