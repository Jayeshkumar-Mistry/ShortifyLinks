import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-2 h-[45vh]">
      <div className="bg-[#bce8e6] flex flex-col justify-center items-center gap-2">
        <h2 className="text-2xl font-bold">The best URL Shortener in the market</h2>
        <h3 className="px-16 text-center">We are the most straightfoward URL Shortener in the world. Most of the url shorteners will track you or ask you to give your details for login. We understand your needs and hence we have created this URL shortener</h3>
        <div className='flex justify-center items-center gap-2'>
          <Link href="/shorten">  <button className='bg-[#66CDAA]   px-2 py-1 rounded-lg text-[#031211]'>Try Now</button> </Link>
          <button className='bg-[#66CDAA]   px-2 py-1 rounded-lg text-[#031211]'>GitHub</button>
        </div>
      </div >

      <div className="bg-[#bce8e6] relative">
        <Image src="/cover.jpg" alt="Cover" fill={true} className="mix-blend-darken px-20" />
      </div>

    </div >
  );
}
