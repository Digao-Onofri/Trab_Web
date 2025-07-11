import Image from "next/image";

// Definindo um tipo
export interface isAvatarProp {
    image: string
}

export default function AvatarProp(props: isAvatarProp){
    return(
        <Image
            src={props.image}
            alt='Avatar'
        />
    )
}