import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { CityContext } from "../../providers/city-provider";
import { Tabs } from "../tabs";
import { Input } from "../../components/input/input";
import styles from "./styles.module.scss";

interface IFormValues {
  inputCity: string;
}

const initialValues: IFormValues = {
  inputCity: "",
};

const validationSchema = Yup.object({
  inputCity: Yup.string().required("Required").min(3, "City name is too short"),
});

export const FormikForm = () => {
  const history = useHistory();
  const { setCity } = useContext(CityContext);

  const onSubmit = (values: IFormValues) => {
    console.log("submit", values.inputCity);
    setCity(values.inputCity);
    {
      history.push("/weather/today");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ touched }) => {
        return (
          <Form className={styles["form"]}>
            <div className={styles["container"]}>
              <button
                className={styles["btn-back-home"]}
                type="button"
                onClick={() => {
                  history.push("/");
                  setCity("");
                }}
              >
                Back Home Page
              </button>
              <h1 className={styles["header"]}>
                Weather forecast in your city
              </h1>
            </div>
            <div className={styles["flex-center"]}>
              <Input
                name="inputCity"
                type="text"
                label="Your city:"
                placeholder="Enter your city..."
              />
              <button type="submit" className={styles["btn-search"]}>
                Search
              </button>
            </div>
            {touched.inputCity && <Tabs />}
          </Form>
        );
      }}
    </Formik>
  );
};
