import './externalStyles';
import './scss/index.scss';

import app from './app';
import routesConfig from './configs/routes.config';
import routesStartup from './startup/routes.startup';


app.config(routesConfig)
    .run(routesStartup);
