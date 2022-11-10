import './App.css';
import { Provider } from 'react-redux';
import ContactApp from './components/ContactApp';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ContactApp/>
    </div>
    </Provider>
  );
}

export default App;
