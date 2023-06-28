import React from 'react'
import classes from '../Assets/Css/bl.module.css'
import IconSearch from '../Assets/Img/Svg/IconSearch'
import Button from './Button'
const SearchUi = () => {
  return (
      <form>
        <div className={classes['saerchBox']}>
          <input type='search' placeholder='Search' />
          <Button className={classes['SerchButton']}><IconSearch /></Button>
        </div>
     </form>
  )
}

export default SearchUi
