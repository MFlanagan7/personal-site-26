import Currently from "@/sections/Currently/Currently";
import FeaturedWork from "@/sections/FeaturedWork/FeaturedWork";
import HomepageHero from "@/sections/HomepageHero/HomepageHero";
import IntroStrip from "@/sections/IntroStrip/IntroStrip";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <IntroStrip />
      <FeaturedWork />
      <Currently />
    </>
  );
}
