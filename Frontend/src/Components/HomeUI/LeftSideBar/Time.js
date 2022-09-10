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

export default function Time(props) {
    const [value, setValue] = React.useState([10, 18]);
    const [fromTime, setfromTime] = React.useState("10:00 Am");
    const [toTime, settoTime] = React.useState("06:00 Pm");

    const handleChange = (event, newValue) => {
        setValue(newValue);        
        let fromHour = newValue[0].toString().slice(0, 2)
        let toHour = newValue[1].toString().slice(0, 2)
     
        let fromMin = newValue[0].toString().slice(2, 4).replace(".5", "30")
        if(fromMin===""){
            fromMin="00"
        }
        let toMin = newValue[1].toString().slice(2, 4).replace(".5", "30")
        if(toMin===""){
            toMin="00"
        }
        let firstTime = fromHour +":"+ fromMin +":00";
        let lastTime = toHour +":" + toMin +":00";

        props.setfrombookingTime(firstTime)
        props.settobookingTime(lastTime)
        setfromTime(firstTime+" am")
        settoTime(lastTime+" pm")


    };
    
    // const getFromTimeValue = () => {
    //     if (value[0] === 10) {
    //         setfromTime("10:00 Am")
    //     } else if (value[0] === 10.5) {
    //         setfromTime("10:30 Am")
    //     } else if (value[0] === 11) {
    //         setfromTime("11:00 Am")
    //     } else if (value[0] === 11.5) {
    //         setfromTime("11:30 Am")
    //     } else if (value[0] === 12) {
    //         setfromTime("12:00 Pm")
    //     } else if (value[0] === 12.5) {
    //         setfromTime("12:30 Pm")
    //     } else if (value[0] === 13) {
    //         setfromTime("01:00 Pm")
    //     } else if (value[0] === 13.5) {
    //         setfromTime("01:30 Pm")
    //     } else if (value[0] === 14) {
    //         setfromTime("02:00 Pm")
    //     } else if (value[0] === 14.5) {
    //         setfromTime("02:30 Pm")
    //     } else if (value[0] === 15) {
    //         setfromTime("03:00 Pm")
    //     } else if (value[0] === 15.5) {
    //         setfromTime("03:30 Pm")
    //     } else if (value[0] === 16) {
    //         setfromTime("04:00 Pm")
    //     } else if (value[0] === 16.5) {
    //         setfromTime("04:30 Pm")
    //     } else if (value[0] === 17) {
    //         setfromTime("05:00 Pm")
    //     } else if (value[0] === 17.5) {
    //         setfromTime("05:30 Pm")
    //     } else if (value[0] === 18) {
    //         setfromTime("06:00 Pm")
    //     } else if (value[0] === 18.5) {
    //         setfromTime("06:30 Pm")
    //     } else if (value[0] === 19) {
    //         setfromTime("07:00 Pm")
    //     } else if (value[0] === 19.5) {
    //         setfromTime("07:30 Pm")
    //     } else if (value[0] === 20) {
    //         setfromTime("08:00 Pm")
    //     } else if (value[0] === 20.5) {
    //         setfromTime("08:30 Pm")
    //     } else if (value[0] === 21) {
    //         setfromTime("09:00 Pm")
    //     } else if (value[0] === 21.5) {
    //         setfromTime("09:30 Pm")
    //     } else if (value[0] === 22) {
    //         setfromTime("10:00 Pm")
    //     } else {
    //         setfromTime(null)
    //     }
    // }
    // const getToTimeValue = () => {
    //     if (value[1] === 10) {
    //         settoTime("10:00 Am")
    //     } else if (value[1] === 10.5) {
    //         settoTime("10:30 Am")
    //     } else if (value[1] === 11) {
    //         settoTime("11:00 Am")
    //     } else if (value[1] === 11.5) {
    //         settoTime("11:30 Am")
    //     } else if (value[1] === 12) {
    //         settoTime("12:00 Pm")
    //     } else if (value[1] === 12.5) {
    //         settoTime("12:30 Pm")
    //     } else if (value[1] === 13) {
    //         settoTime("01:00 Pm")
    //     } else if (value[1] === 13.5) {
    //         settoTime("01:30 Pm")
    //     } else if (value[1] === 14) {
    //         settoTime("02:00 Pm")
    //     } else if (value[1] === 14.5) {
    //         settoTime("02:30 Pm")
    //     } else if (value[1] === 15) {
    //         settoTime("03:00 Pm")
    //     } else if (value[1] === 15.5) {
    //         settoTime("03:30 Pm")
    //     } else if (value[1] === 16) {
    //         settoTime("04:00 Pm")
    //     } else if (value[1] === 16.5) {
    //         settoTime("04:30 Pm")
    //     } else if (value[1] === 17) {
    //         settoTime("05:00 Pm")
    //     } else if (value[1] === 17.5) {
    //         settoTime("05:30 Pm")
    //     } else if (value[1] === 18) {
    //         settoTime("06:00 Pm")
    //     } else if (value[1] === 18.5) {
    //         settoTime("06:30 Pm")
    //     } else if (value[1] === 19) {
    //         settoTime("07:00 Pm")
    //     } else if (value[1] === 19.5) {
    //         settoTime("07:30 Pm")
    //     } else if (value[1] === 20) {
    //         settoTime("08:00 Pm")
    //     } else if (value[1] === 20.5) {
    //         settoTime("08:30 Pm")
    //     } else if (value[1] === 21) {
    //         settoTime("09:00 Pm")
    //     } else if (value[1] === 21.5) {
    //         settoTime("09:30 Pm")
    //     } else if (value[1] === 22) {
    //         settoTime("10:00 Pm")
    //     } else {
    //         settoTime(null)
    //     }
    // }


    return (
        <>
            <div className='justify-center items-center '>
                <label className="block px-3  py-3  text-sm font-bold text-gray-700 dark:text-gray-300">Select Time</label>
                <div className="flex gap-3  justify-center items-center  px-3 ">

                    <div>
                        <input type="text" value={fromTime} readonly id="first_name" className="bg-white border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From" required />
                    </div>
                    <div>

                        <input type="text" value={toTime} readonly id="last_name" className="bg-White border shadow border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required />
                    </div>
                </div>
            </div>


            <Box className='flex justify-center items-center mx-5 py-1'>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    step={0.5}
                    getAriaValueText={valuetext}
                    max={22}
                    min={10}
                    marks={marks}
                />
            </Box>
        </>
    );
}
