<script>
    import { cohereResponse } from '$lib/stores.js'

    let disabled = false
    let promptIndex = 0

    const handleClick = async () => {
        disabled = true
        
        const res = await fetch(`/generate?prompt=${ promptIndex }`)
        const data = await res.json()
        cohereResponse.set(data.response)

        disabled = false
    }

    const handleSelectChange = e => {
        const { selectedIndex } = e.target
        promptIndex = selectedIndex
    }
</script>

<div class="select">
    <select on:change={ handleSelectChange }>
        <option value="web">Web App</option>
        <option value="mobile">Mobile App</option>
        <option value="terminal">Terminal Script</option>
    </select>
</div>

<button disabled={ disabled } on:click={ handleClick }>
    { disabled ? 'Generating Idea...' : 'Geneate Idea' }
</button>

<style>
    button {
        padding: 10px;
        font-size: 30px;
        background: #1095C1;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        width: 100%;
        margin-bottom: 20px;
    }

    button:disabled {
        opacity: 0.5;
        cursor:not-allowed
    }

    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: none;
        background: #0c141a;
        background-image: none;
        flex: 1;
        padding: 0 .5em;
        color: #fff;
        cursor: pointer;
        font-size: 1em;
        font-family: 'Open Sans', sans-serif;
    }

    select::-ms-expand {
        display: none;
    }

    .select {
        position: relative;
        display: flex;
        width: 100%;
        height: 3em;
        line-height: 3;
        overflow: hidden;
        border-radius: .25em;
        margin-bottom: 20px;
    }

    .select::after {
        content: '\25BC';
        color: #141E26;
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        cursor: pointer;
        pointer-events: none;
        transition: .1s all ease;
    }

    .select:hover::after {
        color: #1095C1;
    }
</style>