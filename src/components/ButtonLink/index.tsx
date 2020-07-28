import React from 'react';

interface Props {
    className: string,
    href: string
    children: string
}

function ButtonLink(props: Props) {
    return (
        <div>
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
        </div>
    );
}

export default ButtonLink;