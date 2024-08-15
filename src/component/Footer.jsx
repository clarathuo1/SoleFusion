import React from 'react'
import { useState } from 'react'

const Footer = ()  => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
  return (
    <footer className='bg-gradient-to-r from-orange-400 to-orange-300 text-white py-12 px-6 rounded-t-lg'>
    <div className='container mx-auto px-4 '>
        <div className='flex flex-wrap justify-between'>
            {/* About Us Section */}
            <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                <h3 className='text-2xl font-bold mb-4'>
                    About Us
                </h3>
                <p className='text-base leading-relaxed'>
                    We’re passionate about bringing delicious recipes to your kitchen. Our mission is to inspire home cooks and make cooking enjoyable for everyone.
                </p>
            </div>

            {/* Contact Us Section */}
            <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                <h3 className='text-2xl font-bold mb-4'>
                    Contact Us
                </h3>
                <p className='text-base leading-relaxed'>
                    Email: <a href="mailto:alizabdi21@gmail.com" className='text-yellow-200 hover:underline'>alizabdi21@gmail.com</a><br/>
                    Phone: +25748862662<br/>
                    Address: Ngong Lane<br/>
                </p>
            </div>

            {/* Follow Us Section */}
            <div className='w-full md:w-1/3'>
                <h3 className='text-2xl font-bold mb-4'>
                    Follow Us
                </h3>
                <p className='text-base leading-relaxed'>
                    Instagram: <a href="https://www.instagram.com/" className='text-yellow-200 hover:underline' target="_blank" rel="noopener noreferrer">Instagram</a><br/>
                    Twitter: <a href="https://x.com/" className='text-yellow-200 hover:underline' target="_blank" rel="noopener noreferrer">Twitter</a><br/>
                    Facebook: <a href="#" className='text-yellow-200 hover:underline' target="_blank" rel="noopener noreferrer">Facebook</a><br/>
                </p>

                <div className='mt-6 text-center text-sm'>
                    <p>&copy; 2024 Nosh Navigator. All rights reserved.</p>
                    <p className='mt-2'>
                        Licensed under the MIT License.
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>

  
    
  )
}

export default Footer