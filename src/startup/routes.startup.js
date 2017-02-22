export default ($rootScope) => {
    $rootScope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {
        throw error;
    });
};