import React, { useState } from "react";

function App3(){
    
    // const [fName, setFName]=useState("");
    // const [lName, setLName]=useState("");


    // function updateFName(event){
    //     const firstName=event.target.value;
    //     setFName(firstName);
    // }

    // function updateLName(event){
    //     const lastName=event.target.value;
    //     setLName(lastName);
    // }

    const [fullName, setFullName] =useState({
        fName: "",
        lName: ""
    });

    function handleChange(event){
        // const newValue=event.target.value;
        // const inputName=event.target.name;

        const {value, name}=event.target;

        setFullName(preValue => {
            if(name === fullName.fName){
                return {
                    fName: value,
                    lName: preValue.lName
                };
            }
            else if (name === fullName.lName){
                return {
                    lName: value,
                    fName: preValue.fName
                };
            }
        });
    }

    return (
        <div>
            <h1>
                Hello {fullName.fName} {fullName.lName}
            </h1>
            <form>
                <input 
                    name="fName"
                    onChange={handleChange}
                    placeholder="First Name"
                    value={fullName.fName}
                />
                <input 
                    name="lName"
                    onChange={handleChange}
                    placeholder="Last Name"
                    value={fullName.lName}
                />
                <button>Submit</button>
            </form>
        </div>
    )


}


export default App3;