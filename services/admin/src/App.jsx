import React from "react";
import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import TopBar from "./lib/Components/UI/TobBar";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./lib/Components/UI/SideBar";
import Dashboard from "./screens/Dashboard";
import ShowUsers from "./screens/Users/ShowUsers";
import ShowEmpresas from "./screens/Empresas/ShowEmpresas";
import NewUser from "./screens/Users/NewUser";
import NewEmpresa from "./screens/Empresas/NewEmpresa";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<ShowUsers />} />
              <Route path="/empresas" element={<ShowEmpresas />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/newEmpresa" element={<NewEmpresa />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
