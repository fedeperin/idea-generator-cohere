<script>
    import GithubCorner from '$lib/components/GithubCorner.svelte'
    import GenerateForm from '$lib/components/GenerateForm.svelte'
    import Response from '$lib/components/Response.svelte'
</script>

<GithubCorner url="https://github.com/fedeperin/idea-generator-cohere" />

<h1 class="title">Idea Generator 💡</h1>

<div class="container">
    <GenerateForm />
    <Response />
</div>

<style>
    .title {
        position: fixed;
        top: 10px;
        left: 10px;
        color: #eee;
    }

    .container {
        width: 300px;
    }
</style>