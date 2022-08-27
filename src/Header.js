import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import { useStateValue } from './StateProvider';

const Header = () => {
  const [ { basket }, dispatch] = useStateValue();

  return (
    <div className='header'>
       <Link to="/">
        <img src='0x0.jpg' className='header__logo' />
      </Link>
        <div className='header__search'>
             <input type="text" className='header__searchInput' />
             <SearchIcon className="header__searchIcon" />
        </div>

        <div className='header__nav'>
          <Link to='/login'>
            <div className='header__option'>
                <span className='header__optionLineOne' > Hello Guest</span>
                <span className='header__optionLineTwo' > Sign in</span>
            </div>
            </Link>
            <div className='header__option'>
            <span className='header__optionLineOne' > Returns </span>
            <span className='header__optionLineOne' > & Order</span>
            </div>
            <div className='header__option'>
            <span className='header__optionLineOne' > Your</span>
            <span className='header__optionLineOne' > Prime</span>
            </div>
            
            <Link to="/checkout">
            <div className='header__optionBasket'>
                <ShoppingBasketIcon />
                <span className='header_optionLineTwo header__basketCount'> {basket?.length} </span>
              </div>
              </Link>  
        </div>

    </div>
  )
}

export default Header