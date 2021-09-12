import { useMemo, useState } from "react";

function MemoEx() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(1);

  var memoFunction = useMemo(
    function memoCall() {
      console.log("in memo function");
      return data * 10;
    },
    [data]
  );


  var memoCount= function()
{
    console.log("in memo function");
    return data * 10;
}
console.log('render method ')
  return (
    <div>
      <p>count=={count}</p>
      <p>data=={data}</p>
      {memoFunction}
      <br/>
      <button
        onClick={() => {
          setCount(count+1);
        }}
      >
        Count update{" "}
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          setData(data * 10);
        }}
      >
        Data update{" "}
      </button>
    </div>
  );
}

export default MemoEx;
