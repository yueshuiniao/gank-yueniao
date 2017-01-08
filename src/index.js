import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import routes from './routes';

const mountNode = document.getElementById('root');

render(
    <AppContainer>
        {routes}
    </AppContainer>,
    mountNode
);

if (module.hot) {
    module.hot.accept('./routes', () => {
        setImmediate(() => {
            // Preventing the hot reloading error from react-router
            unmountComponentAtNode(mountNode);
            const NextRoutes = require('./routes').default;
            render(
                <AppContainer>
                    {NextRoutes}
                </AppContainer>,
                mountNode
            );
        });
    });
}