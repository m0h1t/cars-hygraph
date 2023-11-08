import React from "react"
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    const navStyles: React.CSSProperties = {
        background: "white",
        display: "flex",
        borderBottom: "2px solid black",
        marginBottom: "12px"
    };

    type LabelProps = {
        label: string;
        href: string;
    };

    const links: LabelProps[] = [
        { label: "Vehicles", href: "/cars" }
    ];

    return (
        <nav className="space-x-6 mb-5 h-14 items-center" style={navStyles}>
            <Link href={"/"} className="space-x-4 h-14 items-center">
                <Image
                    id="logoImage"
                    width={140}
                    height={30}
                    className="space-x-6 h-14 items-center p-2 ml-9 mr-20"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Toyota_Motor_North_America_logo_%282019%29.png/320px-Toyota_Motor_North_America_logo_%282019%29.png"
                    alt="Toyota_Motor_North_America"
                />
            </Link>
            <ul className="flex space-x-6">
                {links.map(link =>
                    <Link
                        key={link.href}
                        className="text-black hover:text-red-500 transition-colors px-1" href={link.href}>
                        {link.label}
                    </Link>)
                }
            </ul>
        </nav>
    )
}
export default NavBar