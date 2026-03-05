import CTAStrip from "@/sections/CTAStrip/CTAStrip";
import Currently from "@/sections/Currently/Currently";
import FeaturedProjects from "@/sections/FeaturedProjects/FeaturedProjects";
import FeaturedWork from "@/sections/FeaturedWork/FeaturedWork";
import HomepageHero from "@/sections/HomepageHero/HomepageHero";
import IntroStrip from "@/sections/IntroStrip/IntroStrip";
import SkillsStrip from "@/sections/SkillsStrip/SkillsStrip";

export default function Home() {
  return (
    <>
      <HomepageHero />
      <IntroStrip />
      <FeaturedWork />
      <Currently />
      <FeaturedProjects />
      <SkillsStrip />
      <CTAStrip />
    </>
  );
}
