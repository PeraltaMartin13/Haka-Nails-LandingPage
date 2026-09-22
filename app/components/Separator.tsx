import Image from "next/image";

type SeparatorProps ={
    title: string;
    image: string;
}

export default function Separator({title, image}: SeparatorProps){
    return(
        <div className="flex justify-center w-full  bg-amber-100" >
            <Image className="p-0" src={image} alt={title} width={600} height={100} ></Image>
        </div>
    );

}