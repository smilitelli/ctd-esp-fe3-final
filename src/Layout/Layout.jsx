import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Home from '../Routes/Home';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';

const Layout = ({ children }) => {
  const { theme } = useThemeStates();

  return (
    <div style={{ background: theme.background, color: theme.font }}>
      <div style={{ margin: '0 auto' }}>
      <Navbar/>
      <Home/>
      <Footer/>
      
        <Outlet /> {/*Ej: si estoy en /contacto va a mostrar <Contact/> */}
        {children}
      </div>
    </div>
  );
};

export default Layout;
