import React from 'react'

const CounterHoc =(props)=>{
    return (
        <div>
            {props.component}
        </div>
    )
}
export default CounterHoc;
