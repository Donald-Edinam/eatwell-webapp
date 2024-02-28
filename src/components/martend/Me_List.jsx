import React from 'react'

export const Me_List = () => {

    const martendLists = [
        { img: "", text: "My Orders", link: "", key: "1" },
        { img: "", text: "My Favorite", link: "", key: "1" },
        { img: "", text: "My Orders", link: "", key: "1" },
        { img: "", text: "MartEnd.com reads", link: "", key: "1" },
        { img: "", text: "Inquires", link: "", key: "1" },
        { img: "", text: "Sourcing prefences", link: "", key: "1" },
        { img: "", text: "My coupons", link: "", key: "1" },
        { img: "", text: "My reviews", link: "", key: "1" },
        { img: "", text: "Shipping addresses", link: "", key: "1" },
        { img: "", text: "MartCloud Drive", link: "", key: "1" },
        { img: "", text: "App FeedBack", link: "", key: "1" },
        { img: "", text: "Prefrences", link: "", key: "1" },
        { img: "", text: "Community Programmme", link: "", key: "1" },
        { img: "", text: "Affliate", link: "", key: "1" },
        { img: "", text: "Account Info", link: "", key: "1" },
        { img: "", text: "Others", link: "", key: "1" },
    ]

    return (
        <>
            <ul className='mt-10'>
                {martendLists.map((list) => (
                    <li className='bg-gray-100 rounded-lg mx-5 my-5'>
                        <a href='' className='flex flex-start gap-4 mx-5 py-3'>
                            <img src="" alt="IMG" />
                            <p>{list.text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </>
    )
}
