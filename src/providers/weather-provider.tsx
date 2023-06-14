import { ReactNode, createContext, useState } from "react";

interface IWeatherContext {
  weatherObj: any;
  setWeatherObj: (weatherObj: any) => void;
}

export const WeatherContext = createContext<IWeatherContext>({
  weatherObj: {},
  setWeatherObj: () => {},
});

interface IWeatherProvider {
  children: ReactNode;
}

export const WeatherProvider = ({ children }: IWeatherProvider) => {
  const [weatherObj, setWeatherObj] = useState({});

  return (
    <WeatherContext.Provider value={{ weatherObj, setWeatherObj }}>
      {children}
    </WeatherContext.Provider>
  );
};
