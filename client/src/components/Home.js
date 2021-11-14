import React from 'react'

import Tasks from './Tasks';

export default function Home(props) {
    const {showAlert}=props;

    return ( <div className = "container my-3" >


        <Tasks showAlert={showAlert}/ >

        </div>
    )
}


