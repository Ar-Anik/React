import { useEffect, useRef } from 'react';

function UserName() {
    const name = useRef('Anik');

    useEffect(() => {
        setTimeout(() => {
            name.current = "biddut debnath";
            console.log(name);
        }, 5000);
    });

    return (
        <div>{name.current}</div>
    );
}

export default UserName;

