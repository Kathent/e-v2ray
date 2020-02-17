import * as React from 'react';
import BaseServerCard from './base';
import {CardActions, CardMedia, CardHeader, Avatar, IconButton, CardContent, Box, TextField, MenuItem} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import {connect} from 'react-redux';

const securities = ['ase128-gcm','auto', 'none', 'chacha20-poly1305']
const network = ['tcp','kcp','ws','h2','quic']

const styles = {
    root: {
        width: "50%",
        "margin-left": 20,
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(-90deg)',
        marginLeft: 'auto'
    },
    expandOpen: {
        transform: 'rotate(90deg)'
    },
    action: {
        display: 'flex',
        'flex-direction': 'row-reverse'
    },
    inputArea: {
        "margin-left": 20,
        display: "flex",
        "flex-direction": "column",
        "& .MuiTextField-root": {
            maxWidth: "80%",
            padding: 20
        }
    }
}

const headerAvatar = (type: string, classes:any) => {
    return <Avatar className={classes.avatar}>
        {type.charAt(0).toLocaleUpperCase()}
    </Avatar>
}

const headerAction = () => {
    return <IconButton>
        <MoreVertIcon/>
    </IconButton>
}

@connect(null)
class NoServerCard extends BaseServerCard{
    server: any;


    serverInfo(): React.ReactNode {
        return <React.Fragment>
            {this.serverHeader()}
            {this.state.edit ? this.serverDetail(): this.serverStatics()}
            {this.serverOpArea()}
        </React.Fragment>
    }

    handleChange(e) {
        this.setState(()=>{
            security: e.target
        })
    }

    serverDetail() {
        const {classes} = this.props;
        console.log('state is', this.state);
        return <Box>
            <Box className={classes.inputArea}>
                <TextField label="地址(ip)" placeholder="0.0.0.0"
                margin="normal" size="small"/>
                <TextField label="端口(port)" placeholder="8080"
                margin="normal" size="small"/>
                <TextField label="用户id" placeholder="hgskej7s9sdasd"
                margin="normal" size="small"/>
                <TextField label="额外id(alertId)" placeholder="0"
                margin="normal" size="small"/>
                <TextField label="加密方式(security)" select value={this.state.security}
                margin="normal" onChange={this.handleChange} size="small">
                    {
                        securities.map((val)=> (
                            <MenuItem key={val} value={val}>
                                {val}
                            </MenuItem>
                        ))
                    }
                </TextField>
                <TextField label="传输协议(network)" select value={this.state.network}
                margin="normal" onChange={this.handleChange}>
                    {
                        network.map((val)=> (
                            <MenuItem key={val} value={val}>
                                {val}
                            </MenuItem>
                        ))
                    }
                </TextField>
            </Box>
            <Box>

            </Box>
        </Box>
    }

    serverHeader(): React.ReactNode {
        const {classes} = this.props;
        return <CardHeader avatar={headerAvatar(this.server.type, classes)} 
                action={headerAction()} 
                title={this.server.name}
                subheader={this.server.type}>
        </CardHeader>;
    }
    serverStatics(): React.ReactNode {
        const {classes} = this.props;
        return <CardMedia className={classes.media} image='' title="statics">
        </CardMedia>
    }
    serverOpArea(): React.ReactNode {
        const {classes} = this.props;
        return <CardActions className={classes.action}>
            <IconButton onClick={this.handleEditServer}>
                <RotateLeftIcon/>
            </IconButton>
        </CardActions>
    }

    handleEditServer() {
        this.setState((state) => ({
            edit: !state.edit
        }));
    }

    constructor(props, state) {
        super(props, state);
        this.server = {addr: "127.0.0.1", name: "server1", type: "ss"}
        this.state = {edit: false, security: 'auto', network:'tcp'};
        this.handleEditServer = this.handleEditServer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }    

    componentDidMount() {
        const {dispatch} = this.props;
        console.log('dispatch is', dispatch);
        dispatch({type: NoServerCard});
    }
}

export default withStyles(styles)(NoServerCard);