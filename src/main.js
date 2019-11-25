import {createCardTemplate} from './components/card.js';
import {createDayTemplate} from './components/day.js';
import {createFilterTemplate} from './components/filter.js';
import {createFormTemplate} from './components/form.js';
import {createInfoTemplate} from './components/info.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortTemplate} from './components/sort.js';
import {createtContainerTemplate} from './components/task-container.js';

const render = (element, template, position) => {
  element.insertAdjacentHTML(position, template);
};
const tripMain = document.querySelector(`.trip-main__trip-info`);
render(tripMain, createInfoTemplate(), `afterbegin`);
const tripMenu = document.querySelector(`.trip-main__trip-controls`);
render(tripMenu, createMenuTemplate(), `afterbegin`);
render(tripMenu, createFilterTemplate(), `beforeend`);
const tripBody = document.querySelector(`.trip-events`);
render(tripBody, createSortTemplate(), `beforeend`);
render(tripBody, createFormTemplate(), `beforeend`);
render(tripBody, createtContainerTemplate(), `beforeend`);
const tripContainer = document.querySelector(`.trip-days`);
render(tripContainer, createDayTemplate(), `beforeend`);
const tripEventsList = document.querySelector(`.trip-events__list`);
new Array(3).fill(``).forEach(() => render(tripEventsList, createCardTemplate(), `beforeend`));
