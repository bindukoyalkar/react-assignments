import React from 'react'
import logo from './atoms/images/logo.png';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Image from './atoms/Image';
import User from './atoms/User';
import Icons from './atoms/Icons'
import SwitchTab from './molecules/SwitchTab';
import Cards from './molecules/Cards';
import one from './atoms/images/1.png';
import two from './atoms/images/2.png';
import three from './atoms/images/3.png';
import four from './atoms/images/4.png';
import five from './atoms/images/5.png';
import six from './atoms/images/6.png';
import seven from './atoms/images/7.png';
import eight from './atoms/images/8.png';
import nine from './atoms/images/9.png';

import { Container, Grid } from '@mui/material';
function App(){
  return (
    <>
    <Icons><SearchOutlinedIcon/></Icons>
    <Image path={logo}/>
    <User username='B'></User>
<SwitchTab />
<Container  style={{paddingLeft:"7%",paddingRight:"7%"}}>
      <Grid container rowSpacing={2} spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Cards  src={one} name="Bring Your Human to Work" author="Erica Keswin" duration="13" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={two} name="Employee to Entrepreneur" author="Steve Glaveski" duration="15" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={three} name="Doesn’t Hurt to Ask" author="Trey Gowdy" duration="13" noOfReads="1.9"/>
        </Grid> 

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={four} name="The Fate of Food" author="Amanda Little" duration="12" noOfReads="16"/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={five} name="Lives of the Stoics" author="Ryan Holiday, Stephen Hansel" duration="13" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={six} name="Loving Your Business" author="Debbie King" duration="13" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={seven} name="The Lonely Century" author="Noreena Hertz" duration="15" />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={eight} name="Eat Better, Feel Better" author="Giada De Laurentiis" duration="13" noOfReads="1.9"/>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
        <Cards  src={nine} name="Dropshipping" author="James Moore" duration="12" />
        </Grid>     
        </Grid>
        </Container>
</>
  );
}
export default App;