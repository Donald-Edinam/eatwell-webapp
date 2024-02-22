import React from 'react'
import { Link } from 'react-router-dom'

//Icons
import HomeIcon from "../assets/svg/Home.svg"
import PlateIcon from "../assets/svg/Plate.svg"
import ChatICon from "../assets/svg/ChatBubble.svg"
import CartIcon from "../assets/svg/CartIcon.svg"
import UserIcon from "../assets/svg/UserIcon.svg"

export const BottomNavigation = () => {

    const navItems = [
        { link:"/", linkName: "Home", linkIcon: HomeIcon, key: "home" },
        { link:"/eatwell", linkName: "Eatwell", linkIcon: PlateIcon, key: "eatwell" },
        { link:"/messenger", linkName: "Messenger", linkIcon: ChatICon, key: "messenger" },
        { link:"/cart", linkName: "Cart", linkIcon: CartIcon, key: "cart" },
        { link:"/martend", linkName: "MartEnd", linkIcon: UserIcon, key: "martend" }
    ];
    
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    {navItems.map((item, index) => (
                           <a href={item.link} className="inline-flex flex-col items-center justify-center px-5 group">
                              <img src={item.linkIcon} className='w-5' alt="" />
                              <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-red-600 mt-1">{item.linkName}</span>
                           </a>
                    ))}
                </div>
            </div>

        </>
    )
}