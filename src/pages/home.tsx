import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { WeatherContext } from "../providers/weather-provider";
import { InfoWeatherBlockHomePage } from "../components/infoBlocks/infoWeatherBlockHomePage";
import { api } from "../consts/consts";
import styles from "./styles.module.scss";

export const Home = () => {
  const { weatherObj, setWeatherObj } = useContext(WeatherContext);

  useEffect(() => {
    const getWeatherInKyiv = async () => {
      const res = await fetch(
        `${api.endpoint}weather?q=Kyiv&units=metric&appid=${api.key}`
      );
      const resReceived = await res.json();
      setWeatherObj(resReceived);
    };
    getWeatherInKyiv();
  }, []);

  return (
    <div className={styles["home-page"]}>
      <div className={styles["flex-col-center"]}>
        <h1 className={styles["home-header"]}>
          Welcome to the weather forecast app!
        </h1>
        <Link
          to="/weather"
          className={styles["link-other-city"]}
          onClick={() => {
            setWeatherObj({});
          }}
        >
          Find out more about the weather in other cities
        </Link>
      </div>
      <div className={styles["home-container"]}>
        {weatherObj.cod == 200 && <InfoWeatherBlockHomePage />}
      </div>
    </div>
  );
};
