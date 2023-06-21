import { ReactNode, createContext, useState } from "react";

interface IIndexArrHoursContext {
  indexArrCurDayHours: any;
  setIndexArrHours: (indexArrCurDayHours: any) => void;
}

export const IndexArrHoursContext = createContext<IIndexArrHoursContext>({
  indexArrCurDayHours: [],
  setIndexArrHours: () => {},
});

interface IIndexArrHoursProvider {
  children: ReactNode;
}

export const IndexArrHoursProvider = ({ children }: IIndexArrHoursProvider) => {
  const [indexArrCurDayHours, setIndexArrHours] = useState([]);

  return (
    <IndexArrHoursContext.Provider
      value={{ indexArrCurDayHours, setIndexArrHours }}
    >
      {children}
    </IndexArrHoursContext.Provider>
  );
};
