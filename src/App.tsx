import { useEffect, useState } from "react";
import EmployeesTable from "./components/EmployeesTable";

enum LOADING_STATE {
  isLoading,
  errored,
  loaded
}

function App() {
  const [employees, setEmployees] = useState([]);

  const [loadingState, setLoadingState] = useState(LOADING_STATE.isLoading);

  useEffect(() => {
    (async () => {
      try {
        const employeesResponse = await fetch(
          "https://mocki.io/v1/67d12549-e5be-4679-ba32-1229a58c692a"
        );
        const users = await employeesResponse.json();
        setEmployees(users);
        setLoadingState(LOADING_STATE.loaded);
      } catch {
        setLoadingState(LOADING_STATE.errored);
      }
    })();
  }, []);

  if (loadingState === LOADING_STATE.isLoading) {
    return <>Loading...</>;
  }

  if (loadingState === LOADING_STATE.errored) {
    return <>Something went wrong!</>;
  }

  return (
    <>
      <EmployeesTable employees={employees} />
    </>
  );
}

export default App;
