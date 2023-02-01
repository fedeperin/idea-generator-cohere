import dotenv from 'dotenv'
dotenv.config()

import { prompts } from '$lib/prompts.js'

const { SECRET_COHERE_API_KEY } = process.env

const COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate'

export const GET = async ({ url, fetch }) => {
    const randomness = url.searchParams.get('randomness') ?? 1.5
    const promptNumber = url.searchParams.get('prompt') ?? 0

    const data = {
        model: 'command-xlarge-nightly',
        prompt: prompts[promptNumber],
        max_tokens: 40,
        temperature: randomness,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ['--'],
        return_likelihoods: 'NONE'
    }

    const cohereGenerated = await fetch(COHERE_API_GENERATE_URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `BEARER ${ SECRET_COHERE_API_KEY }`,
          "Content-Type": 'application/json',
          "Cohere-Version": '2022-12-06'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())

      
    if(cohereGenerated.generations) {
        const cohereResponseText = cohereGenerated.generations[0].text

        const formattedCohereResponse = cohereResponseText
        .trim()
        .substring(1, cohereResponseText.indexOf('"', 2) - 1) 

        return new Response(JSON.stringify({
            response: `Idea: ${ formattedCohereResponse }`
        }), { status: 200 })
    }else {
        return new Response(JSON.stringify({
            response: 'Too many requests to co:here. Please try again later.'
        }), { status: 429 })
    }
}