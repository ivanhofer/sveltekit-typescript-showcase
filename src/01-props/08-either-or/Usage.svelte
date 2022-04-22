<script lang="ts">
	import Component from './Component.svelte'
</script>

<!-- we need to decide if we want to use a `title` or a `label` -->
<Component name="name-only" />

<Component name="with-label" label="I am a label" />

<Component name="with-title" title="I am a title" />

<!-- we can't define both `label` and `title` at the same time -->
<Component name="label-and-title" title="oops" label="error" />
