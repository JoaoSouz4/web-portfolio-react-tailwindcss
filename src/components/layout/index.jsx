import MenuBar from '../menuBar';
import Main from '../main';
import Footer from '../footer';

export default function Layout() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <MenuBar />
      <Main />
      <Footer />
    </div>
  );
}
