<script>
    import { buttonDisabled } from '$lib/stores.js'
</script>

<button disabled={ $buttonDisabled }>
    { $buttonDisabled ? 'Generating Idea...' : 'Geneate Idea' }
</button>

<style>
    button {
        padding: 10px;
        font-size: 30px;
        background: #1095C1;
        color: #fff;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        width: 100%;
        margin-bottom: 20px;
        transition: opacity .3s ease;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    button:hover {
        opacity: 0.7;
    }
</style>