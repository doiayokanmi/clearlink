import React from 'react'
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const LeftTestimony = () => {
  return (
    <>
    <div className="basis-1/2 lg:pe-6 space-y-6">
          <Image src={'/images/svg/Shopify.com svg.svg'} width={80} height={20} alt="shopify" />

          <div className="flex gap-2">
            {
              [1, 2, 3, 4, 5].map((i) => (
                <Image key={i} src="/images/avatars/Star.png" width={12} height={12} alt="review star" />
              ))
            }
          </div>

          <h1 className="font-semibold text-2xl leading-[44px]">
            ClearLink has upgraded our remote meetings. High-quality video, screen sharing, and top-notch security make it essential for our team.
          </h1>

          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/images/avatars/Avatar6.png" />
              </Avatar>

              <div>
                <h1 className="font-semibold text-lg">
                  Sarah Thompson
                </h1>
                <p className="text-gray-500">
                  Project Manager, Shopify
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <Button className="p-2 text-blue-700 bg-white rounded-full">
                <MoveLeft />
              </Button>

              <Button className="p-2 text-blue-700 bg-white rounded-full">
                <MoveRight />
              </Button>
            </div>
          </div>
        </div>
    </>
  )
}

export default LeftTestimony