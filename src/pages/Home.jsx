import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { StarBackground } from "@/components/StarBackground.jsx";
import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection.jsx";
import { AboutMe } from "@/components/AboutMe";
import { SkillsSection } from "@/components/SkillsSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Backgound Effect */}
      <StarBackground />
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutMe />
        <SkillsSection />
        
      </main>

      {/* Footer */}
    </div>
  );
};
