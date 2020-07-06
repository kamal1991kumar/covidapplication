import React from 'react';
import TaskAddArea from '../views/TaskAddArea';


export default class AddAreaComponent extends React.Component{

    state = {

    };

    static async getInitialProps(ctx) {
        console.log( ctx );
        return;
    }

    render() {

        return(
            <TaskAddArea />
        );

    }

}