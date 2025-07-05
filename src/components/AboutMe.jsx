import { Code } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="about" className="py-15 px-24 relative">
      <div className="containter mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Data Scientist and Ai Engineer
            </h3>

            <p className="text-muted-foreground">
              Hello! My name is Mui Hoang Quy, and I am a data scientist and AI
              engineer with a passion for leveraging data to drive innovation
              and create impactful solutions.
            </p>

            <p className="text-muted-foreground">
              I have a strong background in data analysis, machine learning, and
              artificial intelligence. My expertise lies in developing scalable
              models and deploying them to solve real-world problems across
              various industries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                href="/resume.pdf"
                download="Mui_Hoang_Quy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Problem-Solving</h4>
                  <p className="text-muted-foreground">
                    Skilled in analyzing requirements and optimizing ML models.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Critical Thinking</h4>
                  <p className="text-muted-foreground">
                    Able to assess algorithms and suggest improvements.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Self-Learning</h4>
                  <p className="text-muted-foreground">
                    Proactively explores and applies new AI technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
