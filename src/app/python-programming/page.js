import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Python Programming Course in Lucknow | Core Python, OOP & APIs",
  description: "Learn Core & Advanced Python programming, data structures, OOP, automation scripting, and API integration at Barrownz Learning Academy.",
};

export default function PythonProgrammingPage() {
  return (
    <CourseDetailTemplate
      title="Python Programming (Core & Advanced) in Lucknow"
      subtitle="Master Python syntax, data structures, object-oriented programming, file automation, and REST API integration."
      category="Programming Languages • Python"
      duration="2 - 3 Months"
      description="Designed for beginners and aspiring developers, this course builds complete fluency in Python — from variables, lists, and dictionaries to OOP, modules, JSON/API requests, and automation scripting."
      highlights={[
        "Python 3 Core Syntax & Data Structures",
        "Functions, Decorators & List Comprehensions",
        "Object-Oriented Python & Modular Code",
        "File Handling, CSV/JSON & Automation",
        "REST API Consumption with Requests",
        "NumPy/Pandas Intro & Capstone Project"
      ]}
      curriculum={[
        { title: "Python Fundamentals & Collections", topics: "Variables, loops, functions, lists, tuples, sets, dictionaries, and string manipulation." },
        { title: "Modular & Object-Oriented Python", topics: "Classes, inheritance, magic methods, virtual environments, pip packages, and error handling." },
        { title: "File Automation & API Integration", topics: "Reading/writing CSV and JSON files, consuming REST APIs, and automating workflows." },
        { title: "Database & Capstone Project", topics: "SQLite/MySQL integration and building a real-world Python CLI or automation tool." }
      ]}
    />
  );
}
