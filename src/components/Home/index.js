import React from 'react'
import { Banner } from '../Home/Banner'
import { Blog } from '../Home/Blog'
import { New } from '../Home/New'
import { Product } from '../Home/Products'
import { Search } from '../Home/Search'
const Home = () => {
    return (
        <div>
            <Banner />
            <Product />
            <New />
            <Blog />
            <Search />
        </div>
    )
}

export default Home

