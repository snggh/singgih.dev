import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeroImageRight } from '../components/Hero/HeroImageRight';
import { HeaderResponsive } from '../components/Header/HeaderResponsive';
import menu from '../data/menu.json';
import { Footer } from '../components/Footer/Footer';

const HomePage = () => {
  return (
    <>
      <HeaderResponsive links={menu.links} />
      <HeroImageRight />
      <Footer />
    </>
  );
};

export default HomePage;
