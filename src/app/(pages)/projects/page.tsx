import React from "react";
import { ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "AI Malware Detection",
    description: "Developed a machine learning model to detect and classify malware with high accuracy. This project involved data preprocessing, model training, and performance evaluation.",
    tags: ["Python", "TensorFlow", "Scikit-learn", "AI/ML"],
  },
  {
    title: "Vulnerability Assessment & Penetration Testing (VAPT) Reports",
    description: "Conducted comprehensive VAPT on various web applications, identifying critical vulnerabilities and providing detailed reports with remediation strategies.",
    tags: ["Burp Suite", "OWASP ZAP", "Nmap", "Reporting"],
  },
  {
    title: "Red Team Internship Simulation",
    description: "Participated in a simulated Red Team environment, executing attack scenarios, performing reconnaissance, and exploiting vulnerabilities to test organizational defenses.",
    tags: ["Metasploit", "Kali Linux", "Threat Intelligence", "Teamwork"],
  },
];

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold">My Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col rounded-lg bg-gray-800 p-6 transition-all duration-300 hover:scale-105 hover:bg-gray-700"
          >
            <div className="mb-4 flex items-center">
              <ShieldCheck className="mr-3 h-8 w-8 text-blue-400" />
              <h2 className="text-2xl font-bold">{project.title}</h2>
            </div>
            <p className="flex-grow text-gray-300">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-700 px-3 py-1 text-sm text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage; 