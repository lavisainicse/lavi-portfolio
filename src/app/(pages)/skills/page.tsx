import React from "react";

const skills = [
  "Manual Web Application VAPT",
  "Network VAPT",
  "Bug Hunting",
  "Log Monitoring & Analysis",
  "Threat Hunting & Intelligence",
  "Reporting & Documentation",
];

const tools = [
  "Burp Suite",
  "OSINT",
  "Nmap",
  "Wireshark",
  "MetaSploit Frameworks",
  "OWASP ZAP",
  "Qualys",
  "Kali Linux",
  "Nikto",
];

const SkillsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold">Skills & Tools</h1>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Skills</h2>
          <ul className="space-y-4">
            {skills.map((skill) => (
              <li key={skill} className="rounded-lg bg-gray-800 p-4">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mb-6 text-2xl font-semibold">Tools</h2>
          <ul className="space-y-4">
            {tools.map((tool) => (
              <li key={tool} className="rounded-lg bg-gray-800 p-4">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage; 