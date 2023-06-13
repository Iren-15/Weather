import { useField } from "formik";
import cn from "classnames";
import styles from "./input.module.scss";

interface IInput {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const Input = ({ label, ...props }: IInput) => {
  const [field, meta] = useField(props);
  const errorState = meta.touched && meta.error;
  return (
    <div className={styles["container"]}>
      <label
        className={cn(styles["label"], {
          [styles["error"]]: errorState,
        })}
      >
        <div className={styles["container"]}>
          {label}
          <input
            className={cn(styles["input"], {
              [styles["error-input"]]: errorState,
            })}
            {...field}
            {...props}
          />
        </div>
      </label>

      {errorState ? <div className={styles["error"]}>{meta.error}</div> : null}
    </div>
  );
};
