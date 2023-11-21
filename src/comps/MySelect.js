import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


const options = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
    'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan',
    'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands',
    'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry']

const states = [];
for(let i=0; i<options.length; i++){
    states.push({ label: options[i]});
}
const Candidates = [];
for (let i = 1; i < 18; i++) {
    Candidates.push({ label: "Candidate-" + i });
}

const acArray = [];
for (let i = 1; i <= 200; i++) {
    acArray.push({ label: i });
}

export default function MySelect(props) {
    var options = states;
    if(props.tag == 'AC'){
        options = acArray
    }
  return (
    <div style={{paddingTop:'70px'}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label={props.tag} />}
    />
    </div>
  );
}
