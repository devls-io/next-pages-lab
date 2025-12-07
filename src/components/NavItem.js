import Link from "next/link";

// Montando um LI 
export default function NavItem({href, children, ...props}){
    return(
        <li>
           <Link {...props} href={href} className="md:text-sm font-medium text-gray-600 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
            {children}
           </Link>
        </li>
    )
}

