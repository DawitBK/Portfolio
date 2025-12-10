import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const resumeData = {
    personalInfo: {
        name: "Dawit Bayou Kassie",
        role: "Full-Stack Developer & DevOps Engineer",
        location: "Addis Ababa, Ethiopia",
        email: "dawitbk01@gmail.com",
        phone: "+251 921 640 101",
        linkedin: "https://www.linkedin.com/in/dawit-b-kassie",
        github: "https://github.com/DawitBK",
        summary: "Versatile and results-driven Full-Stack Developer, DevOps Engineer, and Creative Designer with hands-on experience across frontend, backend, databases, cloud infrastructure, UI/UX, and digital media. Skilled in building scalable applications, secure APIs, clean UI/UX, and engaging multimedia content. Passionate about intuitive user experiences, clean maintainable code, and modern digital solutions."
    },
    skills: {
        frontend: ["React", "Vue", "Angular", "Next.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "SASS/SCSS", "Framer Motion"],
        backend: ["Node.js", "Express.js", "NestJS", "REST APIs", "Microservices"],
        database: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Prisma", "TypeORM"],
        devops: ["Docker", "Git", "CI/CD", "Railway", "Vercel"],
        design: ["Figma", "Adobe Illustrator", "Photoshop", "Premiere Pro"]
    },
    experience: [
        {
            title: "Web Developer & Visual Designer",
            company: "Edge Communication Technologies P.L.C",
            period: "Sep 2025 – Oct 2025",
            description: "Developed and optimized a modern, responsive corporate website. Improved UI/UX consistency and brand-aligned design quality.",
            location: "Addis Ababa, Ethiopia (On-site)"
        },
        {
            title: "Full-Stack Developer & DevOps Engineer",
            company: "Freelance",
            period: "Jan 2023 – Present",
            description: "Built and deployed full-stack applications using React, NestJS, Express, and PostgreSQL. Implemented secure APIs and containerized applications using Docker."
        },
        {
            title: "UI/UX & Graphics Designer",
            company: "Freelance",
            period: "Jan 2023 – Present",
            description: "Designed responsive UI layouts for web and mobile apps. Created logos, icons, and full branding systems."
        },
        {
            title: "Video Editor & Motion Graphics Designer",
            company: "Freelance",
            period: "Jan 2023 – Present",
            description: "Edited promotional, corporate, and explainer videos. Applied transitions, sound enhancements, captions, and visual effects."
        }
    ],
    education: [
        {
            degree: "BSc in Electrical & Computer Engineering",
            institution: "Addis Ababa Institute of Technology (AAiT)",
            year: "Oct 2022"
        },
        {
            degree: "Full-Stack & DevOps Engineer Certification",
            institution: "Addis Ababa University",
            year: "May 2025"
        }
    ],
    projects: [
        {
            title: "Martronics",
            description: "Full-Stack E-commerce Platform with product listing, cart management, and checkout.",
            tech: ["React", "Node.js", "Express", "Swagger"],
            links: {
                github: "https://github.com/DawitBK/martronics",
                live: "https://martronics.vercel.app"
            }
        },
        {
            title: "Library Manager System",
            description: "Full-featured library management system supporting borrowing/return workflows and staff roles.",
            tech: ["NestJS", "React", "PostgreSQL"],
            links: {
                github: "https://github.com/DawitBK/Library_Management_System",
                live: "https://library-management-system-lyart-pi.vercel.app/"
            }
        },
        {
            title: "FoodWagen",
            description: "Product Listing Web App with reusable components and form validation.",
            tech: ["Next.js", "TypeScript", "Tailwind UI"],
            links: {
                github: "https://github.com/DawitBK/foodwagen",
                live: "https://foodwagen-sand.vercel.app/"
            }
        },
        {
            title: "Food Delivery API",
            description: "Scalable REST API designed for food delivery platforms.",
            tech: ["Node.js", "REST API"],
            links: {
                github: "https://github.com/DawitBK/food_delivery_api"
            }
        },
        {
            title: "EdgeCommTech",
            description: "Modern corporate website for Edge Communication Technologies.",
            tech: ["Web Development", "UI/UX"],
            links: {
                live: "https://new.edgecomm-tech.com/"
            }
        }
    ]
};
