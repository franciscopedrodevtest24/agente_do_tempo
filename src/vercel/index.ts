import { VercelDeployer } from "@mastra/deployer-vercel";

const deployer = new VercelDeployer({
    teamSlug: 'agentes',
    projectName: 'agent-time',
    token: 'a5CVAO9GhPRzN72FT90RO7Yt',
  });

  export const deployerInstance = deployer;