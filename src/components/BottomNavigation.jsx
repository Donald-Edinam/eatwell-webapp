import React from 'react'

//Icons
import HomeIcon from "../assets/svg/Home.svg"
import PlateIcon from "../assets/svg/Plate.svg"
import ChatICon from "../assets/svg/ChatBubble.svg"
import CartIcon from "../assets/svg/CartIcon.svg"
import UserIcon from "../assets/svg/UserIcon.svg"

export const BottomNavigation = () => {


    const navItems = [
        { linkName: "Home", linkIcon: HomeIcon, key: "" },
        { linkName: "Eatwell", linkIcon: PlateIcon, key: "" },
        { linkName: "Messenger", linkIcon: ChatICon, key: "" },
        { linkName: "Cart", linkIcon: CartIcon, key: "" },
        { linkName: "My MartEnd", linkIcon: UserIcon, key: "" }
    ]
    return (
        <>
            <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
                <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
                    {navItems.map((item) => (
                        <button type="button" className="inline-flex flex-col items-center justify-center px-5 group">
                            {/* <svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg> */}
                            <img src={item.linkIcon} className='w-5' alt="" />
                            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-red-600">Home</span>
                        </button>
                    ))}
                </div>
            </div>

        </>
    )
}
