import "./App.css";
import React, { useState } from "react";
import PageTitle from "./componenets/PageTitle";
import AppHeader from "./componenets/AppHeader";
import AppContent from "./componenets/AppContent";
import {Toaster} from 'react-hot-toast'

function App() {
  return (
    <>
    <div className="container">
    <PageTitle> TODO LIST</PageTitle>     
    <AppHeader/>
    <AppContent>   </AppContent>
    </div>
    <Toaster />
    </>
  );
  
}

export default App;
