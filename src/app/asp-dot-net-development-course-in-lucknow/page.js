import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "ASP.NET Core & .NET Development Course in Lucknow | Barrownz Learning Academy",
  description: "Master C#, ASP.NET Core MVC, Web APIs, Entity Framework Core, and MS SQL Server at Barrownz Learning Academy, Lucknow.",
};

export default function AspDotNetCoursePage() {
  return (
    <CourseDetailTemplate
      title="ASP.NET Core & Enterprise .NET Course in Lucknow"
      subtitle="Build scalable enterprise web applications and RESTful microservices with C#, ASP.NET Core MVC, Entity Framework, and MS SQL Server."
      category="Web Development • .NET"
      duration="4 - 6 Months"
      description="Our ASP.NET Core & C# engineering track at Barrownz Learning Academy prepares you for enterprise software roles. You will master object-oriented C#, clean MVC architecture, LINQ, Entity Framework Core, JWT security, and MS SQL Server deployment."
      highlights={[
        "C# Modern OOP, LINQ & Async/Await",
        "ASP.NET Core MVC & Razor Pages",
        "RESTful Web APIs & Swagger/OpenAPI",
        "Entity Framework Core & Migrations",
        "MS SQL Server Stored Procedures & Joins",
        "Role-Based Auth, Deployment & Placement Prep"
      ]}
      curriculum={[
        { title: "C# Foundations & OOP Architecture", topics: "Value vs reference types, generics, interfaces, LINQ queries, exception handling, and asynchronous async/await." },
        { title: "ASP.NET Core MVC & Middleware", topics: "Dependency injection, routing, model binding, Razor views, filters, and clean N-tier project structure." },
        { title: "RESTful Web APIs & Security", topics: "Controllers, DTOs, AutoMapper, JWT authentication, role-based authorization, and API versioning." },
        { title: "Entity Framework Core & MS SQL Server", topics: "Code-first migrations, relational schemas, complex SQL joins, stored procedures, and query tuning." },
        { title: "Enterprise Capstone & Deployment", topics: "Git workflow, unit testing basics, IIS / cloud hosting, and mock technical interviews." }
      ]}
    />
  );
}
