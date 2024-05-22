import Header from './components/header';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

function App() {
    return (
        <div>
            <Header info={'Teste'} />
            <main>
                <CoreConcepts />
                <Examples />
            </main>
        </div>
    );
}

export default App;
