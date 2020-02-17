import * as React from 'react';
import {Dispatch} from 'redux';

interface DefaultBaseInnerProps {
    dispatch: Dispatch;
}

class BaseComponent extends React.Component<DefaultBaseInnerProps, any>{
}

export default BaseComponent;