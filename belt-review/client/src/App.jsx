import { Routes, Route, Navigate, Link } from 'react-router-dom';
import AllCats from './components/AllCats';
import EditCat from './components/EditCat';
import NewCat from './components/NewCat';
import OneCat from './components/OneCat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CatBnB</h1>
        <div>
          <Link to='/cats'>All Cats</Link>
        </div>
        <div>
          <Link to='/cats/new'>Add a Cat to Rent</Link>
        </div>
        <Routes>
          <Route path='/' element={<Navigate to='/cats' replace />} />
          <Route path='/cats' element={<AllCats />} />
          <Route path='/cats/:id' element={<OneCat />} />
          <Route path='/cats/:id/edit' element={<EditCat />} />
          <Route path='/cats/new' element={<NewCat />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
