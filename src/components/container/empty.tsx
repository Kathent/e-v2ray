import * as React from 'react';
import {Container, Box} from '@material-ui/core'
import NoServerCard from './../cards/empty';
import V2RayBaseContainer from './base';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        display: "flex",
        height: "100%"
    }
}

class NoServerContainer extends V2RayBaseContainer {
    constructor(props, state) {
        super(props, state);
    }
    sideBar(): React.ReactNode {
        return <div></div>
    }   
    
    mainDiv(): React.ReactNode {
        return <Box width="100%" display="flex" flexDirection="row">
            <NoServerCard></NoServerCard>
        </Box>
    }    
}

export default withStyles(styles)(NoServerContainer);