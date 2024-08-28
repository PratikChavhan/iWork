import React from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App" >
      <Header />
      <ProtectedRoute />
      <Footer />
    </div>
  );
}

export default App;
