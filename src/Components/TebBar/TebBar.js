import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import classes from '../../assets/css/b.module.css';
import TebItems from './TebItems';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes['tebBarBox']}>
        <Box className={classes['tebBBNav']}>
            <Tabs 
            value={value} 
            onChange={handleChange} 
            indicatorColor="secondary"
            >
            <Tab label="October" {...a11yProps(0)} />
            <Tab label="This week" {...a11yProps(1)} />
            <Tab label="Today" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0} className={classes['tebCBodyBox']}>
            <TebItems/>
        </TabPanel>
        <TabPanel value={value} index={1} className={classes['tebCBodyBox']}>
            <TebItems/>
        </TabPanel>
        <TabPanel value={value} index={2} className={classes['tebCBodyBox']}>
            <TebItems/>
        </TabPanel>
    </div>
  );
}