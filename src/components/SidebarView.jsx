import React from "react";
import SidebarRegion from "./SidebarRegion";
import ContentRegion from "./ContentRegion";

export default function SidebarView() {
  return (
    <div className="max-w-full overflow-hidden flex">
      <SidebarRegion />
      <ContentRegion />
    </div>
  );
}
