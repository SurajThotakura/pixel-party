import { MantineProvider } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import { useState } from "react";

function App() {
  const [authOkay, setAuthOkay] = useState<Boolean>(false)
  const IS_AUTH_ENABLED = false

  return (
    <MantineProvider
      theme={{
        colorScheme: "dark",
        fontFamily: "Lexend, sans-serif",
      }}
      withGlobalStyles
    >
      {IS_AUTH_ENABLED && !authOkay ? (
        <LoginPage setAuthOkay={setAuthOkay} />
      ) : (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      )}
    </MantineProvider>
  );
}

export default App;
