"use client";

import { useState, useEffect } from "react";
import InquiryDrawer from "@/components/forms/InquiryDrawer";
import { resort } from "@/lib/resortData";

export default function LeadCapture() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsDrawerOpen(true);
    window.addEventListener("openLeadCapture", handleOpen);
    return () => window.removeEventListener("openLeadCapture", handleOpen);
  }, []);

  return (
    <>
      {/* Floating Action Button (Always visible on mobile, visible on desktop as well) */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 group flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
        
        {/* Tooltip for desktop */}
        <span className="absolute right-full mr-4 bg-forest-deep text-cream-warm text-xs px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
          Chat with Reservations
        </span>
      </button>

      {/* The actual drawer component */}
      <InquiryDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  );
}
