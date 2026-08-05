import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

const siteUrl = "https://yousrahindbennabi.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/projects`, lastModified: new Date() },
    ...projectRoutes,
  ];
}
