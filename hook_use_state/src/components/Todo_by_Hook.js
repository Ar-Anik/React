import { useState } from 'react';

function Todo()
{
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleChange = (event) => {
        const vlu = event.target.value;
        const updateWarning = vlu.includes('.js')
            ? 'You Need JavaScript Skill For Complete Successfully.'
            : null;

        setTodo(vlu);
        setWarning(updateWarning);
    };

    return (
        <>
            <p>{todo}</p>

            <div>
                <textarea name="todo" value={todo} onChange={handleChange} />
            </div>

            <hr />
            
            <h1>{warning || "Good Choice 0_0"}</h1>
        </>
    );

}

export default Todo;
