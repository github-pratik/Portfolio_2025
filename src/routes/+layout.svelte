<script lang="ts">
	import 'uno.css';
	import NavMenu from '$lib/components/NavMenu/NavMenu.svelte';
	import BackgroundEffect from '$lib/components/BackgroundEffect.svelte';
	import '$lib/index.scss';
	import { onHydrated, theme } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	// ? moved to +layout.server.ts : will be deleted when we make sure that everything is alright
	// export const prerender = true;

	onMount(() => onHydrated());
</script>

<div class={`body contents ${$theme ? 'theme-dark' : 'theme-light'}`}>
	<BackgroundEffect />
	<NavMenu />
	<div class="content container"><slot /></div>
</div>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 0px 0px;
	}

	.body {
		margin: 0px;
		color: var(--main-text);
		font-family: var(--text-f);
		display: flex;
		flex-direction: column;
		transition-duration: 200ms;
		letter-spacing: 1px;
		min-height: 100vh;
		background-color: transparent;
	}

	:global(.theme-dark) {
		background-attachment: fixed;
		background-image: url('/black-pat1.jpg'), linear-gradient(125deg, #121212 0%, #2d2d2d 50%, #1a1a1a 100%);
		background-size: cover;
		background-position: center;
	}

	:global(.theme-light) {
		background-attachment: fixed;
		background-image: url('/light-pat1.jpg'), linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
		background-size: cover;
		background-position: center;
	}

	:global(p) {
		margin: 0px;
	}

	:global(h1, h2, h3, h4, h5, h6) {
		margin: 5px 0px;
	}
</style>
