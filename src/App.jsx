import { useState } from "react";
import SidebarView from "./components/SidebarView";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SidebarView />
    </>
  );
}

export default App;
