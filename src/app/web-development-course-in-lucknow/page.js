import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Best Web Development Courses in Lucknow | Full Stack Training 2026",
  description: "Learn Web Development in Lucknow. Full Stack frontend, backend, database design, REST APIs, and live industrial projects with 100% placement support.",
};

export default function WebDevCoursePage() {
  return (
    <CourseDetailTemplate
      title="Professional Web Development Course in Lucknow"
      subtitle="Master Full Stack Web Development from scratch with HTML5, CSS3, JavaScript, React, Node.js, and SQL/MongoDB database systems."
      category="Web Development"
      duration="4 - 6 Months"
      description="Our Web Development training program at Barrownz Learning Academy is crafted to transform beginners into production-ready software engineers. You will build end-to-end web applications, master modern UI frameworks, develop secure RESTful web services, and deploy applications to cloud platforms."
      highlights={[
        "HTML5, CSS3, modern JavaScript (ES6+)",
        "React.js and responsive UI frameworks",
        "Node.js, Express.js backend development",
        "MongoDB and MySQL relational databases",
        "Live corporate project deployment & CI/CD",
        "100% Placement and interview preparation"
      ]}
      curriculum={[
        { title: "Frontend Foundations", topics: "Semantic HTML5, CSS3 Grid & Flexbox, responsive layouts, Tailwind, and Bootstrap." },
        { title: "Advanced JavaScript Programming", topics: "DOM manipulation, asynchronous JavaScript, Promises, Fetch API, ES6 modules, and state management." },
        { title: "React.js Component Architecture", topics: "Hooks, Context API, Redux Toolkit, client-side routing, Next.js fundamentals, and API integration." },
        { title: "Backend API & Server Development", topics: "Node.js runtime, Express routing, middleware, JWT token authentication, and role-based access." },
        { title: "Database Systems & ORM", topics: "MongoDB aggregation, Mongoose models, SQL schemas, queries, migrations, and database optimization." },
        { title: "Production Deployment & Capstone", topics: "Git version control, Linux server setup, Docker basics, cloud hosting, and mock placement interviews." },
      ]}
    />
  );
}
