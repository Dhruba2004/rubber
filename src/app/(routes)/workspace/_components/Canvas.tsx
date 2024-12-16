"use client";
import { Excalidraw } from "@excalidraw/excalidraw";
// import dynamic from "next/dynamic";

// const ExcalidrawPrimitive = dynamic(
//   async () => (await import("@excalidraw/excalidraw")).Excalidraw,
//   {
//     ssr: false,
//   }
// );
const Canvas = () => {
  return (
    <div style={{ height: "500px" }}>
      {/* ts-ignore */}
      {/* <Excalidraw /> */}
      
    </div>
  );
};

export default Canvas;
