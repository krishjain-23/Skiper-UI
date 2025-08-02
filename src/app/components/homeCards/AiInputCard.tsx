'use client';

import React from 'react';
import {
  LucideSparkles,
  LucideSend,
  LucidePaperclip,
  LucideGlobe,
} from 'lucide-react';

const AiInputCard: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-4xl rounded-[24px] border p-2 shadow-sm md:rounded-t-[44px]">
      <div className="relative mx-auto flex w-full bg-blue-50 flex-col rounded-[24px] border p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
        
        {/* Badge */}
        <div className="inline-flex items-center px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground absolute left-4 top-6 rounded-[14px] border  text-base md:left-6">
          <LucideSparkles className="fill-[#EEBDE0] stroke-1  mr-1" />
          Latest component
        </div>

        {/* Header Text */}
        <div className="flex flex-col justify-center pb-2 pl-4 pt-14 md:items-center">
          <div className="flex gap-2">
            <div>
              <h4 className="text-4xl font-bold">AI Input</h4>
              <a
                className="flex items-center gap-1"
                href="/docs/components/popover-form"
              >
                Seamless AI Chat Input box
              </a>
            </div>
          </div>
        </div>

        {/* Input Container */}
        <div className="flex w-full items-center justify-center gap-4">
          <div className="w-full py-4">
            <div className="relative max-w-xl border rounded-[22px]  p-1 w-full mx-auto">
              <div className="relative rounded-2xl border bg-gray-300 flex flex-col">
                
                {/* Textarea */}
                <div className="overflow-y-auto max-h-[164px]">
                  <div className="relative">
                    <textarea
                      className="flex min-h-[80px] text-sm w-full rounded-2xl rounded-b-none px-4 py-3 border-none resize-none leading-[1.2] focus-visible:outline-none focus-visible:ring-0"
                      id="ai-input-04"
                      placeholder=""
                      style={{ height: '80px' }}
                    />
                    <div className="absolute left-4 top-3 pointer-events-none text-sm ">
                      Search the web...
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="h-12 rounded-b-xl relative flex items-center justify-between px-3">
                  
                  {/* Left: File & Search */}
                  <div className="flex items-center gap-2">
                    <label className="cursor-pointer rounded-full p-2">
                      <input type="file" className="hidden" />
                      <LucidePaperclip className="w-4 h-4" />
                    </label>

                    <button
                      type="button"
                      className="rounded-full transition-all flex items-center gap-2 px-1.5 py-1 border h-8 bg-[#ff3f17]/15 border-[#ff3f17] text-[#ff3f17]"
                    >
                      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <div style={{ transform: 'scale(1.1) rotate(180deg)' }}>
                          <LucideGlobe className="w-4 h-4 text-[#ff3f17]" />
                        </div>
                      </div>
                      <span className="text-sm whitespace-nowrap text-[#ff3f17]">
                        Search
                      </span>
                    </button>
                  </div>

                  {/* Right: Send */}
                  <button
                    type="button"
                    className="rounded-full p-2 transition-colors"
                  >
                    <LucideSend className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default AiInputCard;
