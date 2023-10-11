import { useState } from "react";

const Form = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    function handleChange(e){
        setFormData({
            name: e.target.value,
            email: formData.email,
            password: formData.password 
        });
    }

    function handleEmailChange(e){
        setFormData({
            name: formData.name,
            email: e.target.value,
            password: formData.password 
        });
    }

    function handlePasswordChange(e){
        setFormData({
            name: formData.name,
            email: formData.email,
            password: e.target.value
        });
    }

    function handleSubmit(e){
        e.preventDefault();
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>
            Name: <input type="text" name = "name" onChange ={handleChange} />
        </label>

        <br/>
        <br/>
        
        <label>
            Email : <input type="email" name = "email" onChange ={handleEmailChange} />
        </label>
        
        <br/>
        <br/>
        
        <label>
            Password : <input type="password" name = "password" onChange ={handlePasswordChange} />
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
    </form>

    <h3>Your Name is: {formData.name}</h3>

    <h3>Your Email is: {formData.email}</h3>
    
    <h3>Your Password is: {formData.password}</h3>
    </>
  )
}

export default Form