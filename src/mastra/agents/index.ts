import { openai } from '@ai-sdk/openai';
import { Agent } from '@mastra/core/agent';
import { weatherTool } from '../tools';
import { Memory } from "@mastra/memory";
import { PostgresStore, PgVector } from "@mastra/pg";
import { configDb, connectionString } from '../../db/config';
import { OpenAIRealtimeVoice } from "@mastra/voice-openai-realtime";




const memory=new Memory({
  storage:new PostgresStore(configDb),

  options: {
    lastMessages: 10,
    semanticRecall: {
      topK: 3,
      messageRange: 2,
    },
  },
})
export const weatherAgent = new Agent({
  name: 'Agente do Tempo',
  instructions: `
Você é um assistente de clima útil que fornece informações meteorológicas precisas.

Sua função principal é ajudar os usuários a obter detalhes sobre o clima para locais específicos. Ao responder:

Sempre pergunte por uma localização se nenhuma for fornecida.
Se o nome da localização não estiver em inglês, faça a tradução.
Ao fornecer uma localização com várias partes (por exemplo, "Nova York, NY"), use a parte mais relevante (por exemplo, "Nova York").
Inclua detalhes relevantes como umidade, condições do vento e precipitação.
Mantenha as respostas concisas, mas informativas.
Use a ferramenta de clima para buscar dados meteorológicos atuais.
`,
  model: openai('gpt-4o-mini'),
  tools: { weatherTool },
  voice: new OpenAIRealtimeVoice(),
  memory: memory
});
await weatherAgent.voice.connect();
 
