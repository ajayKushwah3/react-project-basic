import React from 'react'
import TebItem from './TebItem'

const TebItems = (props) => {
    const TebitemObj = [
        {
            id:'1',
            name:'Scarlett Johnson',
            disc:'Senior beauty analyst',
            achievement:'95.58%',
            rank:'#1',
            image:'userImg1.png',
        },
        {
            id:'2',
            name:'Samantha Roberts',
            disc:'Senior beauty analyst',
            achievement:'92.88%',
            rank:'#2',
            image:'userImg2.png',
        },
        {
            id:'3',
            name:'Jamie Ann',
            disc:'Senior beauty analyst',
            achievement:'90.58%',
            rank:'#3',
            image:'userImg3.png',
        },
        {
            id:'4',
            name:'Angelin mathew',
            disc:'Senior beauty analyst',
            achievement:'87.58%',
            rank:'#4',
            image:'userImg4.png',
        },
        {
            id:'5',
            name:'Sarika Seghal',
            disc:'Senior beauty analyst',
            achievement:'87.58%',
            rank:'#5',
            image:'userImg5.png',
        },
        {
            id:'6',
            name:'Jesse jaimes',
            disc:'Senior beauty analyst',
            achievement:'82.58%',
            rank:'#6',
            image:'userImg6.png',
        },
        {
            id:'7',
            name:'Britney Spears',
            disc:'Senior beauty analyst',
            achievement:'88.58%',
            rank:'#7',
            image:'userImg7.png',
        },
       
    ];
    const tabitemdata = TebitemObj.map((items)=>(
        <TebItem
            id={items.id}
            key={items.id}
            name={items.name}
            disc={items.disc}
            achievement={items.achievement}
            rank={items.rank}
            image={items.image}
        />
    ));
  return (
    <>      
       <div>
            <ul>
                {tabitemdata}
            </ul>
       </div>
    </>
  )
}

export default TebItems
