import React from 'react';

const GalleryCard = ({img}) => {
    return (
        <div>
            <div className='' key={img.id}>
                    <img className='rounded-lg h-[350px] m-4  lg:p-1 bg-gray-100 w-full lg:w-[350px]'  src={img?.img} alt="" />
                </div>
        </div>
    );
};

export default GalleryCard;