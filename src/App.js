import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppBar from './components/Appbar';
import Home from './pages/home';
import Menu from './pages/menu';


export default function App() {
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AppBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} content={<Home />} />} />
          <Route exact path="/menu" element={<AppBar open={open} handleDrawerOpen={handleDrawerOpen} handleDrawerClose={handleDrawerClose} content={<Menu />} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
