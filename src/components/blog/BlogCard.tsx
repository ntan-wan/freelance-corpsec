import Image from "next/image";
import { CustomTag } from "@/components/ui/CustomTag";
import { CustomAvatar } from "@/components/ui/CustomAvatar";
import { IBlog } from "@/types/coreTypes";
import {formatDate} from '@/utils/coreUtils'

interface IProps {
  data: IBlog;
  className?: string;
}

export function BlogCard({ data, className, ...props }: IProps) {

  const getTagVariant = (category: string) : string => {
    const categories: { [key: string]: string } = {
      web: "primary",
      studio: "success",
      ui: "primary",
    };

    return categories[category];
  };

  return (
    <div>
      <div className="relative h-60">
        <Image className="rounded-2xl w-full object-cover" src={data.img} alt="Blog Image" fill sizes="(min-width:1024) 30vw"/>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <CustomAvatar />
        <div>
          <p className="text-sm">{data.author.name}</p>
          <p className="text-xs c-text-gray">{formatDate(data.createdAt)}</p>
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
