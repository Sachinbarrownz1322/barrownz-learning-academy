import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "C++ Programming & DSA Course in Lucknow | Barrownz Learning Academy",
  description: "Master C++ programming, pointers, OOP, Standard Template Library (STL), and data structures at Barrownz Learning Academy.",
};

export default function CPlusPlusProgrammingPage() {
  return (
    <CourseDetailTemplate
      title="C++ Programming & Problem Solving in Lucknow"
      subtitle="Master C++ fundamentals, memory pointers, object-oriented design, STL containers, and algorithmic problem solving."
      category="Programming Languages • C++"
      duration="2 - 3 Months"
      description="Ideal for B.Tech, BCA, and MCA students preparing for campus placements and coding interviews, our C++ course covers structured programming, pointers, OOP, Standard Template Library (STL), and core data structures."
      highlights={[
        "C++ Syntax, Functions & Pointers",
        "Object-Oriented Programming & Operator Overloading",
        "Standard Template Library (Vectors, Maps, Sets)",
        "Sorting, Searching & Recursion",
        "Time & Space Complexity Analysis",
        "Coding Interview Practice & Assessments"
      ]}
      curriculum={[
        { title: "C++ Core & Memory Management", topics: "Data types, loops, functions, references, pointers, dynamic memory allocation, and arrays." },
        { title: "Object-Oriented C++", topics: "Classes, constructors/destructors, friend functions, inheritance, virtual functions, and polymorphism." },
        { title: "STL & Data Structures", topics: "Vectors, pairs, stacks, queues, priority queues, sets, maps, and iterator patterns." },
        { title: "Algorithms & Coding Drills", topics: "Recursion, binary search, sorting algorithms, and technical interview problem sets." }
      ]}
    />
  );
}
