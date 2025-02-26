import { useState } from 'react';

interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const BagItems = ()=> {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (item: Item)=> {
        setItems([...items, item]);
    }

    return (
        <div className='flex flex-col gap-2 h-80'>
            <div className='h-full flex items-center justify-center text-center text-gray-500'>
                No tienes ningún producto en tu carrito de compras.
            </div>
        </div>
    );
}

export default BagItems;
