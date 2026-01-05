export function Intro() {
  return (
    <section className="flex flex-col items-center mt-16 mb-16 md:mb-12">
      <div className="mb-8 md:mb-12 animate-fade-in">
        <img
          src="/assets/blog/logos/STLVGMO_wordmark.svg"
          alt="St. Louis Video Game Music Orchestra - STLVGMO Logo"
          className="h-96 md:h-128 lg:h-160 w-auto mx-auto"
        />
      </div>
      <h4 className="text-center text-lg md:text-xl max-w-4xl px-4 animate-slide-up">
        🎶 St. Louis Video Game Music Orchestra (STLVGMO) is a community-based
        orchestra dedicated to bringing the epic soundtracks of video games to
        life. Based right here in St. Louis, we celebrate the artistry of game
        music with live performances that connect nostalgia, storytelling, and
        symphonic sound. Our mission is to share the power of video game music
        with fans of all ages. 🎮✨
      </h4>
    </section>
  );
}
