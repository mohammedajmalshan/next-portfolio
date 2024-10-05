import { GOOGLE_FONT_PROVIDER } from "next/dist/shared/lib/constants";
import React from "react";
import {
  
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo
} from "react-icons/rx";


const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Community</div>
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span>    
                    </p>
                   
                </div>
                <p className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">Social Media</div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        


                        <a  className="text-[15px] ml-[6px]">Linkedin</a>    
                        

                    </p>
                </p>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] ">Contact</div>
                  
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.94721 0.164594C7.66569 0.0238299 7.33431 0.0238302 7.05279 0.164594L0.552786 3.41459C0.214002 3.58399 0 3.93025 0 4.30902V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V4.30902C15 3.93025 14.786 3.58399 14.4472 3.41459L7.94721 0.164594ZM13.5689 4.09349L7.5 1.05902L1.43105 4.09349L7.5 7.29136L13.5689 4.09349ZM1 4.88366V12H14V4.88366L7.70977 8.19813C7.57848 8.26731 7.42152 8.26731 7.29023 8.19813L1 4.88366Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <p className="cursor-pointer text-[15px] ml-[6px]">mohammedajmalshan@yahoo.com</p>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 2.5C4 2.22386 4.22386 2 4.5 2H10.5C10.7761 2 11 2.22386 11 2.5V12.5C11 12.7761 10.7761 13 10.5 13H4.5C4.22386 13 4 12.7761 4 12.5V2.5ZM4.5 1C3.67157 1 3 1.67157 3 2.5V12.5C3 13.3284 3.67157 14 4.5 14H10.5C11.3284 14 12 13.3284 12 12.5V2.5C12 1.67157 11.3284 1 10.5 1H4.5ZM6 11.65C5.8067 11.65 5.65 11.8067 5.65 12C5.65 12.1933 5.8067 12.35 6 12.35H9C9.1933 12.35 9.35 12.1933 9.35 12C9.35 11.8067 9.1933 11.65 9 11.65H6Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                        <p className="cursor-pointer text-[15px] ml-[6px]">+971556478780</p>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; Ajmal Shan 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
