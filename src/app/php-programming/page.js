import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "PHP Programming Course in Lucknow | Server-Side Web Logic & MySQL",
  description: "Learn PHP 8 server-side scripting, forms, sessions, OOP, and MySQL database integration at Barrownz Learning Academy.",
};

export default function PhpProgrammingPage() {
  return (
    <CourseDetailTemplate
      title="PHP Programming & MySQL Foundations in Lucknow"
      subtitle="Master server-side web scripting with PHP 8, form validation, session authentication, OOP, and MySQL."
      category="Programming Languages • PHP"
      duration="2 - 3 Months"
      description="Our PHP Programming course teaches server-side web engineering from scratch, covering dynamic page rendering, form handling, cookies/sessions, prepared SQL statements, and CRUD web portals."
      highlights={[
        "PHP 8 Syntax, Arrays & Superglobals",
        "Secure Form Handling & Validation",
        "Sessions, Cookies & User Authentication",
        "Object-Oriented PHP & Namespaces",
        "MySQL CRUD with PDO Prepared Statements",
        "Dynamic Web Portal Mini Project"
      ]}
      curriculum={[
        { title: "PHP Core & Control Structures", topics: "Variables, associative arrays, functions, string/date helpers, and include/require." },
        { title: "Forms, Sessions & Security", topics: "GET/POST handling, sanitization, file uploads, password hashing, and session auth." },
        { title: "MySQL & PDO Integration", topics: "Database connections, prepared statements against SQL injection, joins, and CRUD." },
        { title: "OOP PHP & Capstone Portal", topics: "Classes, inheritance, Composer autoloading, and building a dynamic CMS/portal." }
      ]}
    />
  );
}
