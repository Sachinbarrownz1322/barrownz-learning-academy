import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Java Full Stack & Spring Boot Course in Lucknow | Barrownz Learning Academy",
  description: "Learn Core Java, JDBC, Spring Boot, Hibernate/JPA, REST APIs, and React/SQL integration at Barrownz Learning Academy.",
};

export default function JavaDevelopmentCoursePage() {
  return (
    <CourseDetailTemplate
      title="Java Full Stack & Spring Boot Course in Lucknow"
      subtitle="Master Core Java, JVM internals, Spring Boot microservices, Hibernate JPA, MySQL, and frontend integration."
      category="Web Development • Java"
      duration="4 - 6 Months"
      description="Designed for aspiring backend and full stack Java engineers, this program covers Core Java OOP, collections, multithreading, JDBC, Spring Boot REST APIs, Spring Data JPA, and production database integration."
      highlights={[
        "Core Java, Collections & Multithreading",
        "Spring Boot & Spring MVC Architecture",
        "Spring Data JPA & Hibernate ORM",
        "MySQL / PostgreSQL Schema Engineering",
        "JWT Security & Microservice Patterns",
        "Live Capstone Project & Placement Support"
      ]}
      curriculum={[
        { title: "Core Java & OOP Mastery", topics: "JVM architecture, classes, inheritance, polymorphism, Java Collections Framework, Streams API, and exception handling." },
        { title: "JDBC & Relational Databases", topics: "SQL normalization, joins, indexing, JDBC connection pooling, and transaction management." },
        { title: "Spring Boot & RESTful APIs", topics: "Spring IoC container, dependency injection, REST controllers, validation, and global exception handling." },
        { title: "Hibernate, Spring Data JPA & Security", topics: "Entity relationships, JPQL, Spring Security with JWT tokens, and role-based access control." },
        { title: "Frontend Integration & Deployment", topics: "Connecting React UI with Spring Boot APIs, Git workflows, Maven builds, and interview preparation." }
      ]}
    />
  );
}
