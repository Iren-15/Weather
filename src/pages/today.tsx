import { useContext, useEffect } from "react";
import { InfoWeatherBlock } from "../components/infoBlocks/infoWeatherBlock";
import { WeatherContext } from "../providers/weather-provider";
import { IndexArrContext } from "../providers/index-provider";
import { IndexArrHoursContext } from "../providers/index-provider-hours";
import { IndexArrDaysContext } from "../providers/index-provider-days";
import styles from "./styles.module.scss";

export const Day = () => {
  const { weatherObj } = useContext(WeatherContext);
  const { indexArrCurrentDay, setIndexArr } = useContext(IndexArrContext);
  const { setIndexArrHours } = useContext(IndexArrHoursContext);
  const { setIndexArrDays } = useContext(IndexArrDaysContext);

  useEffect(() => {
    let indexArr: any = [0];
    const IndexCurrentDayTime = () => {
      let datetime = weatherObj.list[0].dt_txt.substr(0, 10);
      for (let j = 1; j < 8; j++) {
        let itemj = weatherObj.list[j].dt_txt.substr(0, 10);
        if (
          new Date(datetime).toDateString() == new Date(itemj).toDateString()
        ) {
          indexArr.push(j);
        }
      }
      setIndexArr(indexArr);
    };
    IndexCurrentDayTime();
  }, []);

  useEffect(() => {
    const ii = indexArrCurrentDay.length;
    let indexCurDayHours;
    if (ii == 6) {
      indexCurDayHours = [0, 2, 4];
    } else if (ii == 5) {
      indexCurDayHours = [1, 3];
    } else if (ii == 4) {
      indexCurDayHours = [0, 2];
    } else if (ii == 3) {
      indexCurDayHours = [1];
    } else if (ii == 1 || ii == 2) {
      indexCurDayHours = [0];
    } else {
      indexCurDayHours = [0, 2, 4, 6];
    }
    setIndexArrHours(indexCurDayHours);
  }, [indexArrCurrentDay]);

  useEffect(() => {
    let indexDaysArr: any = [];
    setIndexArrDays(indexDaysArr);
  }, []);

  return (
    <div className={styles["info-container"]}>
      {weatherObj.cod == 200 && <InfoWeatherBlock />}
    </div>
  );
};
