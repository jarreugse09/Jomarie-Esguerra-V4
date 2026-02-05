export interface Project {
  id: number;
  title: string;
  description: string;
  overview: string;
  features: string[];
  techStack: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Librag",
    description: "Library Management System",
    overview:
      "Developed a responsive social media application with a robust MongoDB backend, enabling users to create posts, add comments, like content, and upload images seamlessly. The platform was designed with user engagement and content management at its core, supporting real-time interactions across the platform.",
    features: [
      "Implemented JWT authentication and role-/attribute-based access controls (RBAC & ABAC) for secure, granular user permissions.",
      "Optimized backend workflows and database queries to ensure fast performance, scalability, and smooth user experience.",
    ],
    techStack: ["Node.js", "Express", "MongoDB", "JavaScript", "CSS3", "HTML5"],
    imageUrl: "/project_img/library_management.png",
    githubUrl: "https://github.com/jarreugse09/Library-Management",
    liveUrl: "https://librag.vercel.app/",
  },
  {
    id: 2,
    title: "AI-SEE",
    description: "Real-Time Hide-Face Detection",
    overview:
      "Developed a sophisticated real-time, in-browser hide-face detection system leveraging a custom-trained YOLOv8 model. The system processes live video feeds to identify obscured or hidden faces with high accuracy, designed for security and surveillance applications with an intuitive user interface.",
    features: [
      "Implemented live webcam streaming with on-screen detection overlays via a Flask backend and modern web UI.",
      "Added features such as theme toggling, video recording controls, and SOS alert functionality.",
      "Utilized Python, Flask, PyTorch, Ultralytics YOLOv8, and a lightweight HTML/CSS/JS frontend.",
    ],
    techStack: ["Python", "Flask", "JavaScript", "HTML", "CSS", "YOLO"],
    imageUrl: "/project_img/ai_see.png",
    githubUrl: "https://github.com/jarreugse09/Bareface-Hideface-Detection",
    liveUrl: "",
  },
  {
    id: 3,
    title: "Perps",
    description: "Perpetual Help Molino Campus personal chatbot",
    overview:
      "Built an intelligent campus-focused Q&A chatbot powered by the Gemini AI API, designed exclusively to answer academic and administrative queries related to the University of Perpetual Help – Molino Campus. The chatbot provides instant, accurate assistance to students, improving campus engagement and reducing support workload.",

    features: [
      "Developed as a full-stack MERN application with a responsive, chat-style user interface.",
      "Integrated the Gemini AI API to generate context-aware and conversational responses.",
      "Implemented MongoDB-based conversation storage to preserve chat history and maintain response context.",
      "Restricted responses to UPHMC-related topics to ensure accurate and institution-specific information.",
    ],
    techStack: [
      "Gemini AI",
      "TypeScript",
      "Nodejs",
      "MongoDB",
      "React",
      "Tailwind",
    ],
    imageUrl: "/project_img/perps_bot.png",
    githubUrl: "https://github.com/jarreugse09/Perpetual-Chatbot",
    liveUrl: "https://uphmc-chatbot.vercel.app",
  },
  {
    id: 4,
    title: "TUPasok",
    description:
      "QR-based visitor management system with database manipulation",
    overview:
      "TUPVMS is a QR-based visitor management system designed to improve security and reduce long queues at campus entrances. Visitors register in advance and receive a QR code, which is scanned upon entry for fast and secure verification. The system replaces manual logbooks with a digital process, allowing authorized staff to monitor and manage visitor entries efficiently. TUPVMS helps create a safer, more organized entry experience and can be adapted for use in schools and other establishments.",
    features: [
      "Implemented a QR-based visitor management system for secure, pre-approved, and efficient campus entry.",
      "Developed a full-stack MERN application for visitor registration, QR generation, and centralized data management.",
      "Integrated QR scanning workflows to streamline entrance queueing and reduce manual verification.",
      "Implemented role-based access control (RBAC) for administrators, security personnel, and staff.",
      "Designed the system to be scalable and adaptable for schools and other establishments.",
    ],
    techStack: ["TypeScript", "Nodejs", "Express", "React", "Tailwind"],
    imageUrl: "/project_img/tup_vms.png",
    githubUrl: "https://github.com/jarreugse09/TUP-VMS-Frontend",
    liveUrl: "https://tupasok.vercel.app/",
  },
  {
    id: 4,
    title: "RMB Law",
    description:
      "QR-based visitor management system with database manipulation",
    overview:
      "TUPVMS is a QR-based visitor management system designed to improve security and reduce long queues at campus entrances. Visitors register in advance and receive a QR code, which is scanned upon entry for fast and secure verification. The system replaces manual logbooks with a digital process, allowing authorized staff to monitor and manage visitor entries efficiently. TUPVMS helps create a safer, more organized entry experience and can be adapted for use in schools and other establishments.",
    features: [
      "Implemented a QR-based visitor management system for secure, pre-approved, and efficient campus entry.",
      "Developed a full-stack MERN application for visitor registration, QR generation, and centralized data management.",
      "Integrated QR scanning workflows to streamline entrance queueing and reduce manual verification.",
      "Implemented role-based access control (RBAC) for administrators, security personnel, and staff.",
      "Designed the system to be scalable and adaptable for schools and other establishments.",
    ],
    techStack: ["TypeScript", "Nodejs", "Express", "React", "Tailwind"],
    imageUrl: "/project_img/tup_vms.png",
    githubUrl: "https://github.com/jarreugse09/TUP-VMS-Frontend",
    liveUrl: "https://tupasok.vercel.app/",
  },
  {
    id: 5,
    title: "RMB Law Website",
    description:
      "Official company website showcasing legal services, brand identity, and contact information with integrated AI chatbot",
    overview:
      "The RMB Law website is a professional company website designed to establish a strong online presence for the firm. It presents the firm's services, background, and contact details in a clean and trustworthy layout. The site is optimized for clarity, accessibility, and responsiveness, helping potential clients easily understand the firm's offerings and get in touch. Features an integrated AI chatbot powered by Google Generative AI that provides instant information about the firm's services, legal team, and scheduling assistance.",
    features: [
      "Responsive and mobile-friendly design for all screen sizes.",
      "Contact section with inquiry details for client communication.",
      "Clean and professional UI aligned with law firm branding.",
      "Integrated AI chatbot (RMBot) powered by Google Generative AI for 24/7 client support.",
      "Seamless integration with Gmail for contact form submissions.",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Google Generative AI (Gemini)",
    ],
    imageUrl: "/project_img/rmb_law.png",
    githubUrl: "",
    liveUrl: "https://rmblawph.vercel.app/",
  },
];
