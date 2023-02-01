<script>
    import { randomness } from '$lib/stores.js'
    let range = 1.5
    
    const handleInput = () => {
        randomness.set(range)
    }
</script>

<label for="range">Randomness: { range }</label>

<!-- Input styled using https://www.cssportal.com/style-input-range/ -->
<input type="range" id="range" class="range" step="0.1" min="1" max="2" bind:value={ range } on:input={ handleInput }>

<style>
    label {
        color: #eee;
        font-size: 18px;
    }

    .range {
        height: 33px;
        appearance: none;
        margin: 10px 0;
        width: 100%;
        background: transparent;
        margin-bottom: 40px;
    }

    .range:focus {
        outline: none;
    }

    .range::-webkit-slider-runnable-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: #2497E3;
        border-radius: 50px;
    }

    .range::-webkit-slider-thumb {
        border: 2px solid #2497E3;
        height: 25px;
        width: 25px;
        border-radius: 25px;
        background: #A1D0FF;
        cursor: pointer;
        -webkit-appearance: none;
        margin-top: -11px;
    }

    .range:focus::-webkit-slider-runnable-track {
        background: #2497E3;
    }

    .range::-moz-range-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: #2497E3;
        border-radius: 50px;
    }

    .range::-moz-range-thumb {
        border: 2px solid #2497E3;
        height: 25px;
        width: 25px;
        border-radius: 25px;
        background: #A1D0FF;
        cursor: pointer;
    }

    .range::-ms-track {
        width: 100%;
        height: 5px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }

    .range::-ms-fill-lower {
        background: #2497E3;
        border-radius: 100px;
    }

    .range::-ms-fill-upper {
        background: #2497E3;
        border-radius: 100px;
    }

    .range::-ms-thumb {
        margin-top: 1px;
        border: 2px solid #2497E3;
        height: 25px;
        width: 25px;
        border-radius: 25px;
        background: #A1D0FF;
        cursor: pointer;
    }

    .range:focus::-ms-fill-lower {
        background: #2497E3;
    }

    .range:focus::-ms-fill-upper {
        background: #2497E3;
    }
</style>