import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { MAIN, CHARACTERS, EPISODES, LOCATIONS, SELECTED_CHARACTER } from 'constants/paths';
import MainPage from 'components/pages/MainPage';
import CharactersPage from 'components/pages/CharactersPage';
import LocationsPage from 'components/pages/LocationsPage';
import EpisodesPage from 'components/pages/EpisodesPage';
import CharacterPage from 'components/pages/CharacterPage';
import './style.css';

const App = (): ReactElement => {
  return (
    <Router>
      <div className="App">
        <Route path={MAIN} component={MainPage} exact />
        <Route path={CHARACTERS} component={withRouter(CharactersPage)} exact />
        <Route path={LOCATIONS} component={LocationsPage} exact />
        <Route path={EPISODES} component={EpisodesPage} exact />

        <Route path={SELECTED_CHARACTER} component={CharacterPage} />
      </div>
    </Router>
  );
};

export default App;
