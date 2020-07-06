import React from 'react';
import { isEmpty, noop } from 'lodash';

export default class OpenCloseHoc extends React.Component{

    constructor( props ) {
        super( props );
        this.state = {
            isOpen: props.isOpen
        };
        this.ref = React.createRef();
        this.props.parentRef( this );
    }

    componentWillReceiveProps( nextProps ) {
        if( this.props.isOpen !== nextProps.isOpen ) {
            this.setState( { isOpen: nextProps.isOpen } );
        }
    }

    componentDidMount() {
        if( ! isEmpty( this.ref.current ) ) {
            this.onBodyClick();
        }
    }

    onHandleClick = () => {
        this.setState( { isOpen: !this.state.isOpen } );
    }

    onBodyClick() {
        document.addEventListener( 'click', ( e ) => {
            
            if( ! isEmpty( this.ref.current ) ) {
                
                const _isOutSide = this.ref.current.contains( e.target );
                if( ! _isOutSide ) {
                    this.setState( { isOpen: false } );
                }
            }

        } );
    }

    render() {
        return this.props.render( {
            ...this.state,
            onHandleClick: this.onHandleClick,
            ref: this.ref
        } );
    }

}

OpenCloseHoc.defaultProps = {
    isOpen: false,
    parentRef: noop
};