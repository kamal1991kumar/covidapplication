import React from 'react';
import Link from 'next/link';

export default function TaskAreaView() {

    return (
        <div className='taskArea'>
           
            <div className='card card--mb20'>
            <div className='grid-inner'>
            <h4 className='heading--h4'>Task Area Items</h4>
            </div>
                <div className='card__content'>
                    <ul className='taskArea__listing'>
                        {
                            ['Sanitiser', 'Cleaning', 'Washing Hands', 'Tissue box','Sanitiser', 'Cleaning', 'Washing Hands' ].map((item) => {
                                return (
                                    <Link href='/listing'>
                                        <li className='taskArea__listing__item'>
                                            <img
                                                 src={`/images/${item}.png`}
                                                
                                                
                                                alt='img'
                                                // height='60%'
                                                // width='50%'
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