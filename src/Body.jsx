import React from 'react'
import PropTypes from 'prop-types'
import { MdDeleteForever } from "react-icons/md";

function Body({ lists, updateCheckbox, deleteItem, saveTodo, editIt }) {
    return (
        <div className=' text-black fixed top-[172px] bottom-[96px] left-0 right-0 overflow-y-auto py-2 md:py-5 mx-[8px] md:mx-[64px] lg:mx-[120px]'>
            <ul className='grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-6'>{lists.map((list) => (
                <li key={list.id} className="flex items-center mb-2 gap-2 w-full">
                    <input
                        type="checkbox"
                        checked={list.checkbox}
                        onChange={() => updateCheckbox(list.id)}
                        style={{ width: '35px', height: '35px' }}
                        className=''
                    />

                    {list.isEditing ?
                        (<input
                            type='text'
                            defaultValue={list.item}
                            className="bg-textBg rounded-[8px] font-normal text-[20px] text-black py-1.5 ps-1 w-full text-wrap border-2 focus:border-blue-500 focus:outline-none"
                            onBlur={(e) => saveTodo(list.id, e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    saveTodo(list.id, e.target.value)
                                }
                            }}
                        />) : (
                            <span
                                onClick={() => editIt(list.id)}
                                style={(list.checkbox) ? { textDecoration: 'line-through' } : null} className='w-full bg-textBg px-2 py-2 rounded-[8px] break-words overflow-hidden'>
                                {list.item}
                            </span>
                        )}
                    <MdDeleteForever
                        onClick={() => deleteItem(list.id)}
                        style={{ width: '40px', height: '40px', color: '#EF0D49' }} />
                </li>
            ))}</ul>
        </div>
    )
}

Body.propTypes = {
    lists: PropTypes.array.isRequired,
    updateCheckbox: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    editIt: PropTypes.func.isRequired,
    saveTodo: PropTypes.func.isRequired,
}

export default Body