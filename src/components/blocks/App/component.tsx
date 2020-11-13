import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'store';
import {
  MAIN,
  CHARACTERS,
  EPISODES,
  LOCATIONS,
  SELECTED_CHARACTER,
  SELECTED_LOCATIONS,
  SELECTED_EPISODE,
} from 'constants/paths';
import ThemeProviderWrapper from 'components/wrappers/ThemeProvider';
import MainPage from 'components/pages/MainPage';
import CharactersPage from 'components/pages/CharactersPage';
import LocationsPage from 'components/pages/LocationsPage';
import EpisodesPage from 'components/pages/EpisodesPage';
import CharacterPage from 'components/pages/CharacterPage';
import LocationPage from 'components/pages/LocationPage';
import EpisodePage from 'components/pages/EpisodePage';
import { useClasses } from './styles';

const App = (): ReactElement => {
  const classes = useClasses();

  return (
    <ThemeProviderWrapper>
      <Router>
        <div className={classes.app}>
          <Provider store={store}>
            <Route path={MAIN} component={MainPage} exact />
            <Route path={CHARACTERS} component={CharactersPage} exact />
            <Route path={LOCATIONS} component={LocationsPage} exact />
            <Route path={EPISODES} component={EpisodesPage} exact />

            <Route path={SELECTED_CHARACTER} component={CharacterPage} />
            <Route path={SELECTED_LOCATIONS} component={LocationPage} />
            <Route path={SELECTED_EPISODE} component={EpisodePage} />
          </Provider>
        </div>
      </Router>
    </ThemeProviderWrapper>
  );
};

export default App;
