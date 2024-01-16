"use client";

import { useState } from "react";
import { Button, Tab, Tabs, Box } from "@mui/material";
import { AlarmClockCheck, AreaChart, ChevronRight } from "lucide-react";
import Image from "next/image";
import Post1 from "@/assets/post1.png";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const Post = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="post">
      <Image src={Post1} alt="post 1" />
      <Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Google" {...a11yProps(0)} />
        <Tab label="Trending" {...a11yProps(1)} />
        <Tab label="New" {...a11yProps(2)} />
      </Tabs>

      <CustomTabPanel value={activeTab} index={0}>
        <div className="tw-flex tw-flex-col tw-gap-y-2.5">
          <h3>Loudest à la Madison #1 Lintegral</h3>
          <p>We focus on ergonomics and meeting you where you work. Its only a keystroke away.</p>
          <div className="tw-flex tw-justify-between">
            <div>
              <AlarmClockCheck />
              <span>22 April 2021</span>
            </div>

            <div>
              <AreaChart />
              <span>10 comments</span>
            </div>
          </div>

          <Button endIcon={<ChevronRight />}>Learn More</Button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={1}>
        Trending Content
      </CustomTabPanel>
      <CustomTabPanel value={activeTab} index={2}>
        New Content
      </CustomTabPanel>
    </div>
  );
};

export default Post;
