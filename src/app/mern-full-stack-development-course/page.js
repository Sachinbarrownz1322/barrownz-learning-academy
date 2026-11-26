import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "MERN Stack Developer Course – Learn MongoDB, Express, React, Node.js",
  description: "Master full-stack JavaScript with Barrownz Learning Academy. Build real-world MERN web applications with authentication and cloud deployment.",
};

export default function MernCoursePage() {
  return (
    <CourseDetailTemplate
      title="MERN Full Stack Development Master Program"
      subtitle="Master end-to-end JavaScript development with MongoDB, Express.js, React.js, and Node.js for high-growth tech positions."
      category="Full Stack"
      duration="4 - 6 Months"
      description="The MERN stack is the leading JavaScript architecture for modern web applications. At Barrownz Learning Academy, you will gain deep competency across full-stack architecture, building eCommerce systems, social portals, and SaaS platforms."
      highlights={[
        "Pure JavaScript full-stack architecture",
        "React state management with Redux & Context",
        "REST API & WebSocket real-time communication",
        "MongoDB Atlas, Mongoose, and data modeling",
        "JWT token security & OAuth integration",
        "100% Placement assistance with top IT firms"
      ]}
      curriculum={[
        { title: "React 18 & Component Patterns", topics: "Functional components, custom hooks, performance tuning, and Tailwind integration." },
        { title: "Node.js & Express Architecture", topics: "Event loop, REST API patterns, validation, error handling middleware." },
        { title: "MongoDB Database Engineering", topics: "Document schemas, indexing, aggregation framework, transactions." },
        { title: "Authentication & Cloud Deployment", topics: "Bcrypt, JWT, cookies, AWS EC2, Vercel, and GitHub actions CI/CD." },
      ]}
    />
  );
}
