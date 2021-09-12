import React from 'react'
import CounterHoc from './CounterHoc'
import Counter from './Counter'
const HocSample =(props)=>{
    return (
        <div>
            <CounterHoc
                component={<Counter/>}
            />
        </div>
    )
}
export default HocSample;
