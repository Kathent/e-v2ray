import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';

function bindStyle(style: any) {
    return target => withStyles(style)(target);
}