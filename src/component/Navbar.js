import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']
    const navigate = useNavigate()

    const goToLogin=()=>{
        if(authenticate === true){
            setAuthenticate(false)
        }
        else{
            navigate('/login')
        }
    }

    return (
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} className='user-icon' />
                <div onClick={goToLogin}>{authenticate?'로그아웃':'로그인'}</div>
            </div>
            <div className='logo' onClick={()=>{navigate('/')}}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map(menu => <li>{menu}</li>)}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} className='search-icon' />
                    <input type='text' placeholder='제품검색' className='search-bar'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar