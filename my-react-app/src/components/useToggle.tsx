import React, { useState } from 'react'

export const useToggle = (): [boolean, () => void] => {
    const [toggleOn, setToggleOn] = useState<boolean>(false);
    const updateToggle=()=>{
        setToggleOn((prevToggleOn)=>!prevToggleOn)
    }
    return [toggleOn,updateToggle]
}

