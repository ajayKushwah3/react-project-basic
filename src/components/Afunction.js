import React, { useEffect, useState } from 'react';
import Card from './Card';
import Filter from './Filter';
import classes from '../assets/css/slp.module.css'

const Afunction = () => {
     
    const [isSpacexdatas, setIsSpacexdatas] = useState([]);
    const [isSpacexdata, setIsSpacexdata] = useState([]);
    const [isSYear, setisSYear] = useState(`&launch_year=`);
    const [isSLaunch, setisSLaunch] = useState(`&launch_success=`);
    const [isSLand, setisSLand] = useState(`&land_success=`);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();


    useEffect(() => {
        const fetchMeals = async () => {
          const response = await fetch(
            'https://api.spacexdata.com/v3/launches?limit=100'
          );
            if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            
            const responseData = await response.json();
            
            const loadedMeals = [];
           
          console.log(responseData);
            
            for (const key in responseData) {
              loadedMeals.push({
                flight_number: key,
                flightnumber:responseData[key].flight_number,
                mission_name: responseData[key].mission_name,
                mission_id: responseData[key].mission_id,
                launch_year: responseData[key].launch_year,
                mission_patch_small: responseData[key].links.mission_patch_small,
                launch_success: responseData[key].launch_success,
                land_success: responseData[key].rocket.first_stage.cores[0].land_success,
                
            });
          }
          setIsSpacexdata(loadedMeals);
          setIsLoading(false);
        };
        const filterMeals = async () => {
          const responsee = await fetch(
            'https://api.spacexdata.com/v3/launches'
          );
          if (!responsee.ok) {
              throw new Error('Something went wrong!');
            }
            
            const responsefData = await responsee.json();
            
            const loadedMealss = [];
    
          for (const key in responsefData) {
            loadedMealss.push({
            flight_number: key,
            launchyear: responsefData[key].launch_year,
            launchsuccesss: responsefData[key].launch_success,
            landsuccesss: responsefData[key].rocket.first_stage.cores[0].land_success,
            });
          }
          setIsSpacexdatas(loadedMealss);
          setIsLoading(false);
        };
    
        fetchMeals().catch((error) => {
          setIsLoading(false);
          setHttpError(error.message);
        });
    
        filterMeals().catch((error) => {
          setIsLoading(false);
          setHttpError(error.message);
        });
      }, []);
   

        const filteryear = async (Filteryear) => {
          const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${Filteryear}${isSLaunch}${isSLand}`);
          if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            
            const responseDatafilter = await response.json();
            
            const updatefilter = [];
           
            
            for (const key in responseDatafilter) {
              updatefilter.push({
                flight_number: key,
                flightnumber:responseDatafilter[key].flight_number,
                mission_name: responseDatafilter[key].mission_name,
                mission_id: responseDatafilter[key].mission_id,
                launch_year: responseDatafilter[key].launch_year,
                mission_patch_small: responseDatafilter[key].links.mission_patch_small,
                launch_success: responseDatafilter[key].launch_success,
                land_success: responseDatafilter[key].rocket.first_stage.cores[0].land_success,
                
            });
          }
          setisSYear(`&launch_year=${Filteryear}`);
          setIsSpacexdata(updatefilter);
          setIsLoading(false);
        }
        const filterLaunch = async (Filterlaunch) => {

          const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100${isSYear}&launch_success=${Filterlaunch}${isSLand}`);
          if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            
            const responseDatafilter = await response.json();
            
            const updatefilter = [];
           
            
            for (const key in responseDatafilter) {
              updatefilter.push({
                flight_number: key,
                flightnumber:responseDatafilter[key].flight_number,
                mission_name: responseDatafilter[key].mission_name,
                mission_id: responseDatafilter[key].mission_id,
                launch_year: responseDatafilter[key].launch_year,
                mission_patch_small: responseDatafilter[key].links.mission_patch_small,
                launch_success: responseDatafilter[key].launch_success,
                land_success: responseDatafilter[key].rocket.first_stage.cores[0].land_success,
                
            });
          }
          setisSLaunch(`&launch_success=${Filterlaunch}`);
          setIsSpacexdata(updatefilter);
          setIsLoading(false);
        }
        const filterLanding = async (FilterLand) => {

          const response = await fetch(`https://api.spacexdata.com/v3/launches?limit=100${isSYear}${isSLaunch}&land_success=${FilterLand}`);
          if (!response.ok) {
              throw new Error('Something went wrong!');
            }
            
            const responseDatafilter = await response.json();
            
            const updatefilter = [];
           
            
            for (const key in responseDatafilter) {
              updatefilter.push({
                flight_number: key,
                flightnumber:responseDatafilter[key].flight_number,
                mission_name: responseDatafilter[key].mission_name,
                mission_id: responseDatafilter[key].mission_id,
                launch_year: responseDatafilter[key].launch_year,
                mission_patch_small: responseDatafilter[key].links.mission_patch_small,
                launch_success: responseDatafilter[key].launch_success,
                land_success: responseDatafilter[key].rocket.first_stage.cores[0].land_success,
                
            });
          }
          setisSLand(`&land_success=${FilterLand}`);
          setIsSpacexdata(updatefilter);
          setIsLoading(false);
        }
      
        

      if (isLoading) {
        return (
          <div className={classes.loadingb} >
            <p>Loading...</p>
          </div>
        );
      }
    
      if (httpError) {
        return (
          <div className={classes.errorhttp} >
            <p>{httpError}</p>
          </div>
        );
      }

      const SpacexdataList = isSpacexdata.map((meal) => (
            
            <Card  key={meal.flight_number} 
                flightnumber={meal.flightnumber}
                imgs={meal.mission_patch_small}
                mname={meal.mission_name}
                missionid={meal.mission_id}
                launchyear={meal.launch_year}
                launchsuccess={meal.launch_success}
                landSuccess={meal.land_success}
                
             />
             
        ));

        const SpacexdataFilter = [...new Set (isSpacexdatas.map((fyears) =>  fyears.launchyear ))];
        const SpacexdataFilterb = ['true', 'false'];
        const SpacexdataLandingFilter = ['true', 'false'];
  return (
    <div className={classes.innerContainer}>
        <h2>SpaceX Launch Programs</h2>
        <div className={classes.mrow}>
          <div className={classes.FilterCard}>
            <div className={`${classes.FBox} ${classes.fcbox}`}>
                <h4>Filter</h4>
                <Filter   haddingName={'Launch  Year'} fHendler={ filteryear } name={'years'} SpacexdataFilter={SpacexdataFilter} />
                <Filter   haddingName={'Successful Launch'}  fHendler={ filterLaunch } name={'sLaunch'}  SpacexdataFilter={SpacexdataFilterb} />
                <Filter   haddingName={'Successful Landing'}  fHendler={ filterLanding } name={'sLand'}   SpacexdataFilter={SpacexdataLandingFilter} />
                
            </div>
          </div>
          <div className={classes.CardBody}>
            <div className={classes.mrow}>
                {SpacexdataList}
            </div>
          </div>
        </div>
        <div className={classes.devlop}><b>Developed By: </b> <span>Ajay Kushwah</span></div>

      </div>
  )
}

export default Afunction
