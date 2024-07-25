import Image from "next/image";

export function CustomAvatar() {
  const data = {
    avatar: "/imgs/dummy2.jpg",
  };

  return <Image className="w-10 h-10 rounded-full" src={data.avatar} alt="avatar" width={40} height={40} />;
}
