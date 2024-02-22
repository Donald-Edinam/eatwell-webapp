import React from 'react'
import { Card } from './Card'

const ProductCard = () => {
  return (
    <>
        <div className="w-full py-3 my-2">
            <h4 className='mt-1 ml-3'>Top Ranking</h4>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 px-2">
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
            <div>
                <Card />
            </div>
        </div>

    </>
  )
}

export default ProductCard