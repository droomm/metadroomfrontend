import React, { } from "react";
import Image from "next/image";

const AvatarBox = ({ image = "/images/avatar.png", name = "name" }: { image: string, name: string }) => {
    return <div className='w-full flex flex-col items-center px-1 gap-y-2'>

        <div className='rounded-full overflow-hidden w-full h-12 relative '>
            <Image
                src={image}
                layout='fill'
                alt="avatar"
                loading="lazy"
                placeholder="blur"
                blurDataURL={image}
                quality={100}
            />
        </div>

        <p className='text-xs text-center '>
            {name}
        </p>
    </div>
}

export default AvatarBox;