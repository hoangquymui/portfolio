import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Muiiiiiii{" "}
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              Hoang Quy
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground  max-2-2xl opacity-0 animate-fade-in-delay-3">
            I am a passionate web developer with a focus on creating engaging
            and responsive user experiences. I love building modern web
            applications using the latest technologies and best practices.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary"/>
      </div>
    </section>
  );
};
