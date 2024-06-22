import { Outlet, useLocation } from "react-router-dom";
import { createContext, useMemo } from "react";
import { Header } from "./shared/components/Header/Header";
import { Sidebar } from "./shared/components/Sidebar/Sidebar";

export const ApiContext = createContext({});

export const ApiProvider = () => {
  const location = useLocation();
  const isCoffeeBeansPage = location.pathname.startsWith("/product");
  const isCoffeePage = location.pathname.startsWith("/coffee");

  const value = useMemo(() => ({}), []);

  return (
    <ApiContext.Provider value={value}>
      {!isCoffeeBeansPage && !isCoffeePage && (
        <>
          <Header />
          <div className="main">
            <Outlet />
          </div>
          <Sidebar />
        </>
      )}
      {(isCoffeeBeansPage || isCoffeePage) && <Outlet />}
    </ApiContext.Provider>
  );
};
