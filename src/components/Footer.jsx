import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa6";


export default function Footer() {

    return (
        <>
            <footer className="bg-black/30 border-t border-white/10 text-gray-300 text-sm py-6 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-center">
                        © {new Date().getFullYear()} GlassyBlog. Built by <span className="text-emerald-400 font-medium">Muhammad Hassan Raza</span>.
                    </p>
                     <div className="flex space-x-4 items-center">
                    <a
                        href="https://github.com/your-username"
                        target="_blank"
                        title="GitHub"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-purple-400 transition"
                    >
                        <FaGithub className="w-4 h-4" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/your-profile"
                        target="_blank"
                        title="LinkedIn"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-purple-400 transition"
                    >
                        <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a
                        href="https://your-portfolio.com"
                        target="_blank"
                        title="Portfolio"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:text-purple-400 transition"
                    >
                        <FaGlobe className="w-4 h-4" />
                    </a>
                </div>
                </div>
            </footer>
        </>
    )
}