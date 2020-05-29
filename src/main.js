import {render} from './utils/render.js';

import UserProfileComponent from './components/user-profile.js';
import TotalNumbersFilmsComponent from './components/total-number-films.js';

import FilmsModel from './models/films.js';
import PageController from './controllers/page.js';
import FiltersController from './controllers/filters.js';

import {generateFilms} from './mocks/film-card.js';

const FILMS_NUMBER_IN_MAIN_LIST = 10000;

const mainHeader = document.querySelector(`.header`);
const mainBlock = document.querySelector(`.main`);

const films = generateFilms(FILMS_NUMBER_IN_MAIN_LIST);

const renderHeader = (mainHeaderBlock) => {
  render(mainHeaderBlock, new UserProfileComponent());
};
const renderFooter = (totalFilms, footerStatistics) => {
  render(footerStatistics, new TotalNumbersFilmsComponent(totalFilms));
};

const filmsModel = new FilmsModel();
filmsModel.setFilms(films);
const pageController = new PageController(mainBlock, filmsModel);
const filtersController = new FiltersController(mainBlock, filmsModel);

const init = () => {
  renderHeader(mainHeader);

  filtersController.render();
  pageController.render(films);

  const footerStatistics = document.querySelector(`.footer__statistics`);
  renderFooter(FILMS_NUMBER_IN_MAIN_LIST, footerStatistics);
};

init();
