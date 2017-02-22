import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';
import {appName} from './constants';
import homePage from './pages/home';


export default angular.module(appName, [
    ngMaterial,
    ngAnimate,
    uiRouter,
    // pages
    homePage
]);