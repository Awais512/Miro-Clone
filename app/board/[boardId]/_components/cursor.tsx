import React, { memo } from "react";
import { MousePointer2 } from "lucide-react";
import { connectionIdToColor } from "@/lib/utils";
import { useOther } from "@/liveblocks.config";

interface Props {
  connectionId: number;
}

export const Cursor = memo(({ connectionId }: Props) => {
  const info = useOther(connectionId, (user) => user?.info);
  const cursor = useOther(connectionId, (user) => user.presence.cursor);
  const name = info?.name || "Teammate";

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
      height={50}
      width={50}
      className="relative drop-shadow-md"
    >
      <MousePointer2
        className="size-5"
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId),
        }}
      />
    </foreignObject>
  );
});

Cursor.displayName = "Cursor";
