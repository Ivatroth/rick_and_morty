import React from "react";
import style from "./Form.module.css"
import {validationUser, validationPass} from "./Validation";


const Form = ({login}) =>{
    
    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ usernameE: '', passwordE: '' });

       
     const handleChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setUserData({ ...userData, [property]: value }); 

        if (property === 'username') 
        validationUser({ ...userData, [property]: value }, setErrors, errors);
        else validationPass({ ...userData, [property]: value }, setErrors, errors);
    };


    const handleSubmit = (event) =>{ 
        event.preventDefault();
        login(userData); 
    }

    return(
            <form onSubmit={handleSubmit}>
                <div className={style.form}>
                    <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" name="username" value={userData.username} onChange={handleChange} />
                    <span>{errors.usernameE}</span>
                    </div>
                    
                    
                    <div>
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={userData.password} onChange={handleChange} />   
                    <span>{errors.passwordE}</span>    
                    </div>  
                           
                    <button type="submit" className={style.button}>Login</button>
                </div>
            </form>
        );
    }


export default Form;