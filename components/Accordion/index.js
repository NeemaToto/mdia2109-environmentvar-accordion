import { useState } from 'react';

export default function Accordion({
    term,
    code,
    title,
    credits,
    description
}) {

    const [isActive, setIsActive] = useState(false)

    return (
        <>
            Term: {term}

            <div onClick={() => setIsActive(!isActive)}>
                {code} <br/>
                {title} <br/>
                {credits} <br/>
                <div>{isActive ? "↑" : "↓"}</div>
            </div>
            {isActive && <div>{description}</div>}
        </>
    )
}