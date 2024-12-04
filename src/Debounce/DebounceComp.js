import React,{useEffect, useState} from "react";

const DebounceExample = () => {
    const [searchTerm, setSearchTerm] = useState(""); // Input value
    const [debouncedValue, setDebouncedValue] = useState(""); // Debounced value

    //debounce logic
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(searchTerm);
        },500)

        return ()=>{
            clearTimeout(handler);

        };

    },[searchTerm])


    const handleChange = (event) => {
        // console.log('event.target.value...', event.target.value);
        setSearchTerm(event.target.value);
    };


    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '4vw' }}>
            <input type="text" name="text" placeholder="enter the text" onChange={handleChange} style={{ width: '30%', height: '4vh', borderRadius: '3vw', padding: '1vw' }} />
            <p>
                <strong>Search Term:</strong> {searchTerm}
            </p>
            <p>
                <strong>Debounced Value:</strong> {debouncedValue}
            </p>
        </div>
    );
};

export default DebounceExample;