import './App.css';
import './common.css';
import HomeComponent from './Home'
import {MyReduxStore} from './Components/store'
import {Provider} from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={MyReduxStore}>
        <HomeComponent title="Employee Details" />
      </Provider>
    </div>
  );
}

export default App;
