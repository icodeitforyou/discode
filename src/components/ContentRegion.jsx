import React from "react";

export default function ContentRegion() {
  return (
    <div className="max-w-[65%] w-full flex h-screen overflow-auto bg-[#313338]">
      <div className="max-w-full w-full">
        <div className="max-w-[60%] min-w-[660px] w-full relative pt-[40px] px-[40px] pb-[80px]">
          <div className="flex justify-center flex-col gap-[32px] relative mb-[32px]">
            <h3 className="text-[24px] leading-[30px] text-[#F2F3F5]">My Account</h3>
            <div className="flex">
              <div className="text-[16px] font-medium leading-[20px] transition-all duration-300 cursor-pointer text-[#F2F3F5] pb-[12px] border-b-[3px] border-b-[#4751c4]">Security</div>
            </div>
            <div className="absolute left-0 bottom-[1px] w-full h-[1px] bg-[#949ba48a] -z-[-1]"></div>
          </div>
          <div className="rounded-[10px] overflow-hidden bg-[#1E1F22]">
            <div className="bg-[#c64362] h-[100px]"></div>
            <div className="flex max-w-full mx-[16px] gap-[30px] mt-[-20px]">
              <div className="p-[5px] w-[90px] h-[90px] min-w-[90px] rounded-[50%] bg-[#1E1F22] overflow-hidden">
              <svg className="rounded-[50%] overflow-hidden" width="80" height="80" xmlns="http://www.w3.org/2000/svg"> <rect width="80" height="80" fill="#f3f4f6" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="16" font-family="Arial, sans-serif" fill="#111827">80 X 80</text> </svg>
              </div>
              <div className="flex w-[calc(100%-120px)] items-center justify-between pt-[20px]">
              <span className="inline-block text-[20px] leading-[24px] font-semibold text-[#F2F3F5]">CHILLAX Gaming</span>
              <button className="inline-block text-[12px] leading-[16px] font-medium text-[#F2F3F5] py-[2px] px-[16px] bg-[#4751c4] rounded-[3px] h-[32px]">Edit User Profile</button>
              </div>
            </div>
            <div className="flex flex-col gap-[24px] max-w-[calc(100%-32px)] w-full mx-auto mt-[16px] mb-[16px] bg-[#2b2d31] p-[16px] rounded-[10px] overflow-hidden">
              <div className="flex items-center justify-between">
                <div className="">
                <span className="flex text-[11px] font-bold leading-[1em] text-[#949BA4] mb-[4px]">Display Name</span>
                <div className="text-[16px] font-normal leading-[20px] text-[#F2F3F5]">CHILLAX Gaming</div>
                </div>
                <div className="">
                <button className="inline-block text-[12px] leading-[16px] font-normal text-[#F2F3F5] py-[2px] px-[16px] bg-[#4E505899] rounded-[3px] h-[32px]">Edit</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                <span className="flex text-[11px] font-bold leading-[1em] text-[#949BA4] mb-[4px]">Username</span>
                <div className="text-[16px] font-normal leading-[20px] text-[#F2F3F5]">chillaxgaming7270</div>
                </div>
                <div className="">
                <button className="inline-block text-[12px] leading-[16px] font-normal text-[#F2F3F5] py-[2px] px-[16px] bg-[#4E505899] rounded-[3px] h-[32px]">Edit</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                <span className="flex text-[11px] font-bold leading-[1em] text-[#949BA4] mb-[4px]">Email</span>
                <div className="text-[16px] font-normal leading-[20px] text-[#F2F3F5]">*************@gmail.com</div>
                </div>
                <div className="">
                <button className="inline-block text-[12px] leading-[16px] font-normal text-[#F2F3F5] py-[2px] px-[16px] bg-[#4E505899] rounded-[3px] h-[32px]">Edit</button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="">
                <span className="flex text-[11px] font-bold leading-[1em] text-[#949BA4] mb-[4px]">Phone Number</span>
                <div className="text-[16px] font-normal leading-[20px] text-[#F2F3F5]">*********0178</div>
                </div>
                <div className="">
                <button className="inline-block text-[12px] leading-[16px] font-normal text-[#F2F3F5] py-[2px] px-[16px] bg-[#4E505899] rounded-[3px] h-[32px]">Edit</button>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom-content mt-[40px]">
          <div class="">
            <h2 className="text-[16px] font-normal leading-[20px] text-[#F2F3F5] mb-[20px]">Password and Authentication</h2>
            <button className="inline-block text-[12px] leading-[16px] font-normal text-[#F2F3F5] py-[2px] px-[16px] bg-[#4751c4] rounded-[3px] h-[32px]">Change Password</button>
          </div>
          <div className="mt-[20px]">
          <h2 className="text-[12px] font-bold leading-[1em] text-[#949BA4] mb-[10px]">Account Removal</h2>
          <div className="text-[10px] font-normal leading-[1em] text-[#949BA4] mb-[15px]">Disabling your account means you can recover it at any time after taking this action.</div>
          <button className="inline-block text-[12px] leading-[16px] font-normal text-[#F2F3F5] py-[2px] px-[16px] bg-[#DA373C] rounded-[3px] h-[32px]">Delete Account</button>
          </div>

          </div>
        </div>
      </div>
    </div>
  );
}
