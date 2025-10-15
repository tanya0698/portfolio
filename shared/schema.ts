import { z } from "zod";

// Portfolio data schemas - no database needed, static content

export const workExperienceSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  achievements: z.array(z.string()),
});

export const skillCategorySchema = z.object({
  category: z.string(),
  skills: z.array(z.string()),
});

export const projectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  metrics: z.string(),
});

export const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  location: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  grade: z.string(),
});

export const contactInfoSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  location: z.string(),
  linkedin: z.string().url(),
  github: z.string().url().optional(),
});

export type WorkExperience = z.infer<typeof workExperienceSchema>;
export type SkillCategory = z.infer<typeof skillCategorySchema>;
export type Project = z.infer<typeof projectSchema>;
export type Education = z.infer<typeof educationSchema>;
export type ContactInfo = z.infer<typeof contactInfoSchema>;
