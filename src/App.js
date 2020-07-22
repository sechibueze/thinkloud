import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import PostItems from './components/PostItems/PostItems';

// const Home =() => <PostItems />
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={PostItems} />
      </Router>
    </Provider>
  );
};

export default App;
