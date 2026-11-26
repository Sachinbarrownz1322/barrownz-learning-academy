import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "PHP & Laravel Web Development Course in Lucknow | Barrownz Learning Academy",
  description: "Master modern PHP 8, Laravel MVC framework, Eloquent ORM, Blade templates, REST APIs, and MySQL at Barrownz Learning Academy.",
};

export default function PhpLaravelCoursePage() {
  return (
    <CourseDetailTemplate
      title="PHP & Laravel Full Stack Development in Lucknow"
      subtitle="Build dynamic web portals, SaaS backends, and custom CMS solutions with PHP 8, Laravel MVC, Eloquent ORM, and MySQL."
      category="Web Development • PHP & Laravel"
      duration="3 - 5 Months"
      description="Our PHP & Laravel program equips students to build fast, maintainable web portals and e-commerce backends using modern PHP 8+, Laravel routing, Blade templates, Eloquent ORM, middleware security, and MySQL."
      highlights={[
        "Modern PHP 8+ & Object-Oriented PHP",
        "Laravel MVC Routing, Controllers & Middleware",
        "Blade Templating & Responsive UI",
        "Eloquent ORM, Migrations & Seeding",
        "REST APIs, Auth & Payment Integration",
        "Live Web Portal Capstone & Placement Support"
      ]}
      curriculum={[
        { title: "Modern PHP & MySQL Basics", topics: "PHP 8 syntax, OOP classes, namespaces, Composer, sessions, PDO, and secure MySQL queries." },
        { title: "Laravel MVC Architecture", topics: "Artisan CLI, routing, controllers, request validation, middleware, and Blade layout inheritance." },
        { title: "Eloquent ORM & Database Migrations", topics: "Schema migrations, relationships (1:1, 1:N, N:N), query scopes, and seeders." },
        { title: "Authentication, APIs & Deployment", topics: "Laravel Sanctum/Breeze, RESTful JSON APIs, file uploads, Git, and cPanel/VPS hosting." }
      ]}
    />
  );
}
