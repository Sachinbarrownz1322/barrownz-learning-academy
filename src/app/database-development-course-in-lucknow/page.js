import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Database Engineering Course in Lucknow | SQL, MySQL, PostgreSQL, MongoDB",
  description: "Master relational and NoSQL database engineering across MySQL, PostgreSQL, MS SQL Server, and MongoDB at Barrownz Learning Academy.",
};

export default function DatabaseDevelopmentCoursePage() {
  return (
    <CourseDetailTemplate
      title="Database Engineering & SQL/NoSQL Course in Lucknow"
      subtitle="Master relational schema design, complex SQL queries, indexing, normalization, and MongoDB NoSQL architectures."
      category="Database"
      duration="6 Weeks - 3 Months"
      description="Our Database Engineering track at Barrownz Learning Academy equips learners with practical skills in MySQL, PostgreSQL, MS SQL Server, and MongoDB — covering normalization, joins, indexing, and production query optimization."
      highlights={[
        "MySQL, PostgreSQL & MS SQL Server mastery",
        "MongoDB document modeling & aggregation",
        "Normalization (1NF–BCNF) & ER diagramming",
        "Complex joins, subqueries & stored procedures",
        "Indexing & query performance tuning",
        "Live backend schema integration project"
      ]}
      curriculum={[
        { title: "Relational Modeling & Normalization", topics: "Entities, relationships, primary/foreign keys, 1NF to BCNF, and schema design." },
        { title: "Advanced SQL Querying", topics: "Joins, window functions, CTEs, views, triggers, transactions, and stored procedures." },
        { title: "NoSQL with MongoDB", topics: "Document collections, embedded vs referenced schemas, aggregation pipelines, and Mongoose." },
        { title: "Performance & Backup Operations", topics: "B-Tree indexing, query execution plans, backups, and access control." }
      ]}
    />
  );
}
