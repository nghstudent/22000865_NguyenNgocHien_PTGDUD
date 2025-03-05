import { use, useEffect, useState } from 'react'
import './Menu.css'
import Item from './Item'

function Menu() {
    const [array, setArray] = useState([]);
    useEffect(() => {
        var fn = fetch('https://67c81d690acf98d07084ec3d.mockapi.io/menu');
        var fn1 = fn.then((res) => { return res.json() });
        var fn2 = fn1.then((data) => { setArray(data) });
    }
        , [])
    return (
        <>
            <ul>
                {
                    array.map((item, index) => {
                        return (
                            <li className='limenu' key={index}>
                                <Item text={item.item} image={item.image}></Item>
                            </li>
                        )
                    })}
            </ul>
        </>
    )
}

export default Menu