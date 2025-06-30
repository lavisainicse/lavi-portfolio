import React from "react";

const certifications = [
  { name: "C Programming Certification", issuer: "Quick Heal" },
  { name: "Python Programming Certification", issuer: "Quick Heal" },
  { name: "Java Programming Certification", issuer: "Quick Heal" },
  { name: "Network Defense Essentials", issuer: "EC-Council" },
  { name: "Introduction to Cyber Security", issuer: "Cisco Networking Academy" },
  { name: "Advanced Networking & Basics of Information Security", issuer: "Quick Heal Academy" },
];

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-12 text-center text-4xl font-bold">About Me</h1>
      
      <div className="mx-auto max-w-3xl space-y-6 text-lg text-gray-300">
        <p>
          Hi, I&apos;m Lavi Saini — a cybersecurity engineer by qualification, a seeker by soul, and a firm believer that both digital systems and human consciousness need protection, awareness, and balance.
        </p>
        <p>
          My journey into cybersecurity began with fascination—how data flows, how systems connect, and how attackers think. I pursued my B.Tech in Cyber Security not just to learn tools, but to understand the mind of the system. Over time, I gained hands-on experience in penetration testing, network monitoring, and ethical hacking, using tools like Kali Linux, Burp Suite, Nmap, Wireshark, and more. I&apos;ve worked on real-world simulations, interned with Red Teams, and constantly explore new methods to secure the digital world.
        </p>
        <p>
          But while I&apos;ve always been immersed in firewalls and payloads, I also found myself drawn inward—to the spiritual firewall within.
        </p>
        <p>
          Alongside my technical journey, I began exploring meditation, ancient mantras, energy work, and the power of inner silence. I started noticing patterns, synchronicities like angel numbers (111, 222, 555), and felt a strong inner calling to combine discipline with devotion.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="mb-8 text-center text-3xl font-semibold">Certifications</h2>
        <div className="mx-auto max-w-2xl">
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li key={cert.name} className="rounded-lg bg-gray-800 p-4">
                <h3 className="font-bold">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 