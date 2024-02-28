import React from 'react'

export const UserCard = () => {
    return (
        <>
            <div className="flex justify-start mt-20 mx-4">
                <div className="w-10 flex items-center justify-center mx-2 rounded-3xl bg-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>

                </div>
                <div className="w-90">
                    <h1 className='text-lg font-bold'>Username</h1>
                    <p className='text-xs'>Profile 100% complete <a href="" className='underline'>Edit</a></p>
                </div>
            </div>
        </>
    )
}