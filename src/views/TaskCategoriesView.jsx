import React from 'react';
import { Link } from 'react-router-dom';

export default function TaskAreaView() {

    return (
        <div className='taskArea'>

            <div className='card card--mb20'>
                <div className='card__content'>
                    <h4 className='heading heading--h4'>Task Area Items</h4>
                    <ul className='taskArea__listing'>
                        {
                            ['Sanitiser', 'Cleaning', 'Washing Hands', 'Tissue box', 'Sanitiser', 'Cleaning', 'Washing Hands'].map((item) => {
                                return (

                                    <li className='taskArea__listing__item'>
                                        <Link to='/listing'>
                                            <img
                                                src={`/images/${item}.png`}


                                                alt='img'
                                            />
                                            <div className='taskArea__listing__label'>{item}</div>
                                        </Link>

                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}