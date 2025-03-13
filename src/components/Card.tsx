import styles from './card.module.css';
import Image from 'next/image';

export default function ProductCard ( { carName, imgSrc} : {carName : string,imgSrc:string}) {
    return (
        <div className = 'w-1/5 h-[300px] rounded-lg shadow-lg' >
            <div className = {'w-full h-[70%] relative rounded-t-lg'}>
                <Image src = {imgSrc}
                alt = 'Product Picture'
                fill = {true}
                className = 'object-cover rounded-t-lg'/>
            </div>
            <div className = 'w-full h-[30%] p-[10px]'>
                <h3 className='font-serif font-bold'>{carName}</h3>
                <h5 className='font-serif font-medium'>nice and fabulous car</h5>
                <p className='font-serif font-medium'>Price : $2300</p>
            </div>
        </div>
    )
}