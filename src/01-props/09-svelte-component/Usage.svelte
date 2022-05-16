<script lang="ts">
	import Component, { openModal } from './Component.svelte'
	import Modal1Content from './ModalContent1.svelte'
	import ModalContent2 from './ModalContent2.svelte'

	// Modal1Content doesn't expect any props, so we can omit the second parameter
	const openModal1 = () => openModal(Modal1Content)

	// Modal2Content expects props, so we also need to pass them
	const openModal2 = () => openModal(ModalContent2, { title: 'Modal 2', description: 'This is modal 2' })
</script>

<!-- choose a place in the DOM where the modal should show.
	This would ideally be somewhere near the app's root -->
<Component />

<button on:click={openModal1}>Open Modal 1</button>

<button on:click={openModal2}>Open Modal 2</button>
