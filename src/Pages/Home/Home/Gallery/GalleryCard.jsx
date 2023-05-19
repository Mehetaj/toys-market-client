import React from 'react';

const GalleryCard = ({img}) => {
    return (
        <div>
            <div className='' key={img.id}>
                    <img className='rounded-lg h-[350px] m-4  p-1 bg-gray-100' width={350} src={img?.img} alt="" />
                </div>
        </div>
    );
};

export default GalleryCard;