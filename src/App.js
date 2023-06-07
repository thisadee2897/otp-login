import './css/App.css';
import Header from './componemts/Header';
import AddForm from './componemts/AddForm';
import Item from './componemts/Item';
function App() {
    return (
        <div className='App'>
            <Header />
            <div className='container'> <AddForm /><Item /></div>

        </div>
    )

}

export default App;