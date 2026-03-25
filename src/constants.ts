import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Globe, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  FileText,
  ExternalLink,
  Award,
  BookOpen,
  Briefcase,
  User,
  CheckCircle2,
  Layers,
  Search
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Shubhan Sriram",
  role: "Aspiring Software Developer | Computer Science Student",
  location: "Coimbatore, Tamil Nadu, India",
  email: "shubhan.career@gmail.com",
  phone: "+91 9042691280",
  github: "https://github.com/Shubhan-12",
  linkedin: "https://linkedin.com/in/shubhan-sriram-230677213",
  intro: "Passionate developer skilled in Java, Python and Data Structures. I build applications and data-driven solutions.",
  about: "Computer Science student at Lovely Professional University with strong knowledge of Java, Python, and Data Structures & Algorithms. Passionate about building practical applications and solving real-world problems through software development. Experienced in building mobile applications, database systems, and data analysis solutions."
};

export const SKILLS = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Java", "Python", "C", "R"]
  },
  {
    category: "Technologies",
    icon: Cpu,
    items: ["Power BI", "Tableau", "SQL", "PL/SQL", "Git", "GitHub", "REST APIs", "Spring Boot"]
  },
  {
    category: "Domain Skills",
    icon: Layers,
    items: ["Data Analysis", "Data Visualization", "Data Structures & Algorithms", "Web Development", "Database Management", "Web Scraping"]
  },
  {
    category: "Soft Skills",
    icon: User,
    items: ["Adaptability", "Collaboration", "Time Management", "Critical Thinking", "Problem Solving"]
  }
];

export const PROJECTS = [
  {
    title: "All About Annur App",
    tech: ["React Native", "Context API", "REST APIs", "JavaScript", "JSON"],
    image: "/annur.png",
    description: "Mobile application providing information on schools, hospitals, banks, shops, and entertainment in Annur. Includes dynamic theming and modular UI design.",
    github: "https://github.com/Shubhan-12",
    demo: "#",
    category: "Mobile"
  },
  {
    title: "Railway Reservation System",
    tech: ["Python", "MySQL", "Tkinter"],
    image: "/railway.png",
    description: "Desktop application for railway ticket booking, cancellations, and schedule management with role-based login and secure database storage.",
    github: "https://github.com/Shubhan-12",
    category: "Desktop"
  },
  {
    title: "Smart File Organizer",
    tech: ["Java", "Data Structures", "File I/O"],
    description: "Console-based file management system that categorizes files automatically based on type, size, and creation date using core DSA concepts.",
    github: "https://github.com/Shubhan-12",
    category: "CLI"
  }
];

export const INTERNSHIP = {
  title: "Summer Training Internship",
  company: "LPU Career Services",
  period: "June 2025 – July 2025",
  description: "Practiced and applied core DSA concepts including arrays, linked lists, stacks, queues, trees, graphs, recursion, and dynamic programming. Developed a Java-based Smart File Explorer that efficiently organizes and manages files."
};

export const CERTIFICATES = [
  {
    title: "Microsoft Power BI Professional Data Analyst",
    issuer: "Coursera - Microsoft",
    date: "Sept 2025",
    link: "/c8.png",
    image: "/c8.png"
  },
  {
    title: "Programming using Java",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    link: "/javadsa.png",
    image: "/javadsa.png"
  },
  {
    title: "Database Managemant ",
    issuer: "Infosys Springboard",
    date: "Jan 2024",
    link: "/Database.png",
    image: "/Database.png"
  }
];

export const EDUCATION = [
  {
    school: "Lovely Professional University",
    degree: "Bachelor of Technology — Computer Science and Engineering",
    score: "CGPA: 7.38",
    period: "2023 - Present",
    location: "Punjab, India"
  },
  {
    school: "Velammal Bodhi Campus",
    degree: "12th Grade",
    score: "Percentage: 66%",
    period: "2022 - 2023",
    location: "Coimbatore, Tamil Nadu"
  },
  {
    school: "Ambal Thulasi Public School",
    degree: "10th Grade",
    score: "Percentage: 91%",
    period: "2020 - 2021",
    location: "Coimbatore, Tamil Nadu"
  }
];

export const ACHIEVEMENTS = [
  {
    title: "Solved 100+ DSA Problems",
    description: "Solved multiple problems in every difficulty level in Python and Java."
  },
  {
    title: "Finalist in Code-A-Haunt Hackathon",
    description: "Shortlisted for the final round for our 'Real-time multi-language translator' application."
  }
];
