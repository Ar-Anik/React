import { useState } from 'react';

function LoginForm () {
    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const printValue = (event) => {
        event.preventDefault();

        console.log('Username : ', form.username);
        console.log('Password : ', form.password);
    };

    const handleUpdate = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.value
        });
    };

    return (
        <form>
            <label>
                Username :
                <input type="text" name="username" placeholder="Enter Name" value={form.username} onChange={handleUpdate} />
            </label>

            <br />
            <br />

            <label>
                Password : 
                <input type="password" name="password" placeholder='Enter Password' value={form.password} onChange={handleUpdate} />
            </label>

            <br />
            <br />
            
            <button type='button' onClick={printValue}>Submit</button>
        </form>

    );
}

export default LoginForm;