"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
const page = () => {
    const [url, seturl] = useState('')
    const [shorturl, setshorturl] = useState('')
    const [Generated, setGenerated] = useState('')

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST_URL}/${shorturl}`)
                seturl('')
                setshorturl('')
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div>

            <div className='bg-[#bce8e6] flex flex-col mx-auto max-w-lg p-4 rounded-lg justify-center gap-4 mt-10'>
                <h1 className='text-xl font-bold'>Generate your short URL</h1>
                <div className='flex flex-col gap-3 justify-center '>
                    <input value={url} onChange={(e) => { seturl(e.target.value) }} className='p-2 rounded-md' type="text" placeholder='Enter your URL' />
                    <input value={shorturl} onChange={(e) => { setshorturl(e.target.value) }} className='p-2 rounded-md' type="text" placeholder='Enter your prefered short URL text' />
                </div>
                <div> <Link href=''> <button onClick={generate} className='bg-[#1da099] w-full text-white px-2 py-1 rounded-lg'>Generate</button></Link>
                </div>
                {Generated && <>

                    <span>Your link</span><Link target='_blank' href={Generated}>{Generated}</Link>
                </>}
            </div>
        </div>
    )
}

export default page
