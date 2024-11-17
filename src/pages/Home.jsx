import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, ExternalLink, Menu, X, DollarSign, Trophy, Users, ArrowRight, Download, Shield } from 'lucide-react'
import { Button, Input, Carousel, Card } from 'antd'
import { WhatsappIcon, TwitterIcon, TelegramIcon } from 'react-share'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

function Home() {

    const [ gamesLength , setGamesLength ] = useState(3)
    const [ gamesBut , setGamesBut ] = useState('See less')

    const games = [
        { name: "Crypto Clash", image: "/placeholder.svg?height=200&width=200", listingDate: "2023-12-01", gameUrl: "https://cryptoclash.com" },
        { name: "Token Tycoon", image: "/placeholder.svg?height=200&width=200", listingDate: "2023-12-15", gameUrl: "https://tokentycoon.com" },
        { name: "Blockchain Blitz", image: "/placeholder.svg?height=200&width=200", listingDate: "2024-01-05", gameUrl: "https://blockchainblitz.com" },
        { name: "NFT Legends", image: "/placeholder.svg?height=200&width=200", listingDate: "2024-02-01", gameUrl: "https://nftlegends.com" },
    ]

    const referralLink = "https://chat.whatsapp.com/IJONwnymnzmCoYksZPybXm"
    const whatsappNumber = "+923135909715"


    const openGameWithReferral = () => {
        const fullUrl = `${gameUrl}?ref=${encodeURIComponent(referralLink)}`
        window.open(fullUrl, '_blank')
    }

    
    const handleIncrese = () => {
        if (gamesLength > games.length) {
            setGamesLength(3);
    
            const element = document.getElementById('games');
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            setGamesLength(gamesLength + 3);
        }
    };
    


    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <main className="pt-10">
                <section id='home' className="relative px-2 sm:px-16 h-screen flex items-center justify-center overflow-hidden">
                    <div className="relative z-20 text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-6"
                        >
                            Earn Crypto With 𓆩ℍ𝔼𝕏𝔸𓆪

                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-300 mb-8"
                        >
                            Play, earn coins, and cash out when they list!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                        >
                            <Button href='#games' type="primary" size="large" className="bg-purple-600 hover:bg-purple-700">
                                Start Playing Now <ChevronRight className="ml-2" />
                            </Button>
                        </motion.div>
                    </div>
                </section>

                <section id="games" className="bg-gray-800 px-2 sm:px-16 py-20">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Games</h2>
                        <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                        >
                            {games.slice(0, gamesLength).map((game, index) => (
                                <div key={game.name} className="px-4">
                                    <Card
                                        hoverable
                                        cover={<img alt={game.name} src={game.image} className="h-64 object-cover" />}
                                        className="bg-gray-700 text-white"
                                    >
                                        <Card.Meta
                                            title={<span className="text-white">{game.name}</span>}
                                            description={<span className="text-gray-400">Listing Date: {game.listingDate}</span>}
                                        />
                                        <Button
                                            type="primary"
                                            className="mt-4 bg-purple-600 hover:bg-purple-700"
                                            onClick={() => openGameWithReferral(game.gameUrl)}
                                        >
                                            Play Now <ExternalLink className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Card>
                                </div>
                            ))}
                        </div>
                        <div className='flex mt-10'>
                                <Button type="primary" onClick={handleIncrese} size="large" className="bg-purple-600 mx-auto hover:bg-purple-700">
                                    {gamesLength > games.length ? 'See less' : 'See more'} <ChevronRight className="ml-2" />
                                </Button>
                        </div>
                    </div>
                </section>

                <section id="question" className="py-20 sm:px-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose CryptoPlay?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Card className="bg-gray-800 text-white">
                                <DollarSign className="text-purple-500 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Earn Real Crypto</h3>
                                <p>Play games and earn cryptocurrency that you can trade or cash out.</p>
                            </Card>
                            <Card className="bg-gray-800 text-white">
                                <Trophy className="text-purple-500 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Competitive Gameplay</h3>
                                <p>Join the game and increse your coins for bigger rewards.</p>
                            </Card>
                            <Card className="bg-gray-800 text-white">
                                <Users className="text-purple-500 w-12 h-12 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                                <p>Join a thriving community of gamers and crypto enthusiasts.</p>
                            </Card>
                        </div>
                    </div>
                </section>

                <section id="contact" className="pt-20  bg-gray-800">
                    <div  className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact for more Info</h2>
                        <div className="bg-gray-700 p-4 rounded-lg inline-flex items-center">
                            <Input
                                value={`Whatsapp:${whatsappNumber}`}
                                readOnly
                                className="bg-transparent border-none text-purple-400 mr-4"
                            />
                            <Button href={`tel:${whatsappNumber}`} target='blank' type="primary" className="bg-purple-600 hover:bg-purple-700">
                                Contact
                            </Button>
                        </div>
                    </div>
                </section>

                <section className="bg-gray-800 py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Get Started</h2>
                        <p className="text-xl text-gray-300 mb-8">Download these essential apps to begin your crypto gaming journey:</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                            <a href="https://play.google.com/store/apps/details?id=org.telegram.messenger" target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors">
                                <Download className="mr-2" />
                                Download Telegram
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.jrzheng.supervpnfree" target="_blank" rel="noopener noreferrer" className="flex items-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors">
                                <Shield className="mr-2" />
                                Download Super VPN
                            </a>
                        </div>
                    </div>
                </section>

                <section id="how-it-works" className="py-20 px-2 sm:px-16">
                    <div className="container mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How It Works</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">1</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Download Telegram</h3>
                                <p className="text-gray-400">Get Telegram from your device's app store</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">2</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Install Super VPN</h3>
                                <p className="text-gray-400">Download and set up Super VPN</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">3</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Connect VPN</h3>
                                <p className="text-gray-400">Activate Super VPN for secure access</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">4</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Create Telegram Account</h3>
                                <p className="text-gray-400">Set up your Telegram profile</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">5</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Play Games</h3>
                                <p className="text-gray-400">Access games through our Website and start playing</p>
                            </div>
                            <div className="text-center">
                                <div className="bg-purple-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-bold">6</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Earn & Cash Out</h3>
                                <p className="text-gray-400">Complete tasks, increase coins, and sell for USDT after listing</p>
                            </div>
                        </div>
                        <div className="mt-12 text-center">
                            <Button type="primary" size="large" className="bg-purple-600 hover:bg-purple-700">
                                Get Started Now <ArrowRight className="ml-2" />
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-800 py-12 px-4 sm:px-16">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">𝔼𝕒𝕣𝕟 𝕨𝕚𝕥𝕙 𓆩ℍ𝔼𝕏𝔸𓆪</h3>
                            <p className="text-gray-400">Play, earn, and thrive in the world of crypto gaming.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#games" className="text-gray-400 hover:text-white">Games</a></li>
                                <li><a href="#features" className="text-gray-400 hover:text-white">Features</a></li>
                                <li><a href="#referral" className="text-gray-400 hover:text-white">Referral Program</a></li>
                                <li><a href="#roadmap" className="text-gray-400 hover:text-white">Roadmap</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <TwitterIcon size={32} round />
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <TelegramIcon size={32} round />
                                </a>
                                <a
                                    href={`https://wa.me/${whatsappNumber}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white"
                                >
                                    <WhatsappIcon size={32} round />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                        <p className="text-gray-400">&copy; 2023 CryptoPlay. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Home