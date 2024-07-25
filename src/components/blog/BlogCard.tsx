import Image from "next/image";
import { CustomTag } from "@/components/ui/CustomTag";
import { CustomAvatar } from "@/components/ui/CustomAvatar";

export function BlogCard() {
  const data = {
	createdAt: "2024-07-24T08:30:00.000Z",
    img: "/imgs/dummy1.jpg",
    title: "Meet a web designer in his studio in Amsterdam",
    description: "we'll get to know the designer and their design philosophy, as well as take a look",
    tags: [
      { label: "Web Design", category: "web" },
      { label: "Studio", category: "studio" },
      { label: "UI/UX", category: "ui" },
      { label: "UI/UX", category: "ui" },
      { label: "UI/UX", category: "ui" },
      { label: "UI/UX", category: "ui" },
      { label: "UI/UX", category: "ui" },
    ],
    author: {
      name: "John Doe",
      avatar: "/imgs/dummy1.jpg",
    },
  };

  const getTagVariant: (category: string) => string = (category: string) => {
    const categories: { [key: string]: string } = {
      web: "primary",
      studio: "success",
      ui: "primary",
    };

    return categories[category];
  };

  return (
    <div>
      <div className="">
        <Image className="rounded-2xl w-full" src={data.img} alt="Blog Image" width={500} height={500} />
      </div>

      <div className="mt-4 flex items-center gap-2">
		<CustomAvatar />
        <div>
          <p className="text-sm">{data.author.name}</p>
          <p className="text-xs c-text-gray">May 9, 2023</p>
        </div>
      </div>

      <h2 className="mt-4 text-xl">{data.title}</h2>

      <p className="mt-4 c-text-gray">{data.description}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        {data.tags.map((item, index) => index < 2 && <CustomTag key={item.label} label={item.label} variant={getTagVariant(item.category)} />)}
        <CustomTag label={`+${data.tags.length - 2}`} />
      </div>
    </div>
  );
}
