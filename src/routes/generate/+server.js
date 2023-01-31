import cohere from 'cohere-ai'
import { SECRET_COHERE_API_KEY } from '$env/static/private'
import { prompts } from '$lib/prompts.js'

export const GET = async ({ url }) => {
    const promptNumber = url.searchParams.get('prompt') ?? 0

    cohere.init(SECRET_COHERE_API_KEY)

    const cohereGenerated = await cohere.generate({
        model: 'command-medium-nightly',
        prompt: prompts[promptNumber],
        max_tokens: 70,
        temperature: 1.5,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE'
    })

    if(cohereGenerated.body.generations) {
        const cohereResponseText = cohereGenerated.body.generations[0].text

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