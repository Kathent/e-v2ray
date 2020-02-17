import * as React from 'react';
import {Card, StyledComponentProps} from '@material-ui/core';
import {Dispatch} from 'redux';

interface ServerCardProps extends StyledComponentProps{
    server: any;
    dispatch: Dispatch;
}

abstract class BaseServerCard extends React.Component<ServerCardProps, any>{
    render() {
        const {classes} = this.props;
        return <Card className={classes.root}>
            {this.serverInfo()}
        </Card>;
    }
    abstract serverInfo(): React.ReactNode;
} 

export default BaseServerCard;