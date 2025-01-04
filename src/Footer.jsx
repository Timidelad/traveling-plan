import React from 'react';
import PropTypes from 'prop-types';

function Footer({ lists, clearList }) {
    let totalListedItem = lists.length;
    let selectedListedItem = lists.filter((list) => (
        list.checkbox
    )).length
    let completionPercentage = Math.round((selectedListedItem / totalListedItem) * 100)

    return (
        <div className='flex flex-col justify-center items-center bg-footerColor h-[100px] fixed bottom-0 left-0 w-full z-10'>
            {lists.length > 0 ?
                (<>
                    <div className='font-bold text-[14px] text-center text-white'>Number of item : {totalListedItem}</div>
                    <div className='font-bold text-[14px] text-center text-white'>Packing progress: {completionPercentage}% complete!</div>
                    <button className='bg-deleteColor font-bold text-[12px] rounded-[6px] w-[55px] h-[30px]' onClick={clearList}>clear list</button>
                </>)
                : (<div>
                    <div className='font-bold text-[12px] text-center text-white'>You have nothing on the list</div>
                    <div className='font-bold text-[12px] text-center text-white'>Add an item😊</div>
                </div>)}
        </div>
    )
}

Footer.propTypes = {
    lists: PropTypes.array.isRequired,
    clearList: PropTypes.func.isRequired,
}

export default Footer

