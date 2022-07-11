import "./App.css";
import { useEffect } from "react";
import CardContent from "./components/CardContent";
import useGlobalData from "./hooks/useGlobalData";

function App() {
  const { saveTheme } = useGlobalData();

  useEffect(() => {
    saveTheme();
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray dark:bg-blueDark font-poppins">
      <CardContent />
    </div>
  );
}

export default App;
