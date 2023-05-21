import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'


const Navbar = ({ authenticate, setAuthenticate, searchValue, setSearchValue, setSearchValueEnter, toggleButton, setToggleButton }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성']

    const navigate = useNavigate()

    const toggleOnOff = () => {
        if(toggleButton){
            setToggleButton(false)
        }
        else{
            setToggleButton(true)
        }
    }

    const logoClick =()=>{
        navigate('/')
        setSearchValue('')
        setToggleButton(false)
    }

    const goToLogin = () => {
        if (authenticate === true) {
            setAuthenticate(false)
            setToggleButton(false)
        }
        else {
            navigate('/login')
        }
    }
    const inputClick = (e)=>{
        e.target.value = ''
        e.stopPropagation()
    }

    const activeEnter = (e) => {
        if (e.key === "Enter") {
            let keyword = e.target.value
            if(keyword === ''){
                alert('검색어를 입력해주세요.')
                return
            }
            navigate(`/?q=${keyword}`)
            setSearchValueEnter(keyword)
            setToggleButton(false)
        }
    }

    return (
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} className='user-icon' />
                <div onClick={goToLogin}>{authenticate ? '로그아웃' : '로그인'}</div>
            </div>
            <div className='logo' onClick={logoClick}>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' alt='' />
            </div>
            <div className='mobile-menu-button' onClick={toggleOnOff}>
                <div className={`${toggleButton?'toggle':''}`}></div>
                <div className={`${toggleButton?'toggle':''}`}></div>
                <div className={`${toggleButton?'toggle':''}`}></div>
            </div>
            <div className={`${toggleButton?'menu-area toggle':'menu-area'}`}>                
                <ul className='menu-list'>
                    {menuList.map(menu => <li key={menu}>{menu}</li>)}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon icon={faSearch} className='search-icon' />
                    <input type='text' placeholder='제품검색' className='search-bar'
                        onChange={(e)=>setSearchValue(e.target.value)}
                        value={searchValue}
                        onClick={(e) => {inputClick(e)}}
                        onKeyDown={(e) => activeEnter(e)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar