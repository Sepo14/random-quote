'use client'

import { useState } from "react"
import Image from "next/image"

type Quote = {
    quote: string
    author: string
    tags: string[]
}

export default function RandomQuote({ quotes }: { quotes: Quote[] }) {

    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length)
        return quotes[randomIndex]
    }

    const [currentQuote, setCurrentQuote] = useState(getRandomQuote())

    const newQuote = () => {
        setCurrentQuote(getRandomQuote())
    }

    const shareQuote = () => {
        navigator.clipboard.writeText(`${currentQuote.quote}`)
    }

    return (
        <div className="flex flex-col items-center gap-6">

            <div className="flex flex-col items-center min-w-200 max-w-300 gap-4 rounded-2xl px-10 py-20 bg-(--color-2) bg-[url('/bg-image-random-quote.svg')] bg-cover bg-center text-white">
                <p className="font-bold text-xl">{currentQuote.author}</p>
                <div className="flex gap-2">
                    <p className="rounded-full border-blue-400 border-2 px-2 py-1 text-blue-400">{currentQuote.tags[1]}</p>
                    <p className="rounded-full border-blue-400 border-2 px-2 py-1 text-blue-400">{currentQuote.tags[0]}</p>
                </div>
                <h2 className="text-2xl font-light text-center">“{currentQuote.quote}”</h2>
            </div>
            <div className="flex gap-5">
            <div className="flex bg-(--color-2) rounded-2xl p-3 gap-2 cursor-pointer" onClick={newQuote}>
                <button onClick={newQuote} className="cursor-pointer">
                    Random
                </button>
                <Image src={"/regroup.svg"} width={25} height={25} alt="icon random" >
                </Image>
            </div>
            <div className="flex bg-(--color-2) rounded-2xl p-3 gap-2 cursor-pointer" onClick={shareQuote}>
                <button onClick={shareQuote} className="cursor-pointer">
                    Share
                </button>
                <Image src={"/link.svg"} width={25} height={25} alt="icon random">
                </Image>
            </div>
            </div>
        </div>
    )
}