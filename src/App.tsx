import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Weather } from "./pages/weather";
import { CityProvider } from "./providers/city-provider";
import { WeatherProvider } from "./providers/weather-provider";
import { IndexArrProvider } from "./providers/index-provider";
import { IndexArrDaysProvider } from "./providers/index-provider-days";
import { IndexArrHoursProvider } from "./providers/index-provider-hours";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CityProvider>
        <WeatherProvider>
          <IndexArrProvider>
            <IndexArrDaysProvider>
              <IndexArrHoursProvider>
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
              </IndexArrHoursProvider>
            </IndexArrDaysProvider>
          </IndexArrProvider>
        </WeatherProvider>
      </CityProvider>
    </BrowserRouter>
  );
}

export default App;
