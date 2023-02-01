<script>
    import GithubCorner from '$lib/components/GithubCorner.svelte'
    import Title from '$lib/components/Title.svelte'
    import Form from '$lib/components/Form.svelte'
    import Response from '$lib/components/Response.svelte'
</script>

<GithubCorner url="https://github.com/fedeperin/idea-generator-cohere" />

<div class="container">
    <Title />
    <Form />
    <Response />
</div>

<style>
    .container {
        width: 390px;
    }

    @media (max-width: 400px) {
        .container {
            width: 90vw;
        }
    }
</style>