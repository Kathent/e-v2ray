import { V2RayConf } from './../../config/config';
import * as React from 'react';
import NoServerContainer from './../container/empty';
import {StyledProps} from '@material-ui/core/styles';

interface AppPros {
    conf: V2RayConf;
}

class App extends React.Component<AppPros, any> {
    conf: V2RayConf;

    constructor(props, state) {
        super(props, state);
        this.conf = props.conf;
    }

    render() {
        return this.getComponentsByConf();
    }

    getComponentsByConf(): React.ReactNode {
        const hasActiveServer = this.conf?.inbounds && this.conf.inbounds.length > 0;
        if (hasActiveServer) {
            // 当前有活动服务器, 显示服务器状态界面
            return null;
        }else {
            // 无活动服务器, 显示新增服务器界面
            return <NoServerContainer></NoServerContainer>;
        }
    }
}


export default App;