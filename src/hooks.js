import React, { useState } from "react";


const UseFlip = (initialState) => {

const [flipState, usedFlipState] = useState(initialState)
const flip = () => {
    usedFlipState(oldFlip => !oldFlip)
}

    return [flipState, flip]
}



export default UseFlip