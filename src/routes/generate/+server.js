import cohere from 'cohere-ai'
import { SECRET_COHERE_API_KEY } from '$env/static/private'
import { prompts } from '$lib/prompts.js'

export const GET = async ({ url }) => {
    const promptNumber = url.searchParams.get('prompt') ?? 0

    cohere.init(SECRET_COHERE_API_KEY)

    const cohereResponse = await cohere.generate({
        model: 'xlarge',
        prompt: prompts[promptNumber],
        max_tokens: 60,
        temperature: 1,
        k: 0,
        p: 0.75,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE'
    })
    if(cohereResponse.body.generations) {
        const cohereResponseText = cohereResponse.body.generations[0].text
        const formattedCohereResponse = cohereResponseText
        .trim()
        .substring(1, cohereResponseText.indexOf('-') - 8)

        return new Response(JSON.stringify({
            response: formattedCohereResponse
        }), { status: 200 })
    }else {
        return new Response(JSON.stringify({
            response: 'Too many requests to the server. Please try again later.'
        }), { status: 429 })
    }
}