import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Builder from './pages/Builder';
import Preview from './pages/Preview';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MockInterview from './pages/MockInterview';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/preview" element={<Preview />} />
          <Route path='/mockinterview' element={<MockInterview />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
