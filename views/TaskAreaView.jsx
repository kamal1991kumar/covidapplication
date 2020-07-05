// import React from 'react';
import React, { Component } from 'react';
import Link from 'next/link';
import ScrollMenu from 'react-horizontal-scrolling-menu';

export class TaskAreaView extends Component {
    render() {
        return (
            <div className='taskArea'>
            <div className='card card--mb20'>
            <div className='grid-inner'>
            <h4 className='heading heading--h4'>Tasks Area</h4>
            </div>
                <div className='card__content'>
                    <ul className='taskArea__listing'>
                        {
                            ['Lobby', 'Reception', 'Washroom','Lobby', 'Reception', 'Washroom', 'Cafe Area'].map((item) => {
                                return (
                                    <Link href='/listing'>
                                        <li className='taskArea__listing__item'>
                                            <img
                                                src={`/images/${item}.jpg`}
                                                 height='70%' width='80%'
                                                alt='img'
                                            />
                                            <div className='taskArea__listing__label'>{item}</div>
                                        </li>
                                    </Link>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default TaskAreaView


