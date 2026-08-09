const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/videos/hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
};

export default BackgroundVideo;