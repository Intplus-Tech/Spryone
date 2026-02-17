"use client";
import { useRef, useState } from "react";

export const VideoPlayer = ({ src, poster }: { src: string; poster: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative group max-w-332.25 aspect-1320/640 mx-auto rounded-2xl md:rounded-[20px] lg:rounded-[40px] mb-8 md:mb-12 lg:mb-18.75 overflow-hidden">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto object-cover"
        onEnded={() => setIsPlaying(false)}
        onClick={togglePlay}
      />
      
      <button
        onClick={togglePlay}
        className={`absolute inset-0 m-auto w-14 md:w-24 lg:w-35 aspect-square bg-black rounded-full flex items-center justify-center transition-all duration-300 ${
          isPlaying ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
        } group-hover:opacity-100`}
      >
        {isPlaying ? (
          <svg className="w-5 md:w-7 lg:w-9 text-brand" width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="5" y="4" width="8" height="28" rx="2" fill="currentColor"/>
            <rect x="20" y="4" width="8" height="28" rx="2" fill="currentColor"/>
          </svg>
        ) : (
          <svg className="w-5 md:w-7 lg:w-9 text-brand translate-x-0.5" width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.7473 13.7932L7.41453 0.653555C6.65254 0.218898 5.7888 -0.00654926 4.91118 0.000144844C4.03356 0.00683895 3.17338 0.245436 2.41813 0.691666C1.68233 1.11171 1.07103 1.71867 0.646313 2.45088C0.2216 3.18308 -0.00138615 4.01445 6.48331e-06 4.86053V31.1398C-0.00138615 31.9859 0.2216 32.8173 0.646313 33.5495C1.07103 34.2817 1.68233 34.8886 2.41813 35.3087C3.17345 35.7547 4.03361 35.9932 4.91118 35.9999C5.78876 36.0065 6.65247 35.7812 7.41453 35.3468L30.7473 22.2071C31.4998 21.7911 32.127 21.1815 32.5637 20.4417C33.0005 19.7019 33.2308 18.8588 33.2308 18.0002C33.2308 17.1415 33.0005 16.2985 32.5637 15.5587C32.127 14.8189 31.4998 14.2093 30.7473 13.7932Z" fill="currentColor"/>
          </svg>
        )}
      </button>
    </div>
  );
};