import React from 'react';
import {Typography, Card, CardContent, CardActions } from '@mui/material'
import { makeStyles } from '@mui/styles';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Image from '../atoms/Image'
import LinearProgress from "@mui/material/LinearProgress";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyles = makeStyles(theme => ({
    wrapIconLeft: {
        verticalAlign: 'middle',
        display: 'inline-flex',
        textAlign: 'left',
        paddingTop:'5%'
     },
     wrapIconRight:{
        verticalAlign: 'middle',
        display: 'inline-flex',
        textAlign: 'left',
        paddingTop:'5%',
        paddingLeft:'15%'
     },
    bookName:{
        textAlign: 'left'
    },
    authorName:{
        textAlign: 'left',
        paddingTop:'5%'
    },
  })); 
interface Props{
    src:string,
    name:string,
    author:string,
    duration:string,
    noOfReads?:string,
}
function Cards(props :Props) {
    const classes=useStyles()
    const val=30
    return (
        <div>
    <Card  sx={{ maxWidth: 284 }}>
        <Image path={props.src} width='100%' />
   
        <CardContent>
            <Typography variant="subtitle2">
                {props.name}
            </Typography>

            <Typography className={classes.authorName} variant="body2">
                {props.author}
            </Typography>

            <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
                <Typography variant="body2" className={classes.wrapIconLeft} >
                    <AccessTimeIcon /> {props.duration}-minute read
                    </Typography>
                    {props.noOfReads &&  
                    <Typography variant="body2" className={classes.wrapIconRight} >  
                    <PersonOutlineOutlinedIcon /> {props.noOfReads}k reads </Typography>
                    }  
                    
            </div>
        </CardContent>
        <CardActions> <MoreHorizIcon style={{marginLeft:'88%'}}/></CardActions>
        <LinearProgress variant='determinate' value={val} color='info' style={{height: "10px"}}/>
    </Card>
        </div>
    );
}

export default Cards;