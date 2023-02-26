import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import './loadingIcon.css'

const Loading = () => {
    // const override = {
    //     // display: "block",
    //     // margin: "0 auto",
    //     color: "#36d7b7"
    // };

    return (
        <div className="loadingIcon">
            <MoonLoader color="#36d7b7" />
            {/* <MoonLoader
                loading
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> */}
        </div>

    )
}

export default Loading
