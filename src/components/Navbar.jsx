import { Button } from "antd"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { WhatsappIcon } from "react-share"
import { motion } from 'framer-motion'
import { Link } from "react-router-dom"


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const whatsappNumber = "+923135909715" // Replace with your actual WhatsApp number


    return(
        <div className="bg-gray-900 text-white">
            <header className="fixed top-0 px-2 py-1 sm:px-16 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
                <div className="container mx-auto py-3 sm:py-4 flex justify-between items-center">
                    <a href="#" className="text-lg sm:text-2xl font-bold text-purple-500 mx-2">𝔼𝕒𝕣𝕟 𝕨𝕚𝕥𝕙 𓆩ℍ𝔼𝕏𝔸𓆪</a>
                    <nav className="hidden lg:flex space-x-6">
                        <a href='#home' className="hover:text-purple-400 transition-colors">Home</a>
                        <a href="#games" className="hover:text-purple-400 transition-colors">Games</a>
                        <a href="#question" className="hover:text-purple-400 transition-colors">Question</a>
                        <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>
                        <a href="#how-it-works" className="hover:text-purple-400 transition-colors">How It Works</a>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Contact us on WhatsApp"
                        >
                            <WhatsappIcon size={32} round />
                        </a>
                        <Button
                            type="text"
                            icon={isMenuOpen ? <X /> : <Menu />}
                            className="lg:hidden text-white"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        />
                    </div>
                </div>
            </header>

            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="fixed inset-0 z-40 bg-gray-900 pt-20"
                >
                    <nav className="flex flex-col items-center space-y-6 py-8">
                        <a href="#games" className="text-xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Games</a>
                        <a href="#features" className="text-xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                        <a href="#referral" className="text-xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Referral</a>
                        <a href="#how-it-works" className="text-xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>How It Works</a>
                        <a href="#roadmap" className="text-xl hover:text-purple-400 transition-colors" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
                    </nav>
                </motion.div>
            )}
        </div>
    )
}


export default Navbar