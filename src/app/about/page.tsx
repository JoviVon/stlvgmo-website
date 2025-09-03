import Container from "@/app/_components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | STLVGMO",
  description: "Learn more about STLVGMO.",
};

export default function About() {
  return (
    <main>
      <Container>
        <div className="max-w-4xl mx-auto py-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
            About STLVGMO
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              The St. Louis Video Game Music Orchestra (STLVGMO) was founded by
              Jovi Vongnaraj with a simple but powerful idea: to create
              something fresh and exciting for both musicians and audiences in
              St. Louis. After years of playing in traditional ensembles, Jovi
              realized that most orchestras tend to focus on the standard
              classical repertoire. While timeless, those programs often left
              little room for new and unique musical experiences.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              That’s where STLVGMO comes in. We’re an orchestra dedicated
              entirely to performing video game soundtracks—music that is not
              only brilliantly composed, but also deeply connected to the
              stories, characters, and emotions that have shaped generations of
              gamers. From the sweeping scores of epic adventures to the
              nostalgic tunes of classic consoles, our mission is to celebrate
              the artistry of game music and bring it to the concert stage.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Unlike most orchestra groups, STLVGMO is here to offer something
              different: a space where musicians can explore exciting,
              non-traditional repertoire, and where fans of video games can hear
              the music they love performed live by a full ensemble. We believe
              video game music deserves the same spotlight as film scores and
              symphonies—it’s powerful, emotional, and worthy of being shared
              with the community.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              At its heart, the orchestra is a community-based group. We want
              this to be more than just concerts—we want it to be something that
              St. Louis can feel proud of and support as it grows. From the
              musicians who volunteer their time and passion, to the audiences
              who bring their love of gaming and music, this is truly a
              collective effort. Even our identity reflects that spirit: our
              logo was created by local St. Louis artist Julien Leigh Kaufman
              (@tamberwolf), tying our look and feel directly to the creative
              talent in our city.
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Whether you’re a lifelong gamer, a lover of orchestral music, or
              just curious to hear something new, we invite you to join us on
              this journey. Together, we’ll show that the soundtrack of gaming
              is more than just background music.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
