import React from 'react'
import classes from '../assets/css/fw.module.css';
import AImg from '../assets/img/AImg.png'
const AboutContent = () => {
  return (
    <div className={classes['aCSection']}>
       <div className={classes['fw-container']}>
        <div className={classes['aCScard']}> 
                <div className={classes['aCScardconst']}>
                    <h1>About Team</h1>
                    <p>Working in the furniture field can be a great opportunity for those who have a passion for design, craftsmanship, and attention to detail. Here are a few points to consider as you continue to work in this field: Stay up-to-date with the latest materials, techniques, and design trends: This will help you to create high-quality, cutting-edge pieces that will appeal to your clients. Focus on craftsmanship: Attention to detail and quality craftsmanship are key in the furniture industry. Take pride in your work and make sure that every piece you create is of the highest quality. Communicate effectively with clients: Good communication skills are essential in the furniture industry. Make sure you understand your clients' needs and preferences, and communicate with them effectively throughout the design and production process. Continuously learn and improve: Always be open to learning new techniques and skills, and take advantage of any training or education opportunities that are available to you. Be creative: Furniture design is a creative field and it's important to have a good sense of design and aesthetics. Be safety conscious: Furniture making involves the use of various tools and machinery, so it's important to follow safety guidelines to avoid injuries and accidents. Overall, by focusing on these points, you can continue to improve your skills and grow in your</p>
                </div>
                <div className={classes['aCScardimg']}>
                    <img src={AImg} alt="" />
                </div>
            </div>
       </div>
    </div>
  )
}

export default AboutContent
