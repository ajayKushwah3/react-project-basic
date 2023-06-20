import React, { Component } from 'react'
import classes from '../../assets/css/b.module.css';
import BlogsItem from './BlogsItems'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
export default class Blogs extends Component {
    render() {
      const blogsItem = [
          {
              id: '1',
              title:'how does customer service impact sales directly - A thread',
              name: 'Anisha seghal',
              date:'Aug,01,2020',
              time:'5 mins read',
              rating:'4.5',
              like:'12m',
              comment:'2.54k',
          },
          {
            id: '2',
            title:'Lorem ipsum dolor sit line 1 line 2',
            name: 'Beauty analyst name',
            date:'Aug,02,2020',
            time:'10 mins read',
            rating:'4.2',
            like:'10m',
            comment:'2.04k',
        },
         
          {
            id: '3',
            title:'Lorem ipsum dolor sit line 2 line 3',
            name: 'Beauty analyst ',
            date:'Aug,03,2020',
            time:'8 mins read',
            rating:'4.2',
            like:'8m',
            comment:'2.4k',
        },
        {
            id: '4',
            title:'how does customer service impact sales directly - A thread',
            name: 'Anisha seghal',
            date:'Aug,01,2020',
            time:'5 mins read',
            rating:'4.5',
            like:'12m',
            comment:'2.54k',
        },
        {
            id: '5',
            title:'Lorem ipsum dolor sit line 1 line 2',
            name: 'Beauty analyst name',
            date:'Aug,02,2020',
            time:'10 mins read',
            rating:'4.2',
            like:'10m',
            comment:'2.04k',
        },
          
      ];
      const blogsCardIlist = blogsItem.map((meal) => (
          <BlogsItem
            id={meal.id}
            key={meal.id}
            title={meal.title}
            name={meal.name}
            date={meal.date}
            time={meal.time}
            rating={meal.rating}
            like={meal.like}
            comment={meal.comment}
          />
        ));
      const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      arrows: false,
      leftPadding: '40px',
      slidesToShow: 1.2,
      slidesToScroll: 1
      };
      return (
        <>
        <div className={`${classes['blogBody']}`}>
            <h4 className={classes['blogName']}>
                <span>Beautician blogs</span>
                <span>
                    <select>
                        <option value="">Trending</option>
                        <option value="">Trending 1</option>
                        <option value="">Trending 2</option>
                        <option value="">Trending 3</option>
                        <option value="">Trending 4</option>
                        <option value="">Trending 5</option>
                        <option value="">Trending 6</option>
                    </select>
                </span>
            </h4>
            <p className={classes['blogtext']}> We’ve filtered the hottest blog topics for you to read , enjoy and improve your customer experience as a beauty analyst</p>
            <Slider {...settings}>
                {blogsCardIlist}
            </Slider>
        </div>
        </>
      )
  }
}

