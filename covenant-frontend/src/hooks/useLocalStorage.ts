import { useRef } from "react";

const useLocalStorage = <T>(key: string, initialvalue: T) => {
  const dataRef = useRef<T>(initialvalue);

  const getStorages = () => {
    const valuefromStore = localStorage.getItem(key);
    dataRef.current = valuefromStore && JSON.parse(valuefromStore);
    return valuefromStore ? (JSON.parse(valuefromStore) as T) : initialvalue;
  };
  const setStorage = (value: any) => {
    const toStore = value instanceof Function ? value(dataRef.current) : value;
    dataRef.current = toStore;
    localStorage.setItem(key, JSON.stringify(toStore));
  };

  const removeStorage = () => {
    localStorage.removeItem(key);
    dataRef.current = initialvalue;
  };

  return [setStorage, dataRef, removeStorage];
};

export default useLocalStorage;
