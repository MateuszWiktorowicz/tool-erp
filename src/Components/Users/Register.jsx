import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { schema } from './schema';

import './users.css';


function Register() {
    const { 
        register, 
        handleSubmit,
        formState: {errors},
        setError
    } = useForm({ 
            mode: "all",
            resolver: zodResolver(schema) 
        });

    const onSubmit = async (data) => {
        try {
            const usersResponse = await fetch('http://localhost:3333/users');
            const users = await usersResponse.json();
            const emailExists = users.some(user => user.email === data.email);

            if (emailExists) {
                
                setError("email", {
                    type: "manual",
                    message: "Email is already used"
                });
                return; 
            }
        const newUser = {
            email: data.email,
            password: data.password
        };

        
            
            const response = await fetch('http://localhost:3333/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });
            if (response.ok) {
                const savedUser = await response.json();
                console.log('User registered successfully:', savedUser);
            } else {
                console.error('Failed to register user:', response.statusText);
            }
        } catch (error) {
            console.error('Error while saving user:', error);
        }
    }
  
        
        
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