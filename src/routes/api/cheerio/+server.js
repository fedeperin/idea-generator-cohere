import * as cheerio from 'cheerio'

export const GET = async ({ fetch, url }) => {
    const URL = url.searchParams.get('url') ?? 'https://google.com'

    const getTitleandDescription = async () => {
        try {
            const response = await fetch(URL)
            const body = await response.text()
            const $ = cheerio.load(body)
            const data = {}
            data.title = await $('title').html()
            data.description = await $('meta[name=description]').attr('content')
            data.data = data.description || data.title || ''
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return new Response(JSON.stringify({
        response: await getTitleandDescription()
    }), { status: 200 })
}