<script lang="ts">
    export let isOpen = false;
    export let close: () => void;
    export let title = "";
</script>

{#if isOpen}
  <div class="overlay" on:click={close}>
    <div class="modal" on:click|stopPropagation>
      <button class="close-btn" on:click={close}>✖</button>
      <h2>{title}</h2>
      <slot /> <!-- Dynamic Content -->
    </div>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal {
    background: black;
    color: white;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    max-width: 600px;
    position: relative;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 15px;
    border: none;
    background: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>
