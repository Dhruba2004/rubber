"use client"
import React from "react";
import WorkspaceHeader from "../_components/WorkspaceHeader";
import Editor from "../_components/Editor";
import Canvas from "../_components/Canvas";

function WorkSpace() {
  return (
    <div>
      <WorkspaceHeader />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="h-screen">
          <Editor/>
        </div>
        {/* Document */}
        {/* Whiteboard/Canvas */}
        <div className="h-screen">
          <Canvas/>
        </div>
      </div>
    </div>
  );
}

export default WorkSpace;
