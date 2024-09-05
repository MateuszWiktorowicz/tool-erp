import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { schema } from './schema';

import './users.css';


function Register() {
    const { 
        register, 
        handleSubmit,
        formState: {errors}
    } = useForm({ 
            mode: "all",
            resolver: zodResolver(schema) 
        });

    const onSubmit = (data) => {
        console.log(data);  
    };
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Register form</h2>
            <input {...register("email")} 
            type="text" 
            placeholder="Email" 
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}
            <input {...register("password")} 
            type="password" 
            placeholder="Password" 
            />
            {errors.password && (<div style={{ color: 'red' }}>{errors.password.message}</div>)}
            <input {...register("confirmPassword")} 
            type="password" 
            placeholder="Confirm Password" 
            />
            {errors.confirmPassword && (<div style={{ color: 'red' }}>{errors.confirmPassword.message}</div>)}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Register;