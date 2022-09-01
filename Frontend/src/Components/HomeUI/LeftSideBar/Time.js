import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}
const marks = [
    {
      value: 10,
      label: '10',
    },
    {
      value: 11,
      label: '11',
    },
    {
      value: 12,
      label: '12',
    },
    {
      value: 13,
      label: '1',
    },
    {
      value: 14,
      label: '2',
    },
    {
      value: 15,
      label: '3',
    },
    {
      value: 16,
      label: '4',
    },
    {
      value: 17,
      label: '5',
    },
    {
      value: 18,
      label: '6',
    },
    {
      value: 19,
      label: '7',
    },
    {
      value: 20,
      label: '8',
    },
    {
      value: 21,
      label: '9',
    },
    {
      value: 22,
      label: '10',
    },
  ];

export default function Time() {
    const [value, setValue] = React.useState([12, 18]);
    const [fromTime, setfromTime] = React.useState(12);
    const [toTime, settoTime] = React.useState(18);

    const handleChange = (event, newValue) => {
        console.log(event.target.value[0])
        setValue(newValue);
        // setfromTime(value[0])
        settoTime(value[1])
        getTimeValue()  
    };
    const getTimeValue = ()=>{
        if(value[0] === 10){
            setfromTime("10:00 Am")
        }else if(value[0] === 10.5){
            setfromTime("10:30 Am")
        }else if(value[0] === 11){
            setfromTime("11:00 Am")
        }else if(value[0] === 11.5){
            setfromTime("11:30 Am")
        }else if(value[0] === 12){
            setfromTime("12:00 Pm")
        }else if(value[0] === 12.5){
            setfromTime("12:30 Pm")
        }else if(value[0] === 13){
            setfromTime("01:00 Pm")
        }else if(value[0] === 13.5){
            setfromTime("01:30 Pm")
        }else if(value[0] === 14){
            setfromTime("02:00 Pm")
        }else if(value[0] === 14.5){
            setfromTime("02:30 Pm")
        }else if(value[0] === 15){
            setfromTime("03:00 Pm")
        }else if(value[0] === 15.5){
            setfromTime("03:30 Pm")
        }else if(value[0] === 16){
            setfromTime("04:00 Pm")
        }else if(value[0] === 16.5){
            setfromTime("04:30 Pm")
        }else if(value[0] === 17){
            setfromTime("05:00 Pm")
        }else if(value[0] === 17.5){
            setfromTime("05:30 Pm")
        }else if(value[0] === 18){
            setfromTime("06:00 Pm")
        }else if(value[0] === 18.5){
            setfromTime("06:30 Pm")
        }else if(value[0] === 19){
            setfromTime("07:00 Pm")
        }
    }
    

    return (
        <>
            <div className='justify-center items-center pb-1'>
                <label className="block px-3  py-3  text-sm font-bold text-gray-700 dark:text-gray-300">Select Time</label>
                <div className="flex gap-2  justify-center items-center px-3 ">

                    <div>
                        <input type="text" value={fromTime} id="first_name" className="bg-white border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From" required />
                    </div>
                    <div>

                        <input type="text" value={toTime} id="last_name" className="bg-White border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required />
                    </div>
                </div>
            </div>


            <Box className='flex justify-center items-center mx-5'>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    step={0.5}
                    getAriaValueText={valuetext}
                    max={22}
                    min={10}
                    marks={marks}
                    // valueLabelDisplay="auto"
                    // scale={Time}
                />
            </Box>
        </>
    );
}
