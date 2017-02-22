import angular from 'angular';
import {appName} from '../../constants';
import uiRouter from 'angular-ui-router';

import routing from './home.routes';

export default angular.module(`${appName}.pages.home`, [uiRouter])
    .config(routing)
    .name;