import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 pt-24 pb-12">
      <div className="w-full max-w-2xl px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="p-1 rounded-full bg-gradient-to-tr from-blue-400 via-pink-400 to-purple-400 shadow-lg">
            <Image
              src="/lavi-pick.jpg"
              alt="Lavi Saini profile photo"
              width={220}
              height={220}
              className="rounded-full object-cover border-4 border-white shadow-xl"
              priority
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">Lavi Saini</h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-6">Cybersecurity Analyst | Red Team Enthusiast | Athlete | Spiritual Seeker</p>
        <blockquote className="mb-10 px-4 py-4 bg-gray-100 border-l-4 border-blue-500 italic text-gray-800 shadow-sm">
          “I’m not training for likes or attention.<br />
          I train in silence — so when the moment comes,<br />
          I win the battle with the ease of cutting cake…<br />
          Calm hands, sharp blade, and no mercy.”
        </blockquote>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Education</h2>
          <p>B.Tech in Computer Science (Cybersecurity Specialization)</p>
          <p>Quantum University, Roorkee</p>
          <p>Graduation Year: 2025</p>
          <p>Final Percentage: 72%</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Cybersecurity Skills</h2>
          <ul className="text-left list-disc list-inside mx-auto inline-block">
            <li>Red Teaming & Penetration Testing</li>
            <li>Manual black-box VAPT, OWASP Top 10, Linux privilege escalation, social engineering, CTF player (Pentathon 2025 participant)</li>
          </ul>
          <h3 className="font-medium mt-4">Security Tools:</h3>
          <p>Burp Suite, Nmap, Wireshark, Metasploit, OWASP ZAP, Qualys, OSINT techniques, Kali Linux, Parrot OS</p>
          <h3 className="font-medium mt-4">Programming:</h3>
          <p>Python, C, C++, Java – solid foundation in scripting and automation</p>
          <h3 className="font-medium mt-4">Networking:</h3>
          <p>Deep understanding of TCP/IP, DNS, DHCP, and network protocols</p>
          <h3 className="font-medium mt-4">Malware Analysis & Forensics:</h3>
          <p>Basic static/dynamic analysis, log analysis, and detection techniques</p>
          <h3 className="font-medium mt-4">AI in Cybersecurity:</h3>
          <p>Project on AI-powered Malware Detection System</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Internship & Work Experience</h2>
          <p className="font-medium mt-2">CyberSapiens United LLP – Red Team Intern</p>
          <ul className="text-left list-disc list-inside mx-auto inline-block">
            <li>Performed manual black-box testing on live platforms</li>
            <li>Discovered and reported multiple real-time vulnerabilities</li>
            <li>Gained practical insight into ethical hacking methodologies</li>
          </ul>
          <p className="font-medium mt-4">Tarana Work Abroad Consultancy Pvt. Ltd. – Security Analyst</p>
          <ul className="text-left list-disc list-inside mx-auto inline-block">
            <li>Conducted vulnerability assessments and malware analysis</li>
            <li>Worked on securing network infrastructure</li>
            <li>Collaborated on enhancing incident response protocols</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Certifications</h2>
          <ul className="text-left list-disc list-inside mx-auto inline-block">
            <li>Network Defense Essentials – EC-Council</li>
            <li>Introduction to Cyber Security – Cisco Networking Academy</li>
            <li>Programming Certifications – Quick Heal Academy (C, C++, Java, Python)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Athletics & Discipline</h2>
          <ul className="text-left list-disc list-inside mx-auto inline-block">
            <li>Training for IRONMAN Goa</li>
            <li>Running: 16 km/h</li>
            <li>Cycling: 30 km/h</li>
            <li>Focused on endurance, mental strength, and peak performance</li>
            <li>Practices discipline through structured energy-based routines combining study, sadhna (spiritual practice), and fitness</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Personal Story & Motivation</h2>
          <p>A passionate and emotionally intelligent individual balancing tech, toughness, and tenderness. Overcomes emotional lows, family conflict, and overthinking through sadhna, purpose, and cyber warrior mindset.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🌟 Top 3 Life Goals</h2>
          <ul className="text-left list-disc list-inside mx-auto inline-block">
            <li>Get a cybersecurity job in Red Team/SOC with real impact</li>
            <li>Build a meaningful and mutual relationship with my sole mate</li>
            <li>Successfully complete Ironman Goa, becoming mentally and physically elite</li>
          </ul>
        </section>
        <footer className="mt-12 text-gray-400 text-sm">Made with Next.js & Tailwind CSS</footer>
      </div>
    </main>
  );
} 