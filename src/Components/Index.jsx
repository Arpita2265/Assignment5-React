import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Description from './Description';

import { productContext } from '../Context/Context';


const Index = () => {
    const { setProduct } = useContext(productContext);
    const [userData, setUserData] = useState([])

    const [error, setError] = useState(null)
    useEffect(() => {

        async function fetchData() {
            try {
                const response = await fetch('https://api.escuelajs.co/api/v1/products')
                const data = await response.json()
                setUserData(data)
            } catch (error) {


                setError("Error! Failed to fetch")


            }
        }

        fetchData()
    }, [])

    if (error) {
        return <h3 className='text-gray-500 text-center mt-10'>{error}</h3>
    }
    let printUserData = <h3 className='text-gray-900 text-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>loading...</h3>;





    if (userData.length > 0) {

        printUserData = userData.map((elem, index) => {
            const src = (elem.images && elem.images.length > 0) ? elem.images[0] : (elem.image || '');
            const title = (elem.title && elem.title.length > 0) ? elem.title : '';
            const price = (elem.price && elem.price.length > 0) ? elem.price : '';
            const displayPrice = (typeof elem.price === 'number') ? `$${elem.price.toFixed(2)}`
                : (elem.price ? String(elem.price) : 'N/A');

            const description = (elem.description && elem.description.length > 0) ? elem.description : '';


            return (

                <div key={elem.id} className="card bg-gray-800 w-60 h-100 rounded text-center p-2 overflow-hidden text-ellipsis">
                    <Link
                        to={`/product/${elem.title}`}
                        onClick={() => setProduct(elem)}
                    >

                        <img className="rounded h-60 w-60 object-cover" src={src} alt={elem.title || 'product'} />
                        <h3 className="font-bold mt-2">{elem.title}</h3>
                        <div className="text-sm pt-2 pb-2 text-green-400">{displayPrice}</div>
                    </Link>
                </div>

            );
        });
    }


    return (
        <div>
            <div className="cards m-4 flex flex-wrap gap-20 p-25">

                {printUserData}




            </div>

        </div>
    );
}

export default Index; 
