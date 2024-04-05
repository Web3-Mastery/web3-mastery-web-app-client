import React from 'react';

function BackgroundArtifactsWrapper({ children }: ChildProp) {
  return (
    <main className="background-artifacts-wrapper overflow-hidden">
      <div className="background-artifacts relative">
        <div className="artifact absolute bg-gray-900 text-gray-900 w-[600px] h-[600px] rounded-full top-[250px] left-[260px]">
          just a design element
        </div>
        <div className="artifact absolute bg-red-900 text-red-900 w-[400px] h-[400px] rounded-full">
          just a design element
        </div>
        <div className="artifact absolute bg-red-900 text-red-900 w-[400px] h-[400px] rounded-full bottom-0 left-0">
          just a design element
        </div>
      </div>
      <div className="main-app-content">{children}</div>
    </main>
  );
}

export default BackgroundArtifactsWrapper;
