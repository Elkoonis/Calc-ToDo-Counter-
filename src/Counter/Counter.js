import React, { useState } from "react";


export default function Counter(count) {

    const [sum, setSum] = useState(1);


    return (
        <>
            <button onClick={() => setSum(sum + 1)}> + </button>
            <div>   {sum}   </div>
            <button onClick={() => setSum(sum - 1)}> - </button>
        </>

    );
}