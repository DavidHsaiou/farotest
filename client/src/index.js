import React from 'react';
import ReactDOM from 'react-dom';
import {
    getWebInstrumentations,
    initializeFaro
} from '@grafana/faro-web-sdk';

const faro = initializeFaro({
    url: 'http://localhost:8027/collect',
    apiKey: 'api_key',
    app: {
        name: '@grafana/faro-demo-client',
        version: '1.0.0',
    },
    instrumentations: [...getWebInstrumentations()],
});

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));