import React,{useCallback,useState} from 'react'

type InputProps={
    value:string;
    onChange:(value:string)=>void;
}

const TextInput:React.FC<InputProps>=React.memo(({value,onChange})=>{
    console.log("TextInput Rendered");
    return(
        <input value={value} onChange={(e)=>onChange(e.target.value)}/>
    )
})


const UseCallback :React.FC= () => {
    const [text,setText]=useState<string>("");
    const handleChange=useCallback((value:string):void=>{
        setText(value)
    },[]);

    const handleSubmit = useCallback(
  (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Submitted:", text);
  },
  [text]
);


  return (
    <div>
         <form onSubmit={handleSubmit}>
        <TextInput value={text} onChange={handleChange}/>
         <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default UseCallback