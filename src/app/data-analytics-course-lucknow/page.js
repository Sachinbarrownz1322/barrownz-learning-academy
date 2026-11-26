import React from "react";
import CourseDetailTemplate from "@/components/CourseDetailTemplate";

export const metadata = {
  title: "Data Analytics Course in Lucknow | Certification & Placement",
  description: "Learn Data Analytics with SQL, Excel, Power BI, Tableau, and Python at Barrownz Learning Academy Lucknow.",
};

export default function DataAnalyticsPage() {
  return (
    <CourseDetailTemplate
      title="Data Analytics Certification Course"
      subtitle="Extract insights, build interactive business intelligence dashboards, and solve commercial problems using Excel, SQL, Power BI, and Python."
      category="Data Analytics"
      duration="4 Months"
      description="Data-driven decision making is critical across all industries. This course trains you in statistical concepts, data cleaning, advanced SQL querying, interactive Power BI visualizations, and Python data manipulation libraries."
      highlights={[
        "Advanced Excel, Pivot tables, & VLOOKUP/XLOOKUP",
        "Relational database querying with PostgreSQL / MySQL",
        "Interactive Power BI and Tableau dashboards",
        "Python data analysis (NumPy, Pandas, Matplotlib)",
        "Real business case studies and Capstone analytics project",
        "Dedicated placement drives for Data Analyst positions"
      ]}
      curriculum={[
        { title: "Business Statistics & Advanced Excel", topics: "Descriptive statistics, data cleaning, formulas, dynamic charts, and financial modeling." },
        { title: "Relational Databases & SQL Mastery", topics: "Joins, subqueries, window functions, stored procedures, and query performance." },
        { title: "Power BI & Tableau Business Dashboards", topics: "DAX formulas, data modeling, storytelling with data, and interactive report publishing." },
        { title: "Python for Data Analysis", topics: "Jupyter notebooks, Pandas dataframes, data wrangling, and automated visual report generation." },
      ]}
    />
  );
}
