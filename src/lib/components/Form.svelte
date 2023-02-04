<script>
    import FormSelect from '$lib/components/FormSelect.svelte'
	import FormRange from './FormRange.svelte';
    import FormButton from '$lib/components/FormButton.svelte'
    import { cohereResponse, promptIndex, buttonDisabled, randomness } from '$lib/stores.js'

    const handleSubmit = async e => {
        e.preventDefault()
        buttonDisabled.set(true)
        
        const params = new URLSearchParams({
            randomness: $randomness,
            prompt: $promptIndex
        })

        const res = await fetch(`/api/generate?${ params }`)
        const data = await res.json()
        cohereResponse.set(data.response)

        buttonDisabled.set(false)
    }
</script>

<form on:submit={ handleSubmit }>
    <FormSelect />
    <FormRange />
    <FormButton />
</form>