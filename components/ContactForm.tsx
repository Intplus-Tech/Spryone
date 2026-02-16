import Image from "next/image";

const contacts = [
  {
    id: "Phone",
    href: "tel:+2348024042030",
    src: "/contact/phone.svg",
    info: "+234 802 404 2030",
  },
  {
    id: "Mail",
    href: "mailto:team@spryone.com",
    src: "/contact/mail.svg",
    info: "team@spryone.com",
  },
  {
    id: "Address",
    href: "",
    src: "/contact/map-pin.svg",
    info: "80 Sparklight Estate, Ojodu, Lagos.",
  },
]

export const ContactForm = () => {
  return (
    <div className="flex items-center justify-center p-1">
      <div className="w-full max-w-299 bg-black rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[minmax(350px,1fr)_1.5fr] border-6 md:border-8 border-card">
        <div className="p-8 md:p-10 flex flex-col justify-between relative overflow-hidden">
          <div>
            <h2 className="text-sz-28 leading-none text-white font-grotesk mb-3.5">Contact Information</h2>
            <p className="text-sz-18 leading-none font-nuni mb-20 md:mb-28.25">Say something to start a live chat!</p>
            
            <div className="text-sz-16 space-y-8 md:space-y-12.75 mb-24 md:mb-45.75">
              {contacts.map((contact) => (
                <a
                  key={contact.id}
                  href={contact.href}
                  className="flex items-center gap-4 md:gap-6.25"
                  >
                  <Image
                    src={contact.src}
                    alt={contact.id}
                    width={24}
                    height={24}
                    className="w-4 md:w-6"
                  />
                  <span>{contact.info}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex gap-6">
            <Image
              src="/contact/tiktok.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
            <Image
              src="/contact/insta.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
            <Image
              src="/contact/youtube.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
            <Image
              src="/contact/twitter.svg"
              alt=""
              width={30}
              height={30}
              className="w-6 md:w-7.5"
            />
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12 bg-[#1a1a1a]">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400">Name</label>
              <input type="text" className="bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400">Email</label>
              <input type="email" placeholder="abc@" className="bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400">Phone Number</label>
              <input type="text" placeholder="+234 812 345 6789" className="bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs text-gray-400">Product Question</label>
              <select className="bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none appearance-none cursor-pointer">
                <option value="">Select option</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 md:col-span-2">
              <label className="text-xs text-gray-400">Message</label>
              <textarea placeholder="Write your message.." className="bg-transparent border-b border-gray-700 py-2 focus:border-white outline-none transition resize-none" rows={1} />
            </div>

            {/* Newsletter Toggle */}
            <div className="md:col-span-2 flex items-center gap-3 mt-4">
              <div className="w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>
              <span className="text-sm text-gray-400 italic">subscribe to receive the latest news and exclusive offers</span>
            </div>

            {/* reCAPTCHA Placeholder */}
            <div className="md:col-span-2 bg-white rounded-md p-4 flex items-center justify-between text-black max-w-sm mt-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border-2 border-gray-300 rounded" />
                <span className="text-sm">I&apos;m not a robot</span>
              </div>
              <div className="flex flex-col items-center">
                <img src="/captcha-logo.png" alt="" className="w-8" />
                <span className="text-[10px] text-gray-500">Privacy - Terms</span>
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-end mt-8">
              <button type="submit" className="bg-black border border-gray-700 px-10 py-4 rounded-full font-semibold hover:bg-gray-900 transition shadow-lg active:scale-95">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

