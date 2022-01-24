import React from 'react';
import { Grid ,Container} from '@mui/material'
import CLOSEDBOOK from './CLOSEDBOOK';
import MyCard from '../molecules/MyCard';
interface Props{
  changeTab(val:number): any
}

interface BookType{
  id:number,
  src:string,
  name:string,
  author:string,
  duration:string,
  noOfReads?:string,
}

function FinishedBooks(props:Props){
    return (
      <Container style={{paddingLeft:"7%",paddingRight:"7%"}}>
      <Grid container rowSpacing={2} spacing={4}>
      { CLOSEDBOOK.map((book:BookType) =><Grid item xs={12} sm={6} md={4}> 
      <MyCard  changeTab={props.changeTab} 
      progressBar='full' button='Read again'
      id={book.id} key={book.id} src={book.src} name={book.name}
      author={book.author} duration={book.duration} noOfReads={book.noOfReads}/>
       </Grid> )} 
      </Grid>
      </Container>
    );
}
export default FinishedBooks;