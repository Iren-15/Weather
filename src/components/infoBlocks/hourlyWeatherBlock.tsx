import styles from "./info.module.scss";

export const HourlyWeatherBlock = (props: any) => {
  return (
    <div className={styles["hourly-container"]}>
      <p className={styles["par-city"]}>
        {props?.city} {props?.country}
      </p>
      <p className={styles["par-date"]}>{props?.date}</p>
      <p className={styles["par-time"]}>{props?.time}</p>
      <p className={styles["par-temp"]}>{props?.temp}° C</p>
      <p className={styles["par-feels"]}>Feels like: {props?.feels}° C</p>
      <p className={styles["par-conditions"]}>{props?.conditions}</p>
      <p className={styles["par-variation"]}>
        Min: {props?.temp_min}° - Max: {props?.temp_max}°
      </p>
    </div>
  );
};
