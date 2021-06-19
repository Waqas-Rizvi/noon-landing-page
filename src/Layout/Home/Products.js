import React, { useState } from 'react';
import { Card } from "../../Components/Card";

export const Products = () => {
    let [product, setProduct] = useState([
        {
            image: 'https://z.nooncdn.com/products/tr:n-t_240/v1605814220/N41044065A_1.jpg',
            description: 'iPhone 12 Pro Max With Facetime 256GB Pacific Blue 5G - Middle East Version',
            price: 'AED 4682.15'
        },
        {
            image: "https://z.nooncdn.com/products/tr:n-t_240/v1610036835/N40633047A_1.jpg",
            description: 'PlayStation 5 Console (Disc Version)',
            price: 'AED 3099.00'
        },
        {
            image: 'https://z.nooncdn.com/products/tr:n-t_240/v1606407160/N39843845A_1.jpg',
            description: 'Series 5 Smart Watch With Replaceable Strap - 44mm Black',
            price: 'AED 38.75'
        },
        {
            image: 'https://z.nooncdn.com/products/tr:n-t_240/v1563786689/N22732308A_1.jpg',
            description: 'AirPods With Charging Case White',
            price: 'AED 479.00'
        },
        {
            image: 'https://z.nooncdn.com/products/tr:n-t_240/v1605898679/N39038284A_1.jpg',
            description: 'Mi Band 5 Smart Bracelet Standard Edition (Global Version) Black',
            price: 'AED 91.80'
        },
        {
            image: 'https://z.nooncdn.com/products/tr:n-t_240/v1606212269/N42587741A_1.jpg',
            description: 'PlayStation 5 Console (Disc Version) With Extra Controller And Spider-Man: Miles Morales',
            price: 'AED 3619.00'
        }     
    ])
    return (
        <div style={{backgroundColor: "white"}} className="row p-2">
            <h3>Recommended for you</h3>
            {product.map((e, i) => {
                return <div key={i} className="col-md-2">
                <Card description={e.description} price={e.price} image={e.image} />
            </div>
            })}
        </div>
    )
}
