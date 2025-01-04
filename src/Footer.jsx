import React from 'react';
import PropTypes from 'prop-types';

function Footer({ lists }) {
    let totalListedItem = lists.length;
    let selectedListedItem = lists.filter((list) => (
        list.checkbox
    )).length
    let completionPercentage = Math.round((selectedListedItem / totalListedItem) * 100)
    console.log(completionPercentage)

    return (
        <div className='flex flex-col justify-center items-center bg-footerColor h-[100px] fixed bottom-0 left-0 w-full z-10'>
            {lists.length > 0 ?
                (<>
                    <button className='bg-deleteColor font-bold text-[12px] rounded-[6px] w-[60px] h-[38px]'>clear list</button>
                    <div className='font-bold text-[12px] text-center text-white'>You are 50% done</div>
                </>)
                : (<div className='font-bold text-[12px] text-center text-white'>you have nothing on the list</div>)}
        </div>
    )
}

Footer.propTypes = {
    lists: PropTypes.array.isRequired,
}

export default Footer

