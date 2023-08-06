import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Pagination from './pages/Pagination';
import MainLayout from './components/layout/MainLayout';
import DataFetching from './pages/DataFetching';

function App() {
    return (
        <MainLayout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/concepts/pagination' element={<Pagination />} />
                <Route
                    path='/concepts/data-fetching'
                    element={<DataFetching />}
                />
            </Routes>
        </MainLayout>
    );
}

export default App;
