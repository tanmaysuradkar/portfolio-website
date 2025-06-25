import React from 'react'
import Image from "next/image"
import AnimatedTitle from './AnimatedTitle'

const Project = () => {
    return (
        <section className="py-16 bg-[#f5f5f5]">
                    <AnimatedTitle
          title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
          containerClass="mt-5 !text-black text-center"
        />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-[#1e1e1e] mb-2">Projects</h2>
                    <p className="text-[#757575]">Subheading</p>
                </div>

                <div className="space-y-12">
                    {/* Content Block 1 */}
                    <div className="flex flex-col md:flex-row items-start border-b-black space-y-6 md:space-y-0 md:space-x-8">
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="Content image"
                                width={300}
                                height={200}
                                className="rounded-lg bg-[#d9d9d9]"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">LakshyaX</h3>
                            <p className="text-[#757575] leading-relaxed">
                                LakshyaX is a remote management platform that streamlines business operations, managing sales, employees, projects, tasks, and communication in one place. It includes real-time messaging and video calling to keep remote teams connected and productive                </p>
                        </div>
                    </div>

                    {/* Content Block 2 */}
                    <div className="flex  flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="Content image"
                                width={300}
                                height={200}
                                className="rounded-lg bg-[#d9d9d9]"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">Uber full stack project</h3>
                            <p className="text-[#757575] leading-relaxed">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
                            </p>
                        </div>
                    </div>

                    {/* Content Block 3 - Text Only */}
                    <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
                        <div className="w-full md:w-1/3">
                            <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="Content image"
                                width={300}
                                height={200}
                                className="rounded-lg bg-[#d9d9d9]"
                            />
                        </div>
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold text-[#1e1e1e] mb-3">Notion</h3>
                            <p className="text-[#757575] leading-relaxed">
                                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Project