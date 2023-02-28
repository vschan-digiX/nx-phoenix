// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Provider } from 'react-redux';
import {
  createRootStore,
} from '@phoenix/store';
import Home from './Home/home';

export function App() {

  const store = createRootStore();

  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
