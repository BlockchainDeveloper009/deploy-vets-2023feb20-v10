import { Box, Chip, createStyles, Title } from '@mantine/core';
import { useEffect, useState } from "react";
import Cards from '../components/Cards';
import ChipsExample from '../components/ChipsExample';
import DiagnosticCompR1 from '../components/DiagnosticCompR1';
import DiagnosticCompR2 from '../components/DiagnosticCompR2';
import DiagnosticServicesSimpleGrid from '../components/DiagnosticServicesSimpleGrid';
import SurgeryServicesCompR1 from '../components/SurgeryServicesCompR1';
import SurgeryServicesCompR2 from '../components/SurgeryServicesCompR2';
function SurgeryServices() {
    const [value, setValue] = useState(['react']);
    // const { classes } = useStyles();
    useEffect(()=> {
        console.log(value)
    })


  return (
    <div className="App">
     <Box sx={{  color:'purple', fontSize: 18, lineHeight: 1.4, paddingTop: 100, paddingDown:200, paddingLeft:200, paddingRight:200,}}>
      <Title order={1}> Surgery Services</Title>
        
       
        <SurgeryServicesCompR1/>
        <SurgeryServicesCompR2/>
        </Box>
        
        
    </div>
  );
}

export default SurgeryServices;

