import { ReactNode, createContext, useState } from "react";

interface IIndexArrContext {
  indexArrCurrentDay: any[];
  setIndexArr: (indexArrCurrentDay: []) => void;
}

export const IndexArrContext = createContext<IIndexArrContext>({
  indexArrCurrentDay: [],
  setIndexArr: () => {},
});

interface IIndexArrProvider {
  children: ReactNode;
}

export const IndexArrProvider = ({ children }: IIndexArrProvider) => {
  const [indexArrCurrentDay, setIndexArr] = useState([]);

  return (
    <IndexArrContext.Provider value={{ indexArrCurrentDay, setIndexArr }}>
      {children}
    </IndexArrContext.Provider>
  );
};
