import controller from '../pages/app.controller';
import template from '../pages/app.layout.html';

export default ($stateProvider, $urlRouterProvider, $locationProvider) => {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: false
    });
    
    
    $urlRouterProvider.otherwise(($injector) => {
        const $state = $injector.get("$state");
        $state.go('/');
    });
    
    $stateProvider.state('root', {
        url: '',
        template,
        controller,
        controllerAs: 'vm',
    });
};