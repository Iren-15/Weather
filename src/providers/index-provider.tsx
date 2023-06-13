import { ReactNode, createContext, useState } from "react";

interface IIndexArrayContext {
  indexArray: number[];
  setIndexArray: (indexArray: any) => void;
}

export const IndexArrayContext = createContext<IIndexArrayContext>({
  indexArray: [],
  setIndexArray: () => {},
});

interface IIndexArrayProvider {
  children: ReactNode;
}

export const IndexArrayProvider = ({ children }: IIndexArrayProvider) => {
  const [indexArray, setIndexArray] = useState([]);

  return (
    <IndexArrayContext.Provider value={{ indexArray, setIndexArray }}>
      {children}
    </IndexArrayContext.Provider>
  );
};
