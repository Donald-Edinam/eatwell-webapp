import React from 'react'

export const Card = () => {
    return (
        <>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow">
                <a href="#">
                    <img className="rounded-50 pt-3 p-2" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="product image" />
                </a>
                <div className="px-4 pb-5">
                    <a href="#">
                        <h5 className="text-xs text-center font-semibold tracking-tight text-gray-900">Fresh Pork</h5>
                    </a>
                    <p className='text-center' text-xs>
                        25.4k+ view
                    </p>
                    <div className="flex items-center justify-between">
                     
                    </div>
                </div>
            </div>

        </>
    )
}
