import Link from "next/link";

export default function Skils() {
    return (
        <body>
        <div className="navbar">
            <div className="logo-name">Moiz</div>
            <div className="home-services">
            <Link  href={"http://localhost:3000/"} className="blue-home">Home</Link>
            <Link  href={"/pages/about"} className=" a" >About</Link>
            <Link  href={"/pages/skills"} className=" a">Skills</Link>
            <Link  href={"/pages/projects"} className=" a">Projects</Link>
            <Link  href={"#"} className=" a">Contact Us</Link>
            <Link  href={"#"} className=" a"></Link>
            </div>
        </div>
        </body>
    );
}