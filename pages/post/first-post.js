import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import gambar from '../../public/images/gambar.jpg';

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1 className="font-bold">FIRST POSTS</h1>
      <Image src={gambar} height={200} width={300} />
      <h6 className="text-6xl font-bold">Hallo Semua Mari Belajar Bootcamp </h6>
    </>
  );
}
