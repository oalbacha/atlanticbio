export default function VideoSection({
  videoSrc,
  title,
  ariaLabel,
}: {
  videoSrc: string;
  title: string;
  ariaLabel: string;
}) {
  return (
    <section className="relative left-1/2 right-1/2 -mt-8 w-screen -translate-x-1/2 overflow-hidden lg:-mt-10">
      <div className="relative min-h-[88svh] w-3/4 mx-auto bg-[#09100d]">
        <video
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/media/hero-poster.jpg"
          aria-label={ariaLabel}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,8,0.18),rgba(7,10,8,0.32)_32%,rgba(7,10,8,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(207,176,109,0.18),transparent_22%),radial-gradient(circle_at_82%_18%,rgba(108,149,96,0.14),transparent_24%)]" />

        <div className="relative mx-auto flex min-h-[88svh] max-w-7xl flex-col px-6 pb-6 lg:px-8 lg:pb-8">
          <div className="flex-1" />

          <div className="max-w-4xl space-y-6 pb-8 lg:pb-10">
            <h1 className="capitalize absolute inset-0 mx-auto flex max-w-[15ch] items-center justify-center text-center font-heading text-5xl leading-[1.08] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)] sm:max-w-none sm:whitespace-nowrap sm:text-[2rem] sm:leading-tight lg:text-7xl lg:leading-[1.03]">
              {title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
