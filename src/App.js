import { Provider } from 'react-redux';
import store from './EFMRegional/exercice4/Store/store';
import ListeArticle from './EFMRegional/exercice4/compenenets/ListeArticle';

function App() {
    return (
        <Provider store={store}>
            <div className="container mt-4">
                <ListeArticle />
            </div>
        </Provider>
    );
}

export default App;
