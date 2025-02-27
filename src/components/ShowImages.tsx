import '#styles/global.css';

import { useState } from 'react';

const ShowImages = ({ price, imgs }: { price: number, imgs: string[] })=> {
    const [selectedImage, setSelectedImage] = useState(imgs[0]);

    const handleImageClick = (img: string) => {
        setSelectedImage(img);
    };
    
    return (
        <div className='w-full bg-gray-100 rounded-b-md'>
            <div className="w-full h-96 relative">
                <img src={`../${selectedImage}`} alt=""
                     className="w-full h-full object-cover rounded-b-md shadow-md shadow-black"/>
                
                <span className='absolute left-0 py-1 pl-5 pr-7 text-3xl font-bold opacity-70
                                 bg-gray-900 text-white' 
                       style={{ clipPath: 'polygon(0 0, 100% 0%, calc(100% - 14px) 50%, 100% 100%, 0 100%)', bottom: '12px' }}>
                    { price }
                    <span className="font-medium text-base"> CUP</span>
                </span>
            </div>

            <div className="py-3 flex justify-center items-center gap-2">
                {
                    imgs.map((img: string, index: number) => {
                        return (
                            <img key={index} src={`../${img}`} alt="" 
                                 className={`h-16 w-16 object-cover cursor-pointer
                                            rounded-lg shadow-md shadow-black
                                            active:shadow transition-[scale]
                                            ${(selectedImage === img)? 'scale-110' : ''}`}
                                 onClick={()=> handleImageClick(img)}/>
                        );
                    })
                }
            </div>
        </div>
    );
}
export default ShowImages;

