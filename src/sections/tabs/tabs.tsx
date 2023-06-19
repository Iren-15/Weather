import { useContext, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { FiveDays } from "../../pages/fiveDays";
import { ThreeDays } from "../../pages/threeDays";
import { Day } from "../../pages/today";
import { CityContext } from "../../providers/city-provider";
import { WeatherContext } from "../../providers/weather-provider";
import { api } from "../../consts/consts";
import styles from "./styles.module.scss";

export const Tabs = () => {
  const { city } = useContext(CityContext);
  const { weatherObj, setWeatherObj } = useContext(WeatherContext);

  useEffect(() => {
    const getWeatherInCity = async () => {
      const res = await fetch(
        `${api.endpoint}forecast?q=${city}&cnt=41&units=metric&appid=${api.key}`
      );
      const resReceived = await res.json();
      setWeatherObj(resReceived);
      return resReceived;
    };
    getWeatherInCity();
  }, [city]);
 
  return (
    <div className={styles["tabs"]}>
      {weatherObj.cod == 200 && (
        <div className={styles["link-tab"]}>
          <NavLink
            className={styles["days-link"]}
            activeClassName={styles["active-link"]}
            to="/weather/today"
          >
            today
          </NavLink>
          <NavLink
            className={styles["days-link"]}
            activeClassName={styles["active-link"]}
            to="/weather/threedays"
          >
            3 days
          </NavLink>
          <NavLink
            className={styles["days-link"]}
            activeClassName={styles["active-link"]}
            to="/weather/fivedays"
          >
            5 days
          </NavLink>
        </div>
      )}
      {weatherObj.cod == 200 && (
        <div>
          <Switch>
            <Route path={`/weather/today`} exact={true}>
              <Day />
            </Route>
            <Route path={`/weather/threedays`} exact={true}>
              <ThreeDays />
            </Route>
            <Route path={`/weather/fivedays`} exact={true}>
              <FiveDays />
            </Route>
          </Switch>
        </div>
      )}
      <div className={styles["container"]}>
        {weatherObj.cod == 400 && (
          <p className={styles["error"]}>{weatherObj?.message}</p>
        )}
        {weatherObj.cod == 404 && (
          <p className={styles["error"]}>{weatherObj?.message}</p>
        )}
      </div>
    </div>
  );
};
