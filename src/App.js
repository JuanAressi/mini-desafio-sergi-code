import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Index from './pages/Index';
import Form from './pages/Form';
import './App.css';

function App() {
	return (
        <Router>
            <Routes>
                <Route path='/' element={<Index />} />
                <Route path='/formulario' element={<Form />} />
            </Routes>
        </Router>
	);
}

export default App;
