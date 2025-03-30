<script>
  import { onMount } from 'svelte';
  import { theme } from '$lib/stores/theme';

  let mounted = false;

  onMount(() => {
    mounted = true;
  });
</script>

{#if mounted}
<div class="background-effect" class:dark={$theme} class:light={!$theme}></div>
{/if}

<style>
  .background-effect {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
    opacity: 0.6;
    transition: opacity 0.5s ease;
  }

  .background-effect.dark {
    background: radial-gradient(circle at 10% 20%, rgba(50, 50, 70, 0.05) 0%, rgba(30, 30, 40, 0.03) 90%);
    animation: pulse-dark 15s ease-in-out infinite alternate;
  }

  .background-effect.light {
    background: radial-gradient(circle at 10% 20%, rgba(230, 240, 255, 0.05) 0%, rgba(240, 245, 250, 0.03) 90%);
    animation: pulse-light 15s ease-in-out infinite alternate;
  }

  @keyframes pulse-dark {
    0% {
      opacity: 0.4;
      background-position: 0% 0%;
    }
    50% {
      opacity: 0.6;
      background-position: 100% 100%;
    }
    100% {
      opacity: 0.4;
      background-position: 0% 0%;
    }
  }

  @keyframes pulse-light {
    0% {
      opacity: 0.4;
      background-position: 0% 0%;
    }
    50% {
      opacity: 0.6;
      background-position: 100% 100%;
    }
    100% {
      opacity: 0.4;
      background-position: 0% 0%;
    }
  }
</style>