import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Programming Languages Course in Lucknow | C, C++, Java, Python, PHP",
  description: "Master core and object-oriented programming in C#, C++, Java, PHP, and Python at Barrownz Learning Academy, Lucknow.",
};

export default function ProgrammingLanguageCoursePage() {
  return (
    <CourseDetailTemplate
      title="Programming Languages Course in Lucknow"
      subtitle="Build rock-solid coding fundamentals across C#, C++, Java, PHP, and Python with hands-on lab assignments."
      category="Programming Language"
      duration="2 - 4 Months"
      description="Our Programming Languages track at Barrownz Learning Academy covers core logic building, object-oriented programming (OOP), data structures, and backend scripting across C#, C++, Java, PHP, and Python."
      highlights={[
        "C# & .NET core programming fundamentals",
        "C++ object-oriented programming & STL",
        "Core Java, JVM internals & JDBC connectivity",
        "Python OOP, data structures & API scripting",
        "PHP programming & server-side logic",
        "100% Placement and interview preparation"
      ]}
      curriculum={[
        { title: "Logic Building & Procedural Basics", topics: "Variables, control flow, loops, functions, arrays, pointers, and algorithmic problem solving." },
        { title: "Object-Oriented Programming (C++ / Java / C#)", topics: "Classes, objects, inheritance, polymorphism, encapsulation, abstraction, and exception handling." },
        { title: "Python & PHP Scripting", topics: "Data collections, file I/O, modular packages, form processing, and API integration." },
        { title: "Database Connectivity & Mini Project", topics: "JDBC / ODBC database queries, CRUD operations, debugging, and mentored capstone evaluation." }
      ]}
    />
  );
}
