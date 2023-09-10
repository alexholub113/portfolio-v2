import {SkillData} from '../types.ts';

export const skillsData: SkillData[] = [
    {
        category: "Languages",
        subSkills: [".NET C#", "JavaScript", "Java"],
    },
    {
        category: "Back-End Frameworks",
        subSkills: ["ASP.NET Web Api", "Entity Framework", "Node", "TypeORM", "Unity3d"],
    },
    {
        category: "Front-End Frameworks",
        subSkills: ["React", "Next", "Vue", "TypeScript", "Tailwind", "MobX", "Jest"],
    },
    {
        category: "Cloud",
        subSkills: ["AWS Lambda", "AWS Fargate", "AWS Api Gateway", "AWS DynamoDB", "AWS SNS/SQS", "AWS S3", "AWS Cognito"],
    },
    {
        category: "Databases",
        subSkills: ["Oracle", "MS Sql", "PostgreSql", "MongoDB", "Redis", "DynamoDB"],
    },
    {
        category: "Architectures",
        subSkills: ["Microservices", "Micro-frontends", "CQRS", "DDD", "REST", "Distributed Systems"],
    },
    {
        category: "CI/CD",
        subSkills: ["Docker", "Jenkins", "GitLab CI/CD", "GitHub Actions", "Octopus Deploy", "Vault", "Terraform"],
    }
];
