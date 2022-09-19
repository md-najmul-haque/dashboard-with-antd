import React from 'react';
import ScaleLoader from "react-spinners/ScaleLoader";

const override = {
    display: "block",
    margin: "0 auto",
};


const Loading = () => {
    return (
        <div>
            <ScaleLoader cssOverride={override} color="#1890ff" size={150} />
        </div>
    );
};

export default Loading;