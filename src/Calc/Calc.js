import React, { useState, useRef } from "react";


export default function Calc() {

    const [resoult, setResoult] = useState("resoult");
    const inputNum1 = useRef(null);
    const inputNum2 = useRef(null);
    const inputOperation = useRef();


    function res() {

        const calcFn = {
            sum: function (a, b) { return a + b },
            sub: function (a, b) { return a - b },
            mult: function (a, b) { return a * b },
            div: function (a, b) { return a / b },
            mod: function (a, b) { return a % b },
        }

        const num1 = Number(inputNum1.current.value);
        const num2 = Number(inputNum2.current.value);
        const operation = inputOperation.current.value;

        if (num1 == 0 && num2 == 0) {
            const res = "fill both empty input field";
            return setResoult(res);
        }
        const res = calcFn[operation](num1, num2);

        setResoult(res);

        inputNum1.current.value = null;
        inputNum2.current.value = null;
    }

    return (
        <>
            <input ref={inputNum1} type="number" />

            <select className="operation" ref={inputOperation}>
                <option value="sum">+</option>
                <option value="sub">-</option>
                <option value="mult">*</option>
                <option value="div">/</option>
                <option value="mod">%</option>
            </select>

            <input ref={inputNum2} type="number" />

            <button onClick={res}>  resoult </button>

            <div>  {resoult} </div>

        </>

    );

}
