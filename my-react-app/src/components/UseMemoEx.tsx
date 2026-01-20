import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {
    const [num, setNum] = useState<number>(0);
    const [color, setColor] = useState<string>("#000000");
    const displayTable =useMemo( (): string[] => {
        let table: string[] = [];
        let j=0;
        while(j<2000000000)
            j++;
        for (let i = 1; i <= 10; i++)
            table.push(`${num} X ${i}=${num * i}`)
        return table;
    },[num]);
    const changeColor=()=>{
        const color="#"+Math.floor(Math.random()*6177722).toString(16);
        setColor(color);
    }
    return (
        <div>
            <h2>UseMemo Example</h2>
            <input type='number' value={num} onChange={(e) => setNum(parseInt(e.target.value))}></input>
            <button className='btn btn-primary btn-sm m-3' onClick={changeColor}>Change Color</button>
            <div style={{color:color}}>
                {displayTable.map(t =>( 
                    <h4 key={t}>{t}</h4>
                    ))}
                    </div>
        </div>
    )
}

export default UseMemoEx