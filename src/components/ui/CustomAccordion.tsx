"use client";

import { cn } from "@/utils/coreUtils";
import { CustomButton } from "@/components/ui/CustomButton";
import { useRef, useState, useEffect } from "react";

interface IProps {
  className?: string;
}

const styles = {
  base: "border border-gray-300 rounded-md p-4",
};

export function CustomAccordion({ className }: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);
  const data = {
    title: "01. What are properties in Figma?",
    description:
      "In Figma, properties are attributes that define the appearance and behavior of design elements, such as fill, stroke, effects, text, and layout. These properties allow designers to customize visual presentation and interaction, ensuring consistency and control across their designs.",
  };

    useEffect(() => {
      if (isOpen && bodyRef.current) {
        bodyRef.current.style.maxHeight = `${bodyRef.current.scrollHeight}px`;
      } else {
        bodyRef.current ? bodyRef.current.style.maxHeight = "0px"  : null;
      }
    }, [isOpen]);

  return (
    <div className={cn(styles.base, className)}>
      <div className="flex items-center justify-between">
        <span>{data.title}</span>
        <CustomButton label="Toggle" onClick={() => setIsOpen(!isOpen)} />
      </div>

      <div ref={bodyRef} className="mt-4" style={{ overflow: "hidden", maxHeight: "0", transition: "max-height 0.2s ease-out" }}>
        <p className="c-text-gray c-text-sm">{data.description}</p>
      </div>
    </div>
  );
}
