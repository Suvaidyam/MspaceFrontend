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
    const [fromTime, setfromTime] = React.useState("10:00 am");
    const [toTime, settoTime] = React.useState("06:00 pm");

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
        const showTime =()=>{
            if(fromHour > "11"){
                let displayfrom = fromHour - 12 +":" + fromMin;
                setfromTime(displayfrom  +" pm")
            }else{
                setfromTime(fromHour +":" + fromMin +" am")
            }
            if(fromHour ==="12"){
                setfromTime(fromHour +":" + fromMin +" pm")
            }
        // /////////////////////////////////////////////////////////////////////////
            if(toHour > "11"){
                let displayto = toHour - 12 +":" + toMin;
                settoTime(displayto+" pm")
            }else{
                settoTime(toHour +":" + toMin +" am")
            }
            if(toHour ==="12"){
                settoTime(toHour +":" + toMin +" pm")
            }
        }
        showTime()



    };

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
