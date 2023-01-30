<script>
    import GithubCorner from '$lib/components/GithubCorner.svelte'
    import GenerateForm from '$lib/components/GenerateForm.svelte'
    import Response from '$lib/components/Response.svelte'
</script>

<GithubCorner url="https://github.com/fedeperin/idea-generator-cohere" />

<div class="container">
    <h1 class="title">Idea Generator 💡</h1>
    <p class="subtitle">Project for <a href="https://github.com/midudev/midu-cohere-hackathon" target="_blank" rel="noreferrer">midudev's co:here hackathon</a></p>

    <GenerateForm />
    <Response />
</div>

<style>
    .title {
        margin-top: 90px;
        margin-bottom: 15px;
        color: #C6CDDC;
        font-size: 34px;
    }
    
    .subtitle {
        font-size: 15px;
        margin-bottom: 170px;
        color: #525763;
    }

    .subtitle a {
        color: #525763;
    }

    .container {
        width: 390px;
    }
</style>