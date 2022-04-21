import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from './admin';
import Edit from './edit';

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/Edit/:id" element={<Edit />} />
      </Routes>

    </BrowserRouter>
  </>
);

// function App() {
//   return (
//     <Admin />
//   );
// }

export default App;
