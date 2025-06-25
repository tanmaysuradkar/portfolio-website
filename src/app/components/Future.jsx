import React from 'react'
import Image from "next/image"
const Future = () => {
    return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="text-center">
                    <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Card image"
                        width={300}
                        height={200}
                        className="rounded-lg bg-[#d9d9d9] mb-4 mx-auto"
                    />
                    <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">AI/ML</h3>
                    <p className="text-[#757575] leading-relaxed">
                        Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                    </p>
                </div>
                <div className="text-center">
                    <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Card image"
                        width={300}
                        height={200}
                        className="rounded-lg bg-[#d9d9d9] mb-4 mx-auto"
                    />
                    <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">WEB3</h3>
                    <p className="text-[#757575] leading-relaxed">
                        Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                    </p>
                </div>
                <div className="text-center">
                    <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Card image"
                        width={300}
                        height={200}
                        className="rounded-lg bg-[#d9d9d9] mb-4 mx-auto"
                    />
                    <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">HUMAN ROBOT</h3>
                    <p className="text-[#757575] leading-relaxed">
                        Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                    </p>
                </div>
            </div>
    )
}

export default Future