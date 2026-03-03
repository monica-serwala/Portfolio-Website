import { useEffect, useState } from "react";

export default function Navbar() {
    const [show, setShow] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > window.innerHeight * 0.7) {
        setShow(true);
        } else {
        setShow(false);
        }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <nav
            className={`fixed top-0 left-0 w-full bg-rose-100 border-b border-rose-200 shadow-sm transition-all duration-500
            ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
            >

            <div className="mx-auto max-w-6xl px-8 py-4 flex items-center justify-between">


                {/* Left */}
                <div className="font-bold">
                    Monica Serwala
                </div>

                {/* Right side wrapper */}
                <div className="flex items-center gap-8">

                    {/* Navigation Links */}
                    <div className="flex gap-8 text-sm font-medium text-zinc-700">
                        <a href="#about" className="hover:text-rose-500 transition-colors">About</a>
                        <a href="#projects" className="hover:text-rose-500 transition-colors">Projects</a>
                        <a href="#skills" className="hover:text-rose-500 transition-colors">Skills</a>
                        <a href="#contact" className="hover:text-rose-500 transition-colors">Contact</a>
                    </div>

                    {/* CV Button */}
                    <a
                        href="#"
                        className="rounded-lg bg-rose-500 px-5 py-2 text-sm font-medium text-white hover:bg-rose-600 transition">
                        Download CV
                    </a>

                </div>
            </div>

        </nav>
    )

}