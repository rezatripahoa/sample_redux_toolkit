import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LoadingDefault from "./components/loading/loadingDefault";
import Home from "./view/home";

function App() {
  const [isGateOpen, setIsGateOpen] = useState(false);
  const _persist = useSelector((state) => state._persist);

  useEffect(() => {
    setIsGateOpen(_persist.rehydrated);
  }, [_persist.rehydrated]);

  return (
    <>
      {!isGateOpen && <LoadingDefault />}
      <Home />
    </>
  );
}

export default App;
