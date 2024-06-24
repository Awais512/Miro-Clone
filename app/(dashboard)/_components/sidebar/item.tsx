"use client";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

interface ItemsProps {
  id: string;
  name: string;
  imageUrl: string;
}

export const Item = ({ id, name, imageUrl }: ItemsProps) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  const onClick = () => {
    if (!setActive) return;

    setActive({ organization: id });
  };

  return (
    <div className="aspect-square relative">
      <Image
        src={imageUrl}
        alt={name}
        onClick={onClick}
        fill
        className={cn(
          "rounded-md cursor-pointer opacity-75 hover:opacity-100",
          isActive && "opacity-100"
        )}
      />
    </div>
  );
};
