import React, { useState } from 'react';

const SearchBar = (props) => {
    const [searchValue, setsearchValue] = useState("")
    const handleInputChange = (e) => {
        setsearchValue(e.target.value)
    }
    const handleClearClick = () => {
        setsearchValue('')
    }
    const filteredProducts = props.products.filter((product) => {
        return product.includes(searchValue)
    }
    )
    const shouldDisplayClearButton = searchValue.length > 0
    return (
        <div>
            <input type="text"
                value={searchValue}
                onChange={handleInputChange}
                placeholder="Enter Search..." />
            {shouldDisplayClearButton &&
                <button onClick={handleClearClick}>Clear</button>}

            <ul>
                {filteredProducts.map((product) => (
                    <li key={product}>{product}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchBar