import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const Protected = (props) => {
    const { Component } = props
    const Navigate = useNavigate();
    let login = sessionStorage.getItem('token');

    useEffect(() => {
        if (!login) {
            Navigate('/')
        }
    })
    return (
        <div>


            <Component />
        </div>
    )
}

export default Protected
