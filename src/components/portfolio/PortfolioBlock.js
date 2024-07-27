import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, source, title, description, tools} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
               <p style={{textAlign: 'center', margin: '1rem 0'}}>{description}</p>
         </Box>
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1rem'} py={'2rem'} marginTop={'0'}>
               <p style={{textAlign: 'center', margin: '1rem 0'}}>{tools}</p>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;