"use client";

import * as React from "react";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function PhoneMock({ children, className }: Props) {
  return (
    <div className={`relative mx-auto w-[320px] md:w-[360px] aspect-[9/19.5] phone-frame ${className ?? ""}`}>
      <div className="phone-notch" />
      <div className="absolute inset-[10px] phone-screen flex items-center justify-center">
        {children /* optional inner preview; safe to omit */}
      </div>
    </div>
  );
}