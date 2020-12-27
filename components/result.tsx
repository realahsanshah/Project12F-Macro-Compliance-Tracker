import React, { useState, useEffect } from 'react';

export interface ResuleProps {
    results: any
}

const Resule: React.SFC<ResuleProps> = ({ results }) => {

    let [bg, setBg] = useState("");

    useEffect(() => {
        setBackground();
    });

    const setBackground = () => {
        let min = results.target - results.variant;
        let max = results.target + results.variant;

        if(results.total>=min&&results.total<=max){
            setBg("bg-green-500");
        }else if(results.total<min){
            setBg("bg-blue-500");
        }else{
            setBg("bg-red-500");
        }

    }


    return ( 
        <div className={`${bg} w-1/4 p-4 text-white`}>
            <h2 className="text-3xl font-bold">{results.total}
                <div className="text-3xl font-bold">
                    <div className="w-1/3">{results.target-results.variant}</div>
                    <div className="w-1/3">{results.target}</div>
                    <div className="w-1/3">{results.target+results.variant}</div>   
                </div>
                <h3 className="text-xl">{results.label}</h3>
            </h2>
            
        </div>

     );
}

export default Resule;