import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/app/app';
import getConf from './config/load';
import {ThemeProvider} from '@material-ui/core';
import theme from './theme/theme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const config = getConf();
const store = createStore((state, action)=>({name:"aa", type:"bb",action: action}));

store.subscribe(()=>console.log('state is', store.getState()));

const Index = () => {
    return <ThemeProvider theme={theme}>
            <Provider store={store}>
            <App conf={config}/>
            </Provider>
        </ThemeProvider>
}

ReactDOM.render(<Index />, document.getElementById('app'));