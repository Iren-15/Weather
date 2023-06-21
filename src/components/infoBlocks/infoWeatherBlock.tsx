import { useContext } from "react";
import { useRouteMatch } from "react-router-dom";
import { WeatherContext } from "../../providers/weather-provider";
import { HourlyWeatherBlock } from "./hourlyWeatherBlock";
import { IndexArrHoursContext } from "../../providers/index-provider-hours";
import { IndexArrDaysContext } from "../../providers/index-provider-days";
import cn from "classnames";
import styles from "./info.module.scss";

export const InfoWeatherBlock = () => {
  const { weatherObj } = useContext(WeatherContext);
  const { indexArrCurDayHours } = useContext(IndexArrHoursContext);
  const { indexArrDays } = useContext(IndexArrDaysContext);
  const routeMatch = useRouteMatch();
  const indexArrHours = [0, 2, 4, 6];

  const todaybool = routeMatch.path == "/weather/today";

  return (
    <div className={styles["flex-col"]}>
      <p className={styles["par-city"]}>
        {weatherObj?.city.name}, {weatherObj?.city.country}
      </p>
      <div className={styles["d-flex"]}>
        <div>
          <p className={styles["par-date"]}>
            {new Date(weatherObj?.list[0].dt_txt)
              .toDateString()
              .substring(0, 10)}
          </p>
          <div
            className={cn(styles["ul-container"], {
              [styles["today"]]: todaybool,
            })}
          >
            {indexArrCurDayHours.map((i: any, index: any) => {
              return (
                <div key={index}>
                  <HourlyWeatherBlock
                    time={(weatherObj?.list[i].dt_txt)
                      .toString()
                      .substring(11, 16)}
                    temp={Math.round(weatherObj?.list[i].main.temp)}
                    feels={Math.round(weatherObj?.list[i].main.feels_like)}
                    conditions={weatherObj?.list[i].weather[0].main}
                    temp_min={Math.round(weatherObj?.list[i].main.temp_min)}
                    temp_max={Math.round(weatherObj?.list[i].main.temp_max)}
                  />
                </div>
              );
            })}
          </div>
        </div>
        {indexArrDays.map((j: any, index: any) => {
          return (
            <div key={index}>
              <p className={styles["par-date"]}>
                {new Date(weatherObj?.list[j].dt_txt)
                  .toDateString()
                  .substring(0, 10)}
              </p>
              <div className={styles["ul-container"]}>
                {indexArrHours.map((i, index) => {
                  return (
                    <div key={index}>
                      <HourlyWeatherBlock
                        time={(weatherObj?.list[i + j].dt_txt)
                          .toString()
                          .substring(11, 16)}
                        temp={Math.round(weatherObj?.list[i + j].main.temp)}
                        feels={Math.round(
                          weatherObj?.list[i + j].main.feels_like
                        )}
                        conditions={weatherObj?.list[i + j].weather[0].main}
                        temp_min={Math.round(
                          weatherObj?.list[i + j].main.temp_min
                        )}
                        temp_max={Math.round(
                          weatherObj?.list[i + j].main.temp_max
                        )}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
