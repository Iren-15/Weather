import { ReactNode, createContext, useState } from "react";

interface ICityContext {
  city: string;
  setCity: (city: string) => void;
}

export const CityContext = createContext<ICityContext>({
  city: "",
  setCity: () => {},
});

interface ICityProvider {
  children: ReactNode;
}

export const CityProvider = ({ children }: ICityProvider) => {
  const [city, setCity] = useState("");

  return (
    <CityContext.Provider value={{ city, setCity }}>
      {children}
    </CityContext.Provider>
  );
};
