import controller from './home.controller';
import template from './home.view.html';

export default ($stateProvider) => {
    $stateProvider.state('root.home', {
        url: '/',
        template,
        controller,
        controllerAs: 'vm',
    });
};