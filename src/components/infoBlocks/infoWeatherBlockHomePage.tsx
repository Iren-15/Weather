import { useContext } from "react";
import { WeatherContext } from "../../providers/weather-provider";
import { HourlyWeatherBlock } from "./hourlyWeatherBlock";
import styles from "./info.module.scss";

export const InfoWeatherBlockHomePage = () => {
  const { weatherObj } = useContext(WeatherContext);

  return (
    <div className={styles["flex-col"]}>
      <HourlyWeatherBlock
        city={weatherObj?.name}
        country={weatherObj?.sys.country}
        date={new Date(1000 * weatherObj?.dt).toString().substring(0, 10)}
        temp={Math.round(weatherObj?.main.temp)}
        feels={Math.round(weatherObj?.main.feels_like)}
        conditions={weatherObj?.weather[0].main}
        temp_min={Math.round(weatherObj?.main.temp_min)}
        temp_max={Math.round(weatherObj?.main.temp_max)}
      />
    </div>
  );
};
