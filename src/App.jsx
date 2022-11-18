import Header from './components/Header';
import Navigation from './components/Navigation';
import DishesList from './components/DishesList';

function App() {
  return (
    <div className='w-full min-h-screen overflow-hidden'>
      <Header />

      <Navigation />

      {/* Dishes Container */}
      <DishesList />
    </div>
  );
}

export default App;
