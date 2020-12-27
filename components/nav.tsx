import React from 'react';
import Link from 'next/link';


export interface NavProps {
    
}
 
const Nav: React.SFC<NavProps> = () => {
    return ( 
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
            </ul>
        </nav>
     );
}
 
export default Nav;