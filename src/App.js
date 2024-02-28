import { ChakraProvider, Container } from "@chakra-ui/react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";

// theme
import { theme } from "./theme";

// pages
import { Home } from "./pages/Home/Home";
import { Photos } from "./pages/Photos/Photos";
import { Projects } from "./pages/Projects/Projects";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="xl" my={{ base: 10, md: 20 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ChakraProvider>
  );
}

export default App;
