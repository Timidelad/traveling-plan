import React from 'react'
import headerBg from './Assets/page-header.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Header({ updateList }) {
    return (
        <div className='flex flex-col'>
            <Banner />
            <InputHead updateList={updateList} />
        </div>
    )
}

//component for the banner
function Banner() {
    return (
        <div className=' bg-cover bg-center flex justify-center items-center py-[25px] text-white  font-black text-[17px]' style={{ backgroundImage: `url(${headerBg})` }}>PLAN YOUR TRIP WITH EASE</div>
    )
}

// component for where user input what they will be taking along in their next trip
function InputHead({ updateList }) {

    const [formInput, setFormInput] = useState('');

    // function to add what the user type in the form input
    function clickAddBtn(e) {
        e.preventDefault()
        if (formInput.trim() === '') {
            alert('you need to type someting')
        } else {
            updateList(formInput)
            setFormInput('')
        }
    }

    //function to update the 'formInput' state
    function inputChange(e) {
        setFormInput(e.target.value)
    }
    return (
        <div className='py-[10px] px-[8px] flex flex-col bg-bannerColor gap-y-[10px]'>
            <div className='text-center text-[12px] font-bold text-white'>what do you need to pack?</div>
            <form onSubmit={(e) => clickAddBtn(e)} className='flex flex-row gap-x-[20px]'>
                <input
                    type="text"
                    placeholder='your item...'
                    className='w-full py-[10px] px-[5px] rounded-[6px] border-white border-2 bg-transparent text-white focus:border-blue-500 focus:outline-none'
                    value={formInput}
                    onChange={(e) => inputChange(e)}
                />
                <button type='submit' className='p-[10px] bg-white rounded-[6px] font-bold text-[12px] text-bannerColor'>Add</button>
            </form>
        </div>
    )
}


Header.propTypes = {
    updateList: PropTypes.func.isRequired,
}

export default Header