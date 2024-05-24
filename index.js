'use strict';

const container = document.querySelector('.travels');

const imageTabs = [...container.children];

container.addEventListener('click', function (e) {
  //Only executing the codes, if the image tab is selected.
  if (!e.target.classList.contains('scenarios')) return;

  //Removing active class and adding inactive class
  imageTabs.forEach(function (el) {
    el.classList.remove('active');
    el.classList.add('inactive');
  });

  //Removing inactive class and adding active class
  if (e.target.classList.contains('scenarios')) {
    e.target.classList.remove('inactive');
    e.target.classList.add('active');
  }
});
