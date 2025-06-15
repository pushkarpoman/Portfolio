import React, { useState, useEffect } from "react";
import { Github, Linkedin, FileText, Instagram, Twitter, Code, User, Mail, MapPin, Phone, MessageCircle, Bot } from "lucide-react";

// Card Components (inline to avoid import issues)
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={className}>
    {children}
  </div>
);

// Button Component (inline to avoid import issues)
const Button = ({ children, className = "", variant = "default", onClick, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };
  
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const skills = [
    { name: "Programming Languages", items: ["C", "C++", "Java", "Python"], icon: "💻" },
    { name: "Web Development", items: ["HTML", "CSS", "JavaScript", "MERN Stack"], icon: "🌐" },
    { name: "Databases", items: ["MySQL", "MongoDB"], icon: "🗄️" },
    { name: "Tools & Platforms", items: ["GitHub", "Postman API", "AWS"], icon: "🛠️" },
    { name: "Additional Skills", items: ["Django", "After Effects", "Adobe Premiere Pro"], icon: "🎨" }
  ];

  const experience = [
    {
      title: "MERN Stack Web Developer",
      company: "Edunet Foundation",
      location: "Pune, India",
      duration: "Jan 2025 - Mar 2025",
      description: "Learned HTML, CSS, JS, NodeJS, ReactJS, Postman API. Led to enhance development skills. Developed Food delivery website.",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"]
    },
    {
      title: "Python Developer",
      company: "Rubicon", 
      location: "Pune, India",
      duration: "Mar 2025 - Apr 2025",
      description: "Learned Python, Django, Tkinter. Developed Ecommerce website.",
      tech: ["Python", "Django", "Tkinter"]
    }
  ];

  const projects = [
    {
      title: "Food Delivery Website (Zomato Clone)",
      description: "Full-stack food delivery application with user authentication, restaurant listings, and order management",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Postman API"]
    },
    {
      title: "PC Builder Website",
      description: "Interactive PC configuration tool allowing users to build custom computer systems",
      tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB"]
    }
  ];

  const achievements = [
    "1st Runner up of Snapchat AR-VR Hackathon Mumbai",
    "1st Runner up at National Level coding Hackathon RV University Bangalore"
  ];

  const resumeContent = {
    contact: {
      phone: "+919322408303",
      email: "pushkarpoman10@gmail.com",
      location: "Pune,Maharashtra,India"
    },
    education: {
      degree: "Bachelor of Engineering in Computer Engineering",
      college: "Zeal College of Engineering and Research",
      university: "Savitribai Phule Pune University (SPPU)",
      duration: "2022 - 2026",
      hsc: "Muktangan English School & Jr college (PVG) - 2021-2022",
      ssc: "Muktangan English School (PVG) - 2019-2020"
    },
    objective: "Seeking a responsible position in an organization, which gives me chance to improve knowledge, enhance my skills and enable me to strive towards the overall development of the organization."
  };

  const generateResumeHTML = () => {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Pushkar Poman - Resume</title>
        <style>
          body { 
            font-family: Arial, sans-serif; 
            margin: 40px; 
            line-height: 1.6; 
            color: #333; 
          }
          .header { 
            text-align: center; 
            border-bottom: 2px solid #333; 
            padding-bottom: 20px; 
            margin-bottom: 30px; 
          }
          .section { 
            margin-bottom: 25px; 
          }
          .section h2 { 
            color: #1e40af; 
            border-bottom: 1px solid #ccc; 
            padding-bottom: 5px; 
          }
          .contact-info { 
            display: flex; 
            justify-content: center; 
            gap: 20px; 
            flex-wrap: wrap; 
            margin-bottom: 20px; 
          }
          .experience-item, .project-item { 
            margin-bottom: 20px; 
            padding: 15px; 
            background: #f9f9f9; 
            border-radius: 5px; 
          }
          .tech-stack { 
            display: flex; 
            flex-wrap: wrap; 
            gap: 10px; 
            margin-top: 10px; 
          }
          .tech-item { 
            background: #1e40af; 
            color: white; 
            padding: 4px 8px; 
            border-radius: 3px; 
            font-size: 12px; 
          }
          ul { 
            margin: 10px 0; 
            padding-left: 20px; 
          }
          @media print { 
            body { margin: 20px; } 
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>PUSHKAR POMAN</h1>
          <div class="contact-info">
            <span>📞 +91 9322408303</span>
            <span>📧 pushkarpoman10@gmail.com</span>
            <span>📍 Pune, Maharashtra, India</span>
          </div>
          <div style="margin-top: 10px;">
            <a href="https://www.linkedin.com/in/pushkar-poman-b05082307/">LinkedIn</a> | 
            <a href="https://github.com/pushkarpoman">GitHub</a> | 
            <a href="https://x.com/PomanPushkar">Twitter</a> | 
            <a href="https://www.instagram.com/pushkarpoman/">Instagram</a>
          </div>
        </div>

        <div class="section">
          <h2>OBJECTIVE</h2>
          <p>Seeking a responsible position in an organization, which gives me chance to improve knowledge, enhance my skills and enable me to strive towards the overall development of the organization.</p>
        </div>

        <div class="section">
          <h2>EDUCATION</h2>
          <div style="margin-bottom: 15px;">
            <strong>Bachelor of Engineering in Computer Engineering</strong> (2022 - 2026)<br>
            Zeal College of Engineering and Research, Maharashtra, India<br>
            Savitribai Phule Pune University (SPPU)
          </div>
          <div style="margin-bottom: 10px;">
            <strong>HSC (Class 12)</strong> - Muktangan English School & Jr college PVG (2021 - 2022)
          </div>
          <div>
            <strong>SSC (Class 10)</strong> - PVG (2019 - 2020)
          </div>
        </div>

        <div class="section">
          <h2>TECHNICAL SKILLS</h2>
          <div style="margin-bottom: 15px;">
            <strong>Proficient:</strong> C, C++, Java, Python, HTML, CSS, JavaScript, MERN Stack, MySQL, MongoDB, GitHub
          </div>
          <div>
            <strong>Familiar:</strong> Django, After Effects, Adobe Premiere Pro, AWS
          </div>
        </div>

        <div class="section">
          <h2>EXPERIENCE</h2>
          ${experience.map(exp => `
            <div class="experience-item">
              <strong>${exp.title}</strong> | ${exp.company}, ${exp.location}<br>
              <em>${exp.duration}</em>
              <ul>
                <li>${exp.description}</li>
              </ul>
              <div class="tech-stack">
                ${exp.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>PROJECTS</h2>
          ${projects.map(project => `
            <div class="project-item">
              <strong>${project.title}</strong>
              <p>${project.description}</p>
              <div class="tech-stack">
                ${project.tech.map(tech => `<span class="tech-item">${tech}</span>`).join('')}
              </div>
            </div>
          `).join('')}
        </div>

        <div class="section">
          <h2>ACHIEVEMENTS</h2>
          <ul>
            ${achievements.map(achievement => `<li>${achievement}</li>`).join('')}
          </ul>
        </div>

        <div class="section">
          <h2>EXTRA-CURRICULAR ACTIVITIES</h2>
          <ul>
            <li>Working at The Esports Club (TEC) Managing events in Pune and Mumbai</li>
            <li>Managing and Handling big events improves leadership quality and teamwork</li>
          </ul>
        </div>

        <div style="text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #ccc;">
          <button onclick="window.print()" style="background: #1e40af; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">
            Print Resume
          </button>
        </div>
      </body>
      </html>
    `;
  };

  const handleViewResume = () => {
    const resumeWindow = window.open('', '_blank', 'width=800,height=900');
    if (resumeWindow) {
      resumeWindow.document.write(generateResumeHTML());
      resumeWindow.document.close();
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Subtle Background Pattern */}
      <div className="fixed inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} 
        />
      </div>

      <main className="relative z-10">
        {/* Header Section */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <nav className="flex justify-between items-center">
              <div className="text-2xl font-bold text-gray-900">Pushkar Poman</div>
              <div className="hidden md:flex space-x-8">
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Experience
                </button>
                <button 
                  onClick={() => scrollToSection('skills')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Skills
                </button>
                <button 
                  onClick={() => scrollToSection('projects')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Projects
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-white py-20">
          <div className={`max-w-6xl mx-auto px-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  MERN Stack Web Developer &
                  <span className="text-blue-600 block">Software Engineer</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {resumeContent.objective}
                </p>
                
                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{resumeContent.contact.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    <span>{resumeContent.contact.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    <span>{resumeContent.contact.email}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={handleViewResume}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    View Resume
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => scrollToSection('contact')}
                    className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg transition-all duration-300"
                  >
                    Get In Touch
                  </Button>
                </div>
              </div>
              
              {/* Professional Avatar/Image */}
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <User className="w-32 h-32 text-white opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Overview</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Currently pursuing Bachelor of Engineering in Computer Engineering at Zeal College of Engineering and Research, 
                  affiliated with Savitribai Phule Pune University. Completed my schooling and Jr college from Muktangan English School & Jr college(PVG) HSC & SSC. I have hands-on experience in MERN stack development 
                  and Python programming through internships at Edunet Foundation and Rubicon.
                </p>
                
                <p className="text-gray-600 leading-relaxed">
                  I specialize in full-stack web development with strong proficiency in React.js, Node.js, and database management. 
                  My recent projects include a food delivery application (Zomato clone) and a PC builder website, 
                  demonstrating my ability to create complex, user-friendly applications.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Education & Achievements</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-900">{resumeContent.education.degree}</h4>
                    <p className="text-gray-600">{resumeContent.education.college}</p>
                    <p className="text-gray-500">{resumeContent.education.university}</p>
                    <p className="text-sm text-gray-500">{resumeContent.education.duration}</p>
                    <h4 className="text-gray-700">HSC {resumeContent.education.hsc}</h4>
                    <h4 className="text-gray-700">SSC {resumeContent.education.ssc}</h4>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Recent Achievements</h4>
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center mb-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillCategory, index) => (
                <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{skillCategory.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{skillCategory.name}</h3>
                    </div>
                    <div className="space-y-2">
                      {skillCategory.items.map((skill, skillIndex) => (
                        <div key={skillIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                          <span className="text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <p className="text-blue-600 font-medium">{exp.company} • {exp.location}</p>
                      </div>
                      <span className="text-gray-500 mt-2 md:mt-0">{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <Code className="w-6 h-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Extra-curricular Activities */}
            <div className="mt-16">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Leadership & Activities</h3>
              <Card className="border border-gray-200">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">The Esports Club (TEC)</h4>
                      <p className="text-gray-600">
                        Working at The Esports Club managing events in Pune and Mumbai. 
                        Managing and handling big events improves leadership quality and teamwork skills.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Hackathon Achievements</h4>
                      <div className="space-y-2">
                        {achievements.map((achievement, index) => (
                          <div key={index} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                            <span className="text-gray-600">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600">
                I'm always interested in new opportunities and collaborations
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { href: "https://github.com/pushkarpoman", icon: Github, label: "GitHub", color: "hover:bg-gray-800" },
                { href: "https://www.linkedin.com/in/pushkar-poman-b05082307/", icon: Linkedin, label: "LinkedIn", color: "hover:bg-blue-600" },
                { href: "https://www.instagram.com/pushkarpoman/?utm_source=ig_web_button_share_sheet", icon: Instagram, label: "Instagram", color: "hover:bg-pink-600" },
                { href: "https://x.com/PomanPushkar?t=9JbPeO85GJeVSfBDdelUJA&s=09", icon: Twitter, label: "Twitter", color: "hover:bg-blue-400" },
                { href: "https://discord.gg/discordapp.com/users/755377738478649414", icon: Bot, label: "Discord", color: "hover:bg-indigo-600" }
              ].map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className={`
                    bg-gray-100 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg
                    transition-all duration-300 hover:text-white ${social.color}
                    hover:shadow-md hover:scale-105
                  `}>
                    <social.icon className="w-5 h-5 mr-2" />
                    {social.label}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold mb-4">Pushkar Poman</h3>
            <p className="text-gray-400 mb-6">Web Developer & Software Engineer</p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-500">
                © 2025 Pushkar Poman. Available for exciting opportunities.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}