import { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { WeatherContext } from "../../providers/weather-provider";
import styles from "./info.module.scss";

export const InfoBlock = () => {
  const { weatherObj } = useContext(WeatherContext);

  const routeMatch = useRouteMatch();
  let indexArray = [0];
  if (routeMatch.path == "/weather/threedays") {
    indexArray = [0, 8, 16];
  }
  if (routeMatch.path == "/weather/fivedays") {
    indexArray = [0, 8, 16, 24, 32];
  }

  return (
    <div className={styles["container"]}>
      <p className={styles["par-city"]}>
        {weatherObj?.city.name}, {weatherObj?.city.country}
      </p>
      <ul className={styles["ul-container"]}>
        {indexArray.map((i, index) => {
          return (
            <li className={styles["li-container"]} key={index}>
              <p className={styles["par-date"]}>
                {new Date(weatherObj?.list[i].dt_txt)
                  .toDateString()
                  .substr(0, 10)}
              </p>
              <p className={styles["par-temp"]}>
                {Math.round(weatherObj?.list[i].main.temp)}° C
              </p>
              <p className={styles["par-feels"]}>
                Feels like: {Math.round(weatherObj?.list[i].main.feels_like)}° C{" "}
              </p>
              <p className={styles["par-conditions"]}>
                {weatherObj?.list[i].weather[0].main}
              </p>
              <p className={styles["par-variation"]}>
                Min:{Math.round(weatherObj?.list[i].main.temp_min)}° - Max:
                {Math.round(weatherObj?.list[i].main.temp_max)}°
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
