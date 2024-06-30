import React from "react";
import { Canvas } from "./_components/canvas";

interface Props {
  params: {
    boardId: string;
  };
}

const BoardIdPage = ({ params }: Props) => {
  return (
    <div>
      <Canvas boardId={params.boardId} />
    </div>
  );
};

export default BoardIdPage;
