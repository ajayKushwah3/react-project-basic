import React from 'react'
import DcountList from './DcountList'
const DcountItems = () => {
    const DcountItemsobj = [
        {
            id:'1',
            listImg:'dimg1.png',
            listValue:'17,185',
            listContent:'Contact numbers collected',
            listChartImg:'Line1.png',
        },
        {
            id:'2',
            listImg:'dimg1.png',
            listValue:'52.25%',
            listContent:'Contact numbers collected',
            listChartImg:'Line2.png',
        },
        {
            id:'3',
            listImg:'dimg2.png',
            listValue:'25,655',
            listContent:'Contact numbers collected',
            listChartImg:'Line3.png',
        }
    ];
    const DItemsObj = DcountItemsobj.map((meal) => (
        <DcountList
          id={meal.id}
          key={meal.id}
          listImg={meal.listImg}
          listValue={meal.listValue}
          listContent={meal.listContent}
          listChartImg={meal.listChartImg}
        />
      ));
  return (
    <>
      {DItemsObj}
    </>
  )
}

export default DcountItems
