import { useContext, useEffect } from "react";
import { InfoWeatherBlock } from "../components/infoBlocks/infoWeatherBlock";
import { IndexArrContext } from "../providers/index-provider";
import styles from "./styles.module.scss";
import { IndexArrDaysContext } from "../providers/index-provider-days";

export const ThreeDays = () => {
  const { indexArrCurrentDay } = useContext(IndexArrContext);
  const { setIndexArrDays } = useContext(IndexArrDaysContext);

  useEffect(() => {
    const ii = indexArrCurrentDay.length - 1;
    let indexDaysArr = [ii + 1, ii + 9];
    setIndexArrDays(indexDaysArr);
  }, []);

  return (
    <div className={styles["info-container"]}>
      <InfoWeatherBlock />
    </div>
  );
};
