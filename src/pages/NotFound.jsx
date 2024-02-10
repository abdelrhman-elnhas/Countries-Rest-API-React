import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-200 dark:bg-slate-800">
      <div className="container min-h-[91vh] flex items-center justify-center text-center">
        <div className="flex flex-col items-center">
          <p className="mb-4 text-8xl font-black uppercase text-slate-500 dark:text-slate-100 md:text-9xl">
            404
          </p>
          <h1 className="mb-2 text-center text-2xl font-bold text-slate-500 dark:text-slate-100 md:text-3xl">
            Page not found
          </h1>

          <p className="mb-12 max-w-screen-md text-center text-slate-500 dark:text-slate-100 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>

          <button
            className="inline-block px-5 py-2 mt-5 md:mt-0 font-bold text-slate-500 bg-slate-50 dark:text-slate-100 dark:bg-slate-700 rounded-md shadow-md"
            onClick={() => navigate("/")}
          >
            Go home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
