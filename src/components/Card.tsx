import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard ( { carName, imgSrc ,onCompare} : {carName : string,imgSrc:string,onCompare:Function}) {
    
    return (
        <InteractiveCard contentName={carName}>
            <div className = {'w-full h-[70%] relative rounded-t-lg'}>
                <Image src = {imgSrc}
                alt = 'Product Picture'
                fill = {true}
                className = 'object-cover rounded-t-lg'/>
            </div>
            <div className = 'w-full h-[15%] p-[10px]'>
                <h3 className='font-serif font-bold'>{carName}</h3>
                <h5 className='font-serif font-medium'>nice and fabulous car</h5>
                <button className='block text-sm rounded-md bg-sky-600 hover:bg-indigo-600 mx-2 px-1 py-1 text-white shadow-sm'
                onClick={(e) => {e.stopPropagation(); onCompare(carName)}}
                
                >Compare</button>
            </div>
        </InteractiveCard>
    )
}