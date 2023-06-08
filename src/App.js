import './css/App.css';
import Navbar from './componemts/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import Customer from './page/Customer';
import Sale from './page/Sale';
import Car from './page/Car';
import Finance from './page/Finance';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/customers' element={<Customer />}></Route>
                <Route path='sales' element={<Sale />}></Route>
                <Route path='/cars' element={<Car />}></Route>
                <Route path='/finances' element={<Finance />}></Route>
            </Routes>
        </BrowserRouter>
    )

}

export default App;