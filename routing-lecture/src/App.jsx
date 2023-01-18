import { Routes, Route, Navigate, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Launches from './views/Launches';
import OneLaunch from './views/OneLaunch';
import NotFound from './views/NotFound';

function App() {
    return (
        <div style={{ width: '80%', margin: '0 auto' }} className="App">
            <header className="App-header">
                <h1>Launch Project</h1>
            </header>


            <Routes>
                {/* redirect example */}
                <Route path='/' element={<Navigate to="/launches" />} />
                <Route path='/launches' element={<Launches />} />

                {/* 
                    :id is the URL param, it needs to match the variable name that is 
                    being pulled out from within the OneLaunch component with useParams()
                */}
                <Route path='/launches/:id' element={<OneLaunch />} />

                {/* If none of the above routes match, use NotFound View */}
                <Route path="*" element={<NotFound />} />

            </Routes>
            <Link to="/launches/17">Testing Link Tags</Link>
        </div>
    );
}

export default App;
