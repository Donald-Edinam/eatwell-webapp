import React from 'react'
import { HomeTab } from '../components/HomeTab'
import { SearchBar } from '../components/SearchBar'
import { HorizontalScroll } from '../components/HorizontalScroll'
import ProductCard from '../components/ProductCard'

export const HomePage = () => {
  return (
    <>
        <HomeTab />
        <SearchBar />
        <HorizontalScroll />
        <ProductCard />
        <ProductCard />
    </>
  )
}
