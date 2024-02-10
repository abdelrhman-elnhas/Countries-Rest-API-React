import { ThemeProvider } from "./context/Theme";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCountries from "./pages/AllCountries";
import CountryDetails from "./pages/CountryDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<AllCountries />} />
          <Route path="/name/:name" element={<CountryDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
    // <h1 className="text-3xl font-bold underline text-red-600">Hello world!</h1>
  );
}

export default App;
