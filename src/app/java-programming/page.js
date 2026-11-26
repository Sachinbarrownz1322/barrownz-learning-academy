import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Java Programming Course in Lucknow | Core Java, OOP & JDBC",
  description: "Master Core Java, JVM internals, object-oriented design, Collections, Multithreading, and JDBC at Barrownz Learning Academy.",
};

export default function JavaProgrammingPage() {
  return (
    <CourseDetailTemplate
      title="Core Java Programming & OOP Mastery in Lucknow"
      subtitle="Build strong software engineering fundamentals with Core Java, Collections Framework, Multithreading, and JDBC."
      category="Programming Languages • Java"
      duration="2 - 3 Months"
      description="Our Core Java track prepares students for enterprise software roles and technical interviews by covering JVM architecture, OOP principles, Collections, exception handling, file I/O, multithreading, and JDBC database connectivity."
      highlights={[
        "JVM Architecture & Java Syntax",
        "Object-Oriented Design & Packages",
        "Collections Framework & Java 8 Streams",
        "Exception Handling & Multithreading",
        "JDBC & MySQL Database Connectivity",
        "Console/Desktop Capstone & Interview Prep"
      ]}
      curriculum={[
        { title: "Java Basics & OOP Foundations", topics: "JDK/JVM setup, data types, classes, objects, constructors, inheritance, and interfaces." },
        { title: "Strings, Exceptions & Collections", topics: "StringBuilder, custom exceptions, ArrayList, HashMap, HashSet, and Generics." },
        { title: "Java 8+ Features & Multithreading", topics: "Lambda expressions, Streams API, Thread lifecycle, synchronization, and Runnable." },
        { title: "JDBC & Mini Application", topics: "MySQL connection, PreparedStatement, CRUD operations, and mentored project evaluation." }
      ]}
    />
  );
}
