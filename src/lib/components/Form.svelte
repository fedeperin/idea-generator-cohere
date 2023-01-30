<script>
    import FormSelect from '$lib/components/FormSelect.svelte'
    import FormButton from '$lib/components/FormButton.svelte'
    import { cohereResponse, promptIndex, buttonDisabled } from '$lib/stores.js'

    const handleSubmit = async e => {
        e.preventDefault()
        buttonDisabled.set(true)
        
        const res = await fetch(`/generate?prompt=${ $promptIndex }`)
        const data = await res.json()
        cohereResponse.set(data.response)

        buttonDisabled.set(false)
    }
</script>

<form on:submit={ handleSubmit }>
    <FormSelect />
    <FormButton />    
</form>