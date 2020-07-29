import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
    className: string,
    href: string
    children: string
}

function ButtonLink(props: Props) {
    return (
        <div>
        <Link to={props.href} className={props.className}>
            {props.children}
        </Link>
        </div>
    );
}

export default ButtonLink;