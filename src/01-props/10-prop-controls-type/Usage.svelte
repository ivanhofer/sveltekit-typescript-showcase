<script lang="ts">
	import Component from './Component.svelte'
</script>

<Component value={1} />
<Component value={[1, 2, 3]} />

<Component multiple={false} value={1} />
<Component multiple={false} value={[1, 2, 3]} />

<Component multiple value={[1, 2, 3]} />
<Component multiple value={1} />

<Component multiple={true} value={[1, 2, 3]} />
<Component multiple={true} value={1} />
