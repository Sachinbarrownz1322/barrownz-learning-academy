import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "C# Programming Course in Lucknow | .NET Core & OOP Mastery",
  description: "Learn C# syntax, object-oriented programming, collections, LINQ, and asynchronous programming at Barrownz Learning Academy.",
};

export default function CSharpProgrammingPage() {
  return (
    <CourseDetailTemplate
      title="C# Programming & .NET Foundations in Lucknow"
      subtitle="Master C# language fundamentals, object-oriented design, LINQ, generics, and async programming for enterprise .NET development."
      category="Programming Languages • C#"
      duration="2 - 3 Months"
      description="Build a strong foundation in Microsoft's C# language, covering type safety, OOP principles, collections, delegates, events, LINQ, file handling, and database connectivity."
      highlights={[
        "C# Syntax, Control Flow & Type System",
        "Object-Oriented Programming & SOLID Basics",
        "Generics, Collections & Exception Handling",
        "LINQ Queries & Lambda Expressions",
        "Async/Await & File/Stream Operations",
        "Database Connectivity & Mini Project"
      ]}
      curriculum={[
        { title: "C# Core & Memory Model", topics: "Variables, value/reference types, methods, ref/out parameters, arrays, and strings." },
        { title: "Object-Oriented C#", topics: "Classes, properties, constructors, inheritance, interfaces, abstract classes, and polymorphism." },
        { title: "Collections, LINQ & Delegates", topics: "List, Dictionary, generics, delegates, events, lambda expressions, and LINQ querying." },
        { title: "File I/O, Async & Project", topics: "Asynchronous programming with Task/async/await, ADO.NET basics, and console/desktop mini project." }
      ]}
    />
  );
}
