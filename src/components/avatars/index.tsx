import React, { } from "react";
import Image from "next/image";

const AvatarBox = ({ image = "/images/avatar.webp", name = "name" }: { image: string, name: string }) => {
    return <div className='w-full flex flex-col items-center gap-y-2'>

        <div className='rounded-full overflow-hidden h-12 w-12 relative '>
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

        <p className='text-xs text-center font-M-Medium w-16' style={{

            fontSize: "0.7rem",
            lineHeight: "1rem"
        }}>
            {name}
        </p>
    </div>
}

export default AvatarBox;
