import './externalStyles';
import './scss/index.scss';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import uiRouter from 'angular-ui-router';


export default angular.module('app', [
    ngMaterial,
    ngAnimate,
    uiRouter
]);