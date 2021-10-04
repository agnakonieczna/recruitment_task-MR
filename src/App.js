import GlobalStyle from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { Switch, Route } from 'react-router-dom';
import store from './redux/store';

import HomePage from './components/HomePage/HomePage';
import HouseList from './containers/HouseList';
import SingleHouse from './containers/SingleHouse';
import HouseForm from './containers/HouseForm';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route path='/house-list'>
            <HouseList />
          </Route>
          <Route path='/single-house/:id'>
            <SingleHouse />
          </Route>
          <Route path='/house-form'>
            <HouseForm />
          </Route>
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
