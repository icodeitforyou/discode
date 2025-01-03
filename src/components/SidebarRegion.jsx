import React from "react";

export default function SidebarRegion() {
  return (
    <div className="max-w-[35%] w-full flex justify-end h-screen overflow-auto bg-[#2b2d31]">
      <div className="max-w-[192px] w-full py-[60px] pl-[20px] pr-[6px]">
        <nav>
          <div className="nav-items-wrapper">
            <span className="flex py-[6px] px-[10px] text-[11px] font-bold leading-[1em] text-[#949BA4] mb-[3px]">
              User Settings
            </span>
            <div className="py-[6px] px-[10px] text-[16px] font-medium leading-[20px] bg-[#4E505899] rounded-[4px] text-[#F2F3F5] mb-[3px] selected" aria-label="My Account">
              My Account
            </div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Profiles">Profiles</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Content &amp; Social">Content &amp; Social</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Data &amp; Privacy">Data &amp; Privacy</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Family Centre">Family Centre</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" tabindex="-1">Authorised Apps</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Devices">Devices</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Connections">Connections</div>
            <div className="flex py-[6px] px-[10px] text-[16px] font-medium  leading-[20px] transition-all duration-300 cursor-pointer rounded-[4px] mb-[3px] text-[#B5BAC1] hover:bg-[var(--bgnew)]" aria-label="Clips">Clips</div>
          </div>
        </nav>
      </div>
    </div>
  );
}
