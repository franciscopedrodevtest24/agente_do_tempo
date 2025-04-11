
import { Mastra } from '@mastra/core/mastra';
import { createLogger } from '@mastra/core/logger';
import { VercelDeployer } from '@mastra/deployer-vercel';

import { weatherAgent } from './agents';
const deployer = new VercelDeployer({
  teamSlug: 'agentes-do-tempo',
  projectName: 'agente-do-tempo_dev',
  token: 'a5CVAO9GhPRzN72FT90RO7Yt',
});
export const mastra = new Mastra({
  agents: { weatherAgent },
  logger: createLogger({
    name: 'Mastra',
    level: 'info',
  }),
  deployer
});
