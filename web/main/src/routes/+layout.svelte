<script>
  import '../css/global.css';
  import Navbar from '$components/page/navbar.svelte';
</script>

<Navbar />
<div class="content-container w-full">
  <slot />
</div>

<style>
  .content-container {
    display: grid;
    grid-template-columns: 100%;
    overflow: hidden;
    min-height: 800px;
  }
</style>
