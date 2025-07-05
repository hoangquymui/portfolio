import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Languages
  {
    name: "Python",
    level: 95,
    category: "Languages",
  },
  {
    name: " SQL",
    level: 90,
    category: "Languages",
  },
  {
    name: "Java",
    level: 85,
    category: "Languages",
  },
  {
    name: "C++",
    level: 80,
    category: "Languages",
  },

  // Tools & Technologies
  {
    name: "Pandas",
    level: 90,
    category: "Libraries & Frameworks",
  },
  {
    name: "NumPy",
    level: 90,
    category: "Libraries & Frameworks",
  },
  {
    name: "Seaborn",
    level: 85,
    category: "Libraries & Frameworks",
  },
  {
    name: "Scikit-learn",
    level: 85,
    category: "Libraries & Frameworks",
  },
  {
    name: "TensorFlow",
    level: 80,
    category: "Libraries & Frameworks",
  },
  {
    name: "PyTorch",
    level: 80,
    category: "Libraries & Frameworks",
  },
  {
    name: "Keras",
    level: 80,
    category: "Libraries & Frameworks",
  },
  {
    name: "Hugging Face",
    level: 75,
    category: "Libraries & Frameworks",
  },

  // Big Data
  {
    name: "Spark",
    level: 80,
    category: "Big Data",
  },

  // Tools
  {
    name: "Git",
    level: 85,
    category: "Tools",
  },
  {
    name: "Jupyter Notebook",
    level: 90,
    category: "Tools",
  },
  {
    name: "VS Code",
    level: 90,
    category: "Tools",
  },
];

const categorys = [
  "All",
  "Languages",
  "Libraries & Frameworks",
  "Big Data",
  "Tools",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = skills.filter((skill) => {
    return activeCategory === "All" || skill.category === activeCategory;
  });

  return (
    <section
      id="skills"
      className="py-15 px-24 relative bg-background/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorys.map((category, key) => (
            <button key={key}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "px-5 py-2 rounded-full transitionn-colors duration-300 capitalize",
              activeCategory === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary/70 text-foreground hover:bg-secondary"
            )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key = {key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};
