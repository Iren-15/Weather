import { ReactNode, createContext, useState } from "react";

interface IIndexArrDaysContext {
  indexArrDays: any;
  setIndexArrDays: (indexArrDays: any) => void;
}

export const IndexArrDaysContext = createContext<IIndexArrDaysContext>({
  indexArrDays: [],
  setIndexArrDays: () => {},
});

interface IIndexArrDaysProvider {
  children: ReactNode;
}

export const IndexArrDaysProvider = ({ children }: IIndexArrDaysProvider) => {
  const [indexArrDays, setIndexArrDays] = useState([]);

  return (
    <IndexArrDaysContext.Provider value={{ indexArrDays, setIndexArrDays }}>
      {children}
    </IndexArrDaysContext.Provider>
  );
};
