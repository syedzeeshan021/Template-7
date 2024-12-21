'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Page() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const cars = [
    { title: 'Koenigsegg', image: '/car.png', desc: 'Sport', price: 99.00 },
    { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Sport', price: 80.00 },
    { title: 'Rolls-Royce', image: '/Rolls-Royce.png', desc: 'Sedan', price: 96.00 },
    { title: 'Nissan GT - R', image: '/car (1).png', desc: 'Sport', price: 80.00 },
    { title: 'All New Rush', image: '/suv (4).png', desc: 'SUV', price: 72.00 },
    { title: 'CR - V', image: '/suv (4).png', desc: 'SUV', price: 80.00 },
    { title: 'ALL New Terios', image: '/suv.png', desc: 'SUV', price: 74.00 },
    { title: 'CR - V', image: '/suv (4).png', desc: 'SUV', price: 80.00 },
    { title: 'MG ZX Exclusive', image: '/MG-ZX-Exclusive.png', desc: 'Hatchback', price: 76.00 },
    { title: 'New MG ZS', image: '/NewMG-ZS.png', desc: 'SUV', price: 80.00 },
    { title: 'MG ZX Excite', image: '/MG-ZX-Excite-Sky.png', desc: 'Hatchback', price: 74.00 },
    { title: 'New MG ZS', image: '/NewMG-ZS.png', desc: 'SUV', price: 80.00 },
    { title: 'MG ZX Exclusive', image: '/MG-ZX-Exclusive.png', desc: 'SUV', price: 76.00 },
    { title: 'New MG ZS', image: '/NewMG-ZS.png', desc: 'Sedan', price: 80.00 },
    { title: 'New MG ZX Excite', image: '/MG-ZX-Excite-Sky.png', desc: 'Sport', price: 74.00 },
    { title: 'New MG ZS', image: '/NewMG-ZS.png', desc: 'Sedan', price: 80.00 },
  ];

  const carsToShow = showMore ? cars : cars.slice(0, 8);

  return (
    <div className='w-full flex'>
      <div className="first hidden sm:flex w-[20%]">
        <Image src='/Nav Bar Side.png' alt='' width={360} height={1600} />
      </div>
      <div className="sec w-full sm:w-[80%] bg-[#f6f7f9] p-4 sm:p-6 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
        <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:justify-between ">
          <Image src='/Pick - Up.png' alt='' width={582} height={132} className="w-[200px] md:w-[270px] lg:w-[582px]" />
          <Image src='/Switch.png' alt='' width={60} height={60} className="w-[80px]" />
          <Image src='/Drop - Off.png' alt='' width={582} height={132} className='w-[200px] md:w-[270px] lg:w-[582px]' />
        </section>
        <section className="popular w-full flex flex-col gap-4">
          <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {carsToShow.map((car, index) => (
              <Card key={index} className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between">
                <CardHeader>
                  <CardTitle className="w-full flex items-center justify-between">
                    {car.title} <Image src="/heart.png" alt="Heart" width={20} height={20} />
                  </CardTitle>
                  <CardDescription>{car.desc}</CardDescription>
                </CardHeader>
                <CardContent className="w-full flex flex-col items-center justify-center gap-4">
                  <Image src={car.image} alt={car.title} width={220} height={68} />
                  <Image src="/Specification.png" alt="" width={256} height={24} className='hidden md:flex' />
                  <Image src="/Specification (1).png" alt="" width={256} height={24} className='md:hidden' />
                </CardContent>
                <CardFooter className="w-full flex items-center justify-between">
                  <p>
                    ${car.price.toFixed(2)}/<span className="text-gray-500">day</span>
                  </p>
                  <Link href="/details">
                    <button className="bg-[#3563e9] p-2 text-white rounded-md">Rent Now</button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="button w-full text-center">
          <button
            onClick={toggleShowMore}
            className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5"
          >
            {showMore ? "Show Less Cars" : "Show More Cars"}
          </button>
        </section>
      </div>
    </div>
  );
}
