import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';

import { schema } from './schema';


function Login() {
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
            <button type="submit">Submit</button>
        </form>
    )
}

export default Login;