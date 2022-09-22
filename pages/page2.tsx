import type { NextPage } from 'next'
import { useState } from "react";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Layout } from '../components/Layout'
import QuestionPost from "../components/questionPost";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



const Page2: NextPage = () => {
  const [value, setValue] = useState('1');
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="">
      <Layout title='質問箱'>
        <div>
          <div>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 0, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                  <Tab label="Item One" value="1" />
                  <Tab label="Item Two" value="2" />
                </TabList>
              </Box>
              <TabPanel value="1">Item One</TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
          </Box>
            <QuestionPost />
          </div>
        </div >
      </Layout >
    </div >
  )
}

export default Page2;