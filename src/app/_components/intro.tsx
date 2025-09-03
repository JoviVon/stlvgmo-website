export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <img
          src="/assets/blog/logos/STLVGMO_wordmark.svg"
          alt="STLVGMO"
          className="h-192 md:h-320 w-auto"
        />
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        🎶 St. Louis Video Game Music Orchestra (STLVGMO) is a community-based orchestra dedicated to bringing the epic soundtracks of video games to life. Based right here in St. Louis, we celebrate the artistry of game music with live performances that connect nostalgia, storytelling, and symphonic sound. Our mission is to share the power of video game music with fans of all ages. 🎮✨
      </h4>
    </section>
  );
}
