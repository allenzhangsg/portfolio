import { Icons } from "@/components/icons";
import { House } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Allen Zhang",
  initials: "AZ",
  url: "https://allenzhangsg.com",
  location: "Melbourne, Australia",
  locationLink: "https://www.google.com/maps/place/Melbourne+VIC,+Australia",
  description:
    "Software engineer in Melbourne, working toward senior. I build distributed systems on AWS, AI-powered products, and the infrastructure that keeps them running.",
  summary:
    "Software engineer with 5+ years building distributed systems on AWS, data ETL pipelines, and full-stack applications at [Connexion Mobility, Tesla, and Meituan](/#work). Currently shipping [Sigmise](https://sigmise.com) — a cross-platform AI meeting copilot — solo, end-to-end across backend, desktop client, marketing site, CI/CD, and self-hosted observability. Strong in real-time systems, AI/LLM integration, and shipping product end-to-end. Full Australian work rights — no employer sponsorship required. [Print-ready CV here](/cv.html).",
  avatarUrl: "/avatar.jpg",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    projects: {
      order: 3, enabled: true,
      label: "Selected Project",
      heading: "What I'm building",
      text: "Currently focused on Sigmise — building, shipping, and operating it solo.",
    },
    skills: { order: 4, enabled: true, heading: "Skills" },
    education: { order: 5, enabled: true, heading: "Education" },
    certifications: { order: 6, enabled: true, heading: "Certifications" },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "",
      text: "",
    },
    photos: {
      order: 8, enabled: false,
      heading: "",
    },
    contact: {
      order: 9, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Looking for an engineer who ships end-to-end? Send me a note — happy to chat.",
    },
  },
  photos: [],
  skills: [
    { name: "TypeScript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Astro", icon: Astro },
    { name: "Python", icon: Python },
    { name: "PostgreSQL", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "AWS" },
    { name: "Lambda" },
    { name: "DynamoDB" },
    { name: "ECS" },
    { name: "EventBridge" },
    { name: "Cloudflare" },
    { name: "Electron" },
    { name: "WebSocket" },
    { name: "Vercel AI SDK" },
    { name: "MongoDB" },
    { name: "Redis" },
    { name: "Apache Spark" },
    { name: "Airflow" },
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/929cda4a-0491-48a7-87d3-3f4f6d63d198/linked_in?t=tfhpg4",
      logoUrl: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
    },
    {
      name: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      href: "https://www.credly.com/badges/3c979bcf-f6d8-4f9e-8f9d-2ab6e4bb3f2d/linked_in?t=tagumj",
      logoUrl: "https://www.google.com/s2/favicons?domain=aws.amazon.com&sz=128",
    },
    {
      name: "Distributed System",
      issuer: "Educative",
      href: "https://www.educative.io/",
      logoUrl: "https://www.google.com/s2/favicons?domain=educative.io&sz=128",
    },
    {
      name: "Kubernetes",
      issuer: "Educative",
      href: "https://www.educative.io/",
      logoUrl: "https://www.google.com/s2/favicons?domain=educative.io&sz=128",
    },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
  ],
  contact: {
    email: "zhangsg2013@gmail.com",
    tel: "+61 468 913 273",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/allenzhangsg",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/shiguang-zhang/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:zhangsg2013@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Connexion Mobility",
      href: "https://connexionmobility.com",
      badges: [],
      location: "Melbourne, Australia",
      title: "Software Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=connexionmobility.com&sz=128",
      start: "November 2024",
      end: undefined,
      description:
        "Sole engineer; end-to-end owner across design, build, and operations. Built a multi-tenant Insights Platform — embedded QuickSight across four microservices behind a React/Auth0 frontend, with two-layer authorisation (capability tree + S3-backed RLS) keeping OEM tenants isolated. Owns ~20 data pipelines across ECS Fargate batch, Lambda burst, and Glue catalogue compute models, each provisioned via AWS CDK with its own Sentry cron monitor. Built a real-time GM compliance audit pipeline: MongoDB Change Streams → EventBridge → SQS FIFO → Lambda → DynamoDB with strict per-VIN ordering.",
    },
    {
      company: "Tesla",
      href: "https://tesla.com",
      badges: [],
      location: "Shanghai, China",
      title: "Senior Data Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=tesla.com&sz=128",
      start: "April 2022",
      end: "May 2024",
      description:
        "Designed a horizontally scalable internal analytics platform (Plotly Dash + React, Azure SSO) on Kubernetes — Flask/Gunicorn + Celery to keep long queries off the request path, Redis for hot data. Eliminated manual log parsing at remote contract manufacturers via Ansible-deployed containerised parsers. Replaced manual reporting cycles with Airflow DAGs and Bootstrap Email templating.",
    },
    {
      company: "Meituan",
      href: "https://meituan.com",
      badges: [],
      location: "Beijing, China",
      title: "Data Engineer",
      logoUrl: "https://www.google.com/s2/favicons?domain=meituan.com&sz=128",
      start: "February 2020",
      end: "April 2022",
      description:
        "Designed dimensional fact/dimension models over Hadoop/Hive and tuned partitioning to keep daily ETLs within their windows. Built a paid pharma analytics dashboard on Apache Doris OLAP. Built Spark MLlib pipelines for consumer–product correlation and recommender models that drove segmentation for marketing campaigns.",
    },
  ],
  education: [
    {
      school: "Tianjin University",
      href: "https://tju.edu.cn",
      degree: "Master of Computer Technology",
      logoUrl: "https://www.google.com/s2/favicons?domain=tju.edu.cn&sz=128",
      start: "2017",
      end: "2020",
    },
    {
      school: "Nanjing Forestry University",
      href: "https://www.njfu.edu.cn/",
      degree: "Bachelor of Computer Science and Technology",
      logoUrl: "https://www.google.com/s2/favicons?domain=njfu.edu.cn&sz=128",
      start: "2013",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Sigmise",
      href: "https://sigmise.com",
      dates: "2024 — Present",
      active: true,
      description:
        "A cross-platform AI meeting copilot for live transcription, translation, and notes. Owned the full vertical: Electron + React desktop client (signed & notarised for Windows/macOS), Node.js backend, Next.js marketing site, and self-hosted Prometheus + Grafana observability with Telegram alerting. Real-time WebSocket audio pipeline streams to Azure Speech / Deepgram for diarized transcription with rolling-context live summaries. Local-first sync via SQLite client, Postgres + Drizzle server, lazy R2 file downloads, last-writer-wins conflict resolution. Production AI via Gemini through OpenRouter (Vercel AI SDK).",
      technologies: [
        "Electron",
        "React",
        "Node.js",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "SQLite",
        "WebSocket",
        "Vercel AI SDK",
        "Cloudflare R2",
        "Prometheus",
        "Grafana",
      ],
      links: [
        {
          type: "Landing page",
          href: "https://sigmise.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
