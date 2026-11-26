import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Python Web Development Course in Lucknow | Django & FastAPI Training",
  description: "Build scalable web backends and APIs with Python, Django, Django REST Framework, PostgreSQL, and modern frontend integration.",
};

export default function PythonDevelopmentCoursePage() {
  return (
    <CourseDetailTemplate
      title="Python Web Development (Django & APIs) in Lucknow"
      subtitle="Build secure, database-driven web applications and REST APIs using Python, Django, Django REST Framework, and PostgreSQL."
      category="Web Development • Python"
      duration="4 - 6 Months"
      description="Our Python Web Development track takes you from clean Python OOP and scripting to production web engineering with Django MVT architecture, Django REST Framework, PostgreSQL, authentication, and cloud deployment."
      highlights={[
        "Python OOP, Decorators & Virtual Environments",
        "Django MVT Architecture & Admin Customization",
        "Django REST Framework & Token Auth",
        "PostgreSQL & ORM Query Optimization",
        "Frontend Integration & Responsive Templates",
        "Live Production Project & Mock Interviews"
      ]}
      curriculum={[
        { title: "Python Engineering Foundations", topics: "Data structures, OOP, decorators, generators, file I/O, pip/venv, and clean modular Python." },
        { title: "Django Core & MVT Architecture", topics: "URL routing, views, Django templates, forms, class-based views, and custom admin panels." },
        { title: "Django REST Framework (DRF)", topics: "Serializers, viewsets, pagination, filtering, JWT/token authentication, and API documentation." },
        { title: "Database Modeling & Deployment", topics: "PostgreSQL migrations, ORM optimization, static/media handling, Git, and cloud deployment." }
      ]}
    />
  );
}
