import React from 'react';
import { memo } from 'react';

const Child = ({count}) => {

    console.log("Count ---> ", count)
  return (
    <div> <p> Count : {count}</p> </div>
  )
}

export default memo(Child);