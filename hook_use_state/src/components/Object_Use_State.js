import { useState } from 'react';

function ObjectChange()
{
    const [todo, setTodo] = useState({
        title: '',
        description: '',
    });

    const { title, description } = todo;

    return (
        <>
            <p>{ title }</p>

            <div>
                <textarea name="title" value={ title } onChange={(event) =>
                    setTodo({
                        ...todo,
                        title: event.target.value,
                    })
                } />
            </div>

            <hr />

            <p>{ description }</p>

            <div>
                <textarea name="description" value={ description } onChange={(event) =>
                    setTodo({
                        ...todo,
                        description: event.target.value,
                    })
                } />
            </div>
        </>
    );
}

export default ObjectChange;
