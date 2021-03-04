'use strict';
import strings from './strings.mjs';

// take in an array of html elements
// set up event listener
// for each one removes any other information on click
// for each one renders information to the page on click

const string = strings();

const buildInnerHTML = (str) => {
  let array = new Array();
  for (const key in str) {
    array.push(str[key]);
  }
  return array;
};

const content = buildInnerHTML(string);

// TODO: refactor this so that instead of keeping empty divs content is inserted at the container level
const setupEventListeners = () => {
  const selectors = ['#about', '#projects', '#contact'];
  selectors.forEach((value, index) => {
    document.querySelector(value).addEventListener('click', () => {
      document.querySelector(
        '#content-container',
      ).innerHTML = strings().emptyContent;
      document.querySelector(value + '-content').innerHTML = content[index];
    });
  });
};

export default setupEventListeners;
