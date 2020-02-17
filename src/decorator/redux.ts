import {connect} from 'react-redux';

function link(maps: any) {
    return target => connect(maps, target);
}

export default link;