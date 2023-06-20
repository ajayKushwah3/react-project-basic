import React from 'react'
import classes from '../../assets/css/b.module.css';
import AHref from '../UI/AHref';
import starIcone from '../../assets/img/star.png'
import rHeart from '../../assets/img/rHeart.png'
import comment from '../../assets/img/comment.png'
import bheart from '../../assets/img/bheart.png'
import sMenu from '../../assets/img/sMenu.png'

const BlogsItems = (props) => {
  
  return (
    <>
        <div className={classes['blogBCard']}>
            <div className={classes['blogboxCard']}>
                <AHref>
                <div className={classes['blogBCItme']}>
                    <div className={classes['bthumbImg']}>
                        <img src={require(`../../assets/img/blog-slide.png`)} alt="" />
                    </div>
                    <div className={classes['blogContent']}>
                        <h5>{props.title}</h5>
                        <div className={classes['alltext']}>
                            <h6>{props.name}</h6>
                            <p className={classes['date-time']}><span>{props.date}</span><span>{props.time}</span></p>
                            <ul>
                                <li><span> <img src={starIcone} alt="" /></span></li>
                                <li><span><img src={rHeart} alt="" /></span><span>{props.like}</span></li>
                                <li><span><img src={comment} alt="" /></span><span>{props.comment}</span></li>
                            </ul>
                        </div>
                        <div className={classes['hartmenu']}>
                            <ul>
                                <li><span><img src={bheart} alt="" /></span></li>
                                <li><span><img src={sMenu} alt="" /></span></li>
                            </ul>
                        </div>
                    </div>
            </div>
                </AHref>
            </div>
        </div>
    </>
  )
}

export default BlogsItems;
