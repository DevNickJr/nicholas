"use client"
import { Facebook, Instagram, Linkedin, MessageCircleHeart, X } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Share = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row flex-wrap justify-center gap-8 lg:gap-x-20 gap-y-2 rounded-md mt-5 text-sm'>
                <motion.a
                    whileHover={{
                        left: [3, -3, 3, -3, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'linear',
                    }}
                    target='_blank'
                    className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
                    href={`https://x.com/Dev_NickJ`}
                >
                    <X size={'1rem'} />
                    Twitter
                </motion.a>
                <motion.a
                    whileHover={{
                        left: [3, -3, 3, -3, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'linear',
                    }}
                    target='_blank'
                    className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
                    href={`https://www.instagram.com/nickjr.n/`}
                >
                    <Instagram size={'1rem'} />
                    Instagram
                </motion.a>
                <motion.a
                    whileHover={{
                        left: [3, -3, 3, -3, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'linear',
                    }}
                    target='_blank'
                    className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
                    href={`https://web.facebook.com/duadei.nicholas.3/`}
                >
                <Facebook size={'1rem'} />
                    Facebook
                </motion.a>
                <motion.a
                    whileHover={{
                        left: [3, -3, 3, -3, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'linear',
                    }}
                    target='_blank'
                    className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
                    href={`whatsapp://+2349033398824`}
                >
                    <MessageCircleHeart size={'1rem'} />
                    Whatsapp
                </motion.a>
                <motion.a
                    whileHover={{
                        left: [3, -3, 3, -3, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        ease: 'linear',
                    }}
                    target='_blank'
                    className='flex gap-3 items-center p-5 text-white/70 relative hover:text-primary'
                    href={`https://www.linkedin.com/in/duadei-nicholas-05957b18b/`}
                >
                    <Linkedin size={'1rem'} />
                    LinkedIn
                </motion.a>
            </div>
        </>
        
    )
}


export default Share