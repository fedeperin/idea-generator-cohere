<script>
    import { promptIndex } from '$lib/stores.js'

    const handleSelectChange = e => {
        const { selectedIndex } = e.target
        promptIndex.set(selectedIndex)
    }
</script>

<div class="select">
    <select on:change={ handleSelectChange }>
        <option value="web">Web App</option>
        <option value="mobile">Mobile App</option>
        <option value="terminal">2D Game</option>
        <option value="terminal">3D Game</option>
        <option value="terminal">Terminal Script</option>
    </select>
</div>

<style>
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: none;
        background: #323744;
        background-image: none;
        flex: 1;
        padding: 5px 15px;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
        border-radius: 50px;
        font-family: 'Open Sans', sans-serif;
    }

    select::-ms-expand {
        display: none;
    }

    .select {
        position: relative;
        display: flex;
        width: 100%;
        height: 54px;
        line-height: 3;
        overflow: hidden;
        margin-bottom: 20px;
    }

    .select::after {
        content: '\25BC';
        color: #141E26;
        position: absolute;
        top: 3px;
        right: 0;
        padding: 0 20px;
        cursor: pointer;
        pointer-events: none;
        transition: .1s all ease;
    }

    .select:hover::after {
        color: #1095C1;
    }
</style>