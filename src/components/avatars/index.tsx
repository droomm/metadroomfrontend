import React, { } from "react";
import Image from "next/image";

const AvatarBox = ({ image = "/images/avatar.webp", name = "name" }: { image: string, name: string }) => {
    return <div className='w-full flex flex-col items-center px-1 gap-y-2'>

        <div className='rounded-full overflow-hidden h-11 w-11 relative '>
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

        <p className='text-xs text-center font-bold w-12' style={{

            fontSize: "0.7rem",
            lineHeight: "1rem"
        }}>
            {name}
        </p>
    </div>
}

export default AvatarBox;
