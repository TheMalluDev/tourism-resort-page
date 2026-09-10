"use client";

import { useForm } from "react-hook-form";
import { resort, villas } from "@/lib/resortData";

export default function InquiryDrawer({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Construct WhatsApp Message
    const msg = `Hi ${resort.name}, I'd like to inquire about *${data.villaPreference}* from ${data.checkIn} to ${data.checkOut}. 
    
Name: ${data.name}
Message: ${data.message}`;

    // Clean phone number from config
    const whatsappNumber = resort.whatsapp.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
    onClose(); // Close the drawer after submission
  };

  // Base classes for the drawer wrapper
  const drawerClasses = `fixed inset-y-0 right-0 z-[100] w-full md:w-[450px] bg-forest-deep border-l border-mist-sage/20 shadow-2xl transform transition-transform duration-500 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } md:bottom-0 md:top-0 bottom-0 top-auto md:translate-y-0 h-[85vh] md:h-full rounded-t-2xl md:rounded-none flex flex-col`;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-forest-deep/60 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={drawerClasses}>
        <div className="flex justify-between items-center p-6 border-b border-mist-sage/20">
          <h2 className="text-2xl font-serif text-cream-warm">Reserve Your Stay</h2>
          <button
            onClick={onClose}
            className="text-mist-sage hover:text-gold-bamboo transition-colors text-3xl font-light"
          >
            &times;
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow">
          <p className="text-mist-sage font-light text-sm mb-8">
            Complete the form below to connect directly with our reservations team via WhatsApp.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist-sage mb-2">
                Full Name *
              </label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-transparent border-b border-mist-sage/40 pb-2 text-cream-warm focus:outline-none focus:border-gold-bamboo transition-colors"
                placeholder="Jane Doe"
              />
              {errors.name && <span className="text-red-400 text-xs mt-1">This field is required</span>}
            </div>

            {/* Villa Preference */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-mist-sage mb-2 mt-2">
                Villa Preference
              </label>
              <select
                {...register("villaPreference")}
                className="w-full bg-transparent border-b border-mist-sage/40 pb-2 text-cream-warm focus:outline-none focus:border-gold-bamboo transition-colors appearance-none"
              >
                <option value="Any available villa" className="bg-forest-deep text-cream-warm">
                  Any available villa
                </option>
                {villas.map((villa) => (
                  <option key={villa.id} value={villa.name} className="bg-forest-deep text-cream-warm">
                    {villa.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-sage mb-2">
                  Check-in
                </label>
                <input
                  type="date"
                  {...register("checkIn")}
                  className="w-full bg-transparent border-b border-mist-sage/40 pb-2 text-cream-warm focus:outline-none focus:border-gold-bamboo transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-mist-sage mb-2">
                  Check-out
                </label>
                <input
                  type="date"
                  {...register("checkOut")}
                  className="w-full bg-transparent border-b border-mist-sage/40 pb-2 text-cream-warm focus:outline-none focus:border-gold-bamboo transition-colors"
                />
              </div>
            </div>

            {/* Message */}
            <div className="mt-2">
              <label className="block text-xs uppercase tracking-widest text-mist-sage mb-2">
                Special Requests
              </label>
              <textarea
                {...register("message")}
                rows={3}
                className="w-full bg-transparent border-b border-mist-sage/40 pb-2 text-cream-warm focus:outline-none focus:border-gold-bamboo transition-colors resize-none"
                placeholder="Any dietary requirements or special occasions?"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-8 bg-gold-bamboo text-forest-deep py-4 uppercase tracking-widest font-medium hover:bg-cream-warm transition-colors duration-300"
            >
              Continue to WhatsApp
            </button>
          </form>
          
          <div className="mt-8 text-center text-xs text-mist-sage">
            Or email us directly at <br/>
            <a href={`mailto:${resort.email}`} className="text-gold-bamboo mt-1 inline-block">{resort.email}</a>
          </div>
        </div>
      </div>
    </>
  );
}
