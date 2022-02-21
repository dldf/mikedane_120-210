import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar/SearchBar';

// const bookProducts = [
//     'bookplates',
//     'bookends',
//     'paste',
//     'magnets',
//     'book care'
// ]

// const artProducts = [
//     'letterpress prints',
//     'screen prints',
//     'letterpress cards',
//     'original art',
//     'art prints'
// ]

const App = () => {

    const [productsState, setProductsState] = useState([])

    // 3:03 use Effect takes a function and array; runs when state changes
    // useEffect(() => {
    //     // 3:03 setTimeout takes a fn and int; runs fn after int ms elapses
    //     setTimeout(() => {
    //        // alert("It's been 2 seconds.")
    //        setProductsState(
    //            ['a', 'b']
    //        )
    //     }, 2000)
    // }, [])

    useEffect(() => {
        // 3:14 use get json from api and load into products 
        // this is using js fetch and promises
        // 3:18 "this is half of what you do as a js developer..."
        // "...creating components, getting data, putting into state, displaying it"
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            //.then(json=>console.log(json))
            .then ((productsArray) => {
                const newProductsState = productsArray.map((product) => {
                    return product.title
                })
                setProductsState(newProductsState)
            })
    })

    const yesProducts = productsState.length > 0

    return (
        // <div>
        //     <SearchBar products={bookProducts}/>
        //     <SearchBar products={artProducts}/>
        // </div>

        <div>
            {yesProducts ? <SearchBar products={productsState}/> : "Loading..."}
        </div>
    );
}

export default App