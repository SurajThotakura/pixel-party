import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import { useState } from "react";

function App() {
  const [authOkay, setAuthOkay] = useState<Boolean>(false)

  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "Lexend, sans-serif",
      }}
      withGlobalStyles
    >
      {authOkay ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <LoginPage setAuthOkay={setAuthOkay} />
      )}
    </MantineProvider>
  );
}

export default App;
