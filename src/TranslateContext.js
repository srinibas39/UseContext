import { createContext, useContext, useState } from "react";

export const TranslateContext = createContext();

export const TranslateProvider = ({ children }) => {
  const [translate, setTranslate] = useState(false);
  return (
    <TranslateContext.Provider value={{ translate, setTranslate }}>
      {children}
    </TranslateContext.Provider>
  );
};

export const useTranslate = () => useContext(TranslateContext);
