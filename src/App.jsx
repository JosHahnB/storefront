import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BeastModal from './components/beastModal/BeastModal';
import Beasts from './components/beasts/Beasts';

const App = () => {
  // const selectedBeast = useSelector(state => state.beast.selectedBeast)
  return (
    <div>
      {/* {selectedBeast && {selectedBeast.title}} */}
      <Header />
      <Beasts />
      <Footer />
      <BeastModal />
    </div>
  );
};

export default App;
