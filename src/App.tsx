import { useState } from "react";
import "./App.css";

import MainLayout from "./layouts/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <MainLayout>
        {/* <SkipSelector />
        <SkipSelectionPage />
        <SkipSelection />
        <SkipSelectionPage2 /> */}
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
