import * as React from 'react';
import { Box } from '@material-ui/core';


interface ContainerProps {
    classes: any;
}

abstract class V2RayBaseContainer extends React.Component<ContainerProps> {
    constructor(props, state) {
        super(props, state);
    }

    abstract sideBar(): React.ReactNode;
    abstract mainDiv(): React.ReactNode;

    render() {
        const {classes} = this.props;
        return <Box className={classes.root}>
            {this.sideBar()}
            {this.mainDiv()}
        </Box>
    }
}

export default V2RayBaseContainer;