import './App.css';

import { Routes, Route } from 'react-router-dom';
import PageMain from './components/page/page-main/PageMain';
import Footer from './components/UI/footer/Footer';
import Header from './components/UI/header/Header';
import PageNotFound from './components/page/PageNotFound'
import PageFaq from './components/page/PageFaq'
import PageTarifs from './components/page/PageTarifs'
import PageResult from './components/page/PageResult'
import PageSearch from './components/page/page-search/PageSearch';
import Auth from './components/popup/auth';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<PageMain />} />
        <Route path='/tarifs' element={<PageTarifs />} />
        <Route path='/FAQ' element={<PageFaq />} />
        <Route path='/search' element={<PageSearch />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/search/result' element={<PageResult />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
