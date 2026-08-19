interface GeminiResponse {
  candidates?: {
    content?: {
      parts?: {
        text?: string;
      }[];
    };
  }[];
}

interface GeminiErrorResponse {
  error?: {
    message?: string;
    status?: string;
    code?: number;
  };
}

const API_KEY = String(import.meta.env.VITE_GEMINI_API_KEY);

const MODEL_NAME = 'gemini-3.5-flash';

const GEMINI_API_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

export interface AIInsight {
  diagnosis: string;
  suggestions: string;
  actionPlan: string;
}

const callGeminiAPI = async (
  prompt: string,
): Promise<GeminiResponse> => {
  if (!API_KEY || API_KEY === 'undefined') {
    throw new Error(
      'A chave da API do Gemini não foi encontrada.',
    );
  }

  const response = await fetch(GEMINI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            {
              text: prompt,
            },
          ],
        },
      ],
      generationConfig: {
        responseMimeType: 'application/json',
      },
    }),
  });

  if (!response.ok) {
    let message = `Erro na requisição: ${response.status}`;

    try {
      const errorData =
        (await response.json()) as GeminiErrorResponse;

      if (errorData.error?.message) {
        message += ` - ${errorData.error.message}`;
      }
    } catch {
      // Mantém a mensagem original.
    }

    throw new Error(message);
  }

  return (await response.json()) as GeminiResponse;
};

export const getInsight = async (
  prompt: string,
): Promise<AIInsight> => {
  const response = await callGeminiAPI(prompt);

  const text =
    response.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error(
      'A API do Gemini não retornou uma resposta válida.',
    );
  }

  const cleanedText = text
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  try {
    return JSON.parse(cleanedText) as AIInsight;
  } catch {
    console.error('Resposta recebida da Gemini:', text);

    throw new Error(
      'A resposta da IA não está em um formato JSON válido.',
    );
  }
};