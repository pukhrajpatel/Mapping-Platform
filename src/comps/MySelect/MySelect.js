import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './MySelect.css'

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

const years = []
for(let i=8; i<=24; i++ ){
  years.push({ label: 2000+i });
}
const eltyes = [{label: "LS"}, {label: "VS"}]

export default function MySelect(props) {
    var options = states;
    var label = props.tag;
    if(props.tag == 'AC'){
        options = acArray
    }
    else if(props.tag == "Year"){
      options = years
    }
    else if(props.tag == "ElType"){
      options = eltyes;
      label = "Election Type";
    }

  return (
    <div style={{paddingTop:'70px', marginRight:'20px'}}>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: 250}}
      size='small'
      renderInput={(params) => <TextField {...params} label={label} />}
      onChange={props.onchange}
    />
    </div>
  );
}
