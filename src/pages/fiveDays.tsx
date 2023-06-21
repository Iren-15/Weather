import { useContext, useEffect } from "react";
import { InfoWeatherBlock } from "../components/infoBlocks/infoWeatherBlock";
import { IndexArrContext } from "../providers/index-provider";
import { IndexArrDaysContext } from "../providers/index-provider-days";
import styles from "./styles.module.scss";

export const FiveDays = () => {
  const { indexArrCurrentDay } = useContext(IndexArrContext);
  const { setIndexArrDays } = useContext(IndexArrDaysContext);

  useEffect(() => {
    const ii = indexArrCurrentDay.length - 1;
    let indexDaysArr = [ii + 1, ii + 9, ii + 17, ii + 25];
    setIndexArrDays(indexDaysArr);
  }, []);

  return (
    <div className={styles["info-container"]}>
      <InfoWeatherBlock />
    </div>
  );
};
