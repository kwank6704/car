'use client'
import {useState} from 'react';
import { useRouter } from 'next/navigation';
import styles from './banner.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner () {
    const covers = ['/img/cover.jpg' , '/img/cover2.jpg' , '/img/cover3.jpg'];
    const [index , setIndex] = useState(0);
    const router = useRouter();

    const {data:session} = useSession();
    console.log(session?.user.token);

    return (
        <div className = {styles.banner} onClick={() => {setIndex(index+1)}}>
            <Image src = {covers[index%3]}
            alt = 'cover'
            fill = {true}
            priority
            objectFit = 'cover' />
            <div className = {styles.bannerText}>
                <h1 className='text-4xl font-serif font-bold' >where every event finds its venue </h1>
                <h3 className='text-xl font-serif'>Finding the perfect venue has never been easier. Whether it's a wedding corperate event, or private party, we connecting people to the perfect place</h3>
            </div>
            {
                session? <div className='z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl'>Hello {session.user?.name}</div> : null
            }
            <button className = 'bg-white text-cyan-600 border border-cyan-600 font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0 hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick = {(e) => {e.stopPropagation(); router.push('/car')}} >
                select Your Travel Partner NOW
            </button>
        </div>
    )
}
