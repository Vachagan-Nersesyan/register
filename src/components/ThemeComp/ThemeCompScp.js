import { useState } from 'react'
import './ThemeCompStl.css'


const ThemeComp = ({changeThemeFunc}) => {


    return (
        <div className='theme_content'>
            <input type='checkbox' onClick={changeThemeFunc} />
        </div>
    )
}


export default ThemeComp