import { useState } from 'react';

const ShowImages = ({ imgs }: { imgs: string[] })=> {
    const [selectedImage, setSelectedImage] = useState(imgs[0]);

    const handleImageClick = (img: string) => {
        setSelectedImage(img);
    };
    
    return (
        <div>
            <div className="flex flex-nowrap overflow-x-hidden">
                <img src={`../${selectedImage}`} alt=""
                     className="min-w-full h-96 object-cover" />
            </div>

            <div className="py-3 flex justify-center items-center gap-2 bg-gray-100">
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

