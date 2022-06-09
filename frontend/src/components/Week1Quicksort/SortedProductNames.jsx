import React from 'react';
import { Quicksort } from '../../HelperFunctions/Quicksort';
import './SortedProductNames.css';

const SortedProductNames = ({ products }) => {
    

    let productNames = [];
    let sortedProductNames = [];
    if (products) {
        
        products.forEach(product => productNames.push(product.productName));
        console.log(productNames);
        sortedProductNames = Quicksort(productNames);
        console.log(sortedProductNames); 
    }

    return (
        <div>
            <table>
                <tr>
                    <td><b>Unsorted Product Names</b></td>
                    {productNames.map(product => <td>{product}</td>)}
                </tr>
                <tr>
                    <td><b>Unsorted Product Names</b></td>
                    {sortedProductNames.map(product => <td>{product}</td>)}
                </tr>
            </table>
        </div>
    )
}

export default SortedProductNames