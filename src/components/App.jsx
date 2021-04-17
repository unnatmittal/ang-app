import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Card from "./Card";
import contacts from "../contacts";
import notes from "../notes";

function createCard(contact){
    return <Card 
        key={contact.id}
        name={contact.name}
        img={contact.imgURL}
        tel={contact.phone}
        email={contact.email}

    />;
}



function App(){
    return (
        <div>
            <Header />
            {notes.map(noteItem => <Note 
                    key={noteItem.id}
                    title={noteItem.title}
                    content={noteItem.content}
                />
            )}
            <Footer />
            
            {/* <h1 className="heading">My Contacts</h1>
            
            {contacts.map(createCard)}       */}
            {/* MAP */}
            
            {/* <Card 
                name={contacts[0].name}
                img={contacts[0].imgURL}
                tel={contacts[0].phone}
                email={contacts[0].email}
            /> 
            <Card 
                name={contacts[1].name}
                img={contacts[1].imgURL}
                tel={contacts[1].phone}
                email={contacts[1].email}
            /> 
            <Card 
                name={contacts[2].name}
                img={contacts[2].imgURL}
                tel={contacts[2].phone}
                email={contacts[2].email}
            />  */}
 

        </div>
    )

}

export default App;


// var numbers=[3, 56, 2, 48, 5];
// const newNum=numbers.map(function(x){
//     return x*2;
// })
// console.log(newNum);

// const newNum2=numbers.filter(function(x){
//     return x>10;
// })
// console.log(newNum2);



