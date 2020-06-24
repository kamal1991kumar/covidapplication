import React from 'react';
import Link from 'next/link';

export default function TaskAreaView() {

    return (
        <div className='taskArea'>
           
            <div className='card card--mb20'>
            <h4 className='heading heading--h4'>Tasks Area</h4>
                <div className='card__content'>
                    <ul className='taskArea__listing'>
                        {
                            ['Lobby', 'Reception', 'Washroom', 'IT Lobby', 'Room', 'Washroom', 'Cafe Area', 'Washroom'].map((item) => {
                                return (
                                    <Link href='/listing'>
                                        <li className='taskArea__listing__item'>
                                            <img
                                                // src={`http://placehold.jp/12/6b4d66/ffffff/100x100.png?text=${item}`}
                                                src='/images/123.jpg' height='80%' width='80%'
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
    );
}