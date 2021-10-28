import React, {useState} from 'react';
import contact from '../img/contact.jpg'
import'../App.css'
import {db} from '../Firebase';
const Form=()=>{
    const [name, setName]=useState("");
    const[email,setEmail]=useState("");
    const[comments,setComments]=useState("");
     
const[loader, setLoader]=useState(false);

    const handleSubmit=(e)=>{
        e.preventDefault();
        db.collection('contacts').add({
            name:name,
            email:email,
            comments:comments,
        })
        .then(()=>{
            alert('Message has been submitted');
                setLoader(false);
        })
        .catch((error)=>{
            alert(error.comments);
            setLoader(false);
        })
        setName('');
        setEmail('');
        setComments('');

    }  
    
    
    
    return(
    <div className="back-image">
      
    <form className='form' onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label ><b>USERNAME</b></label>
        <input type="text" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)}/>
        <label ><b>EMAIL</b></label>
        <input placeholder="email id" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label ><b>COMMENTS</b></label>
        <textarea placeholder="write your Message" value={comments} onChange={(e)=>setComments(e.target.value)}></textarea> 
        <input type="submit" value="submit"/>
        <label>Subjects</label>
        <select id="sub">
            <option>React</option>
            <option>Vue</option>
            <option>Angular</option>
        </select>

    </form>
    </div>)
}
export default Form