import '#styles/global.css';

import BagItems from './BagItems.tsx';

import { useRef, useState, useEffect } from 'react';

const ShoppingBag = ()=> {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    const buttonPay = false;

    useEffect(()=> {
        if (isOpen) {
            dialogRef.current?.showModal();
        } else {
            dialogRef.current?.close();
        }
    }, [isOpen]);

    console.log(isOpen);

    return (
        <div>
            <img src="ShoppingBag.png" alt=""
                className='size-8 opacity-60'
                onClick={()=> setIsOpen(true)}/>

            <dialog ref={dialogRef}
                    className=' fixed top-20 left-1/2 -translate-x-1/2 w-md outline-none 
                                rounded-md shadow-md shadow-black/70
                                backdrop:bg-gray-400/40 backdrop:backdrop-blur-sm'>

                <div className='px-4 py-2 flex flex-col gap-4'>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-2xl font-bold inline-flex items-center gap-2'>
                            <img src="ShoppingBag.png" alt="" className='size-8 opacity-90'/>
                            Shopping Bag
                        </h2>

                        <img src="Close.png" alt=""
                            className='size-6 opacity-60 hover:opacity-100'
                            onClick={()=> setIsOpen(false)}/>
                    </div>

                    <BagItems />

                    <button className={`text-white px-4 py-2 rounded-md
                                        ${buttonPay ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400'}`}>
                        Comprar
                    </button>
                </div>
            </dialog>
        </div>
    );
}

export default ShoppingBag;