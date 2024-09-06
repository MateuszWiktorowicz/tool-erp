import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { schema } from './loginSchema'; 
import PropTypes from 'prop-types'
import './users.css';

function Login( { setToken }) {
    const { 
        register, 
        handleSubmit,
        formState: { errors },
        setError
    } = useForm({ 
        mode: "all",
        resolver: zodResolver(schema)
    });

    const onSubmit = async (data) => {
        try {
            const usersResponse = await fetch('http://localhost:3333/users');
            
            if (!usersResponse.ok) {
                console.error('Failed to fetch users:', usersResponse.statusText);
                throw new Error('Failed to fetch users');
            }

            const users = await usersResponse.json();
            const user = users.find(user => user.email === data.email);

            if (!user) {
                setError("email", {
                    type: "manual",
                    message: "User doesn't exist!"
                });
                return;
            }

            if (user.password !== data.password) {
                setError("password", {
                    type: "manual",
                    message: "Incorrect password!"
                });
                return;
            }

            const tokenResponse = await fetch('http://localhost:8080/login');

            if (!tokenResponse.ok) {
                throw new Error('Failed to fetch token');
            }
    

            const tokenData = await tokenResponse.json();
            const { token } = tokenData;
    
   
            setToken( token );

        } catch (error) {
            console.error('Error while processing login:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Login form</h2>
            <input 
                {...register("email")} 
                type="text" 
                placeholder="Email" 
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email.message}</div>}

            <input 
                {...register("password")} 
                type="password" 
                placeholder="Password" 
            />
            {errors.password && <div style={{ color: 'red' }}>{errors.password.message}</div>}
            
            <button type="submit">Submit</button>
        </form>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;