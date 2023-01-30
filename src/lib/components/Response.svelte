<script>
    import { cohereResponse } from '$lib/stores.js'
</script>

<p>{ $cohereResponse ? `${ $cohereResponse }` : '' }</p>

<style>
    p {
        max-width: 100%;
        font-size: 20px;
        color: #eee;
        text-align: justify;
    }
</style>