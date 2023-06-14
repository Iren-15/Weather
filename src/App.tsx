import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Weather } from "./pages/weather";
import { CityProvider } from "./providers/city-provider";
import { WeatherProvider } from "./providers/weather-provider";
import { IndexArrayProvider } from "./providers/index-provider";

function App() {
  return (
    <BrowserRouter>
      <CityProvider>
        <WeatherProvider>
          <IndexArrayProvider>
            <Switch>
              <Route path="/weather/">
                <Weather />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="*">
                <h1>404</h1>
              </Route>
            </Switch>
          </IndexArrayProvider>
        </WeatherProvider>
      </CityProvider>
    </BrowserRouter>
  );
}

export default App;
