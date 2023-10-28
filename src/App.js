import { Link } from 'react-router-dom';
import './App.css';
import tabs from './tabs.json';

function App() {
    return (
        <div className="App">
            {tabs.tabs.map((tab) => (
                <Link to={tab.path} className="link" key={tab.id}>
                    {tab.id}
                </Link>
            ))}
        </div>
    );
}

export default App;
