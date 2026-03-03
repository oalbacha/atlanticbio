export function HeroVideo() {
  return (
    <section className="relative min-h-[80svh] overflow-hidden rounded-3xl border border-border/70 bg-[#0a1012]">
      <video
        className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/media/wonderful-video-poster.jpg"
        aria-label="Atlantic BioGraphite background footage"
      >
        <source src="/media/wonderful-video.mp4" type="video/mp4" />
      </video>

      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-cover bg-center motion-reduce:block"
        style={{ backgroundImage: "url('/media/wonderful-video-poster.jpg')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,11,0.2),rgba(8,10,11,0.78)_60%,rgba(8,10,11,0.95))]" />
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_80%_20%,rgba(93,157,117,0.35),transparent_55%)]" />
    </section>
  )
}
