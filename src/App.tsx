import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "Poppins, sans-serif",
      }}
      withGlobalStyles
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
