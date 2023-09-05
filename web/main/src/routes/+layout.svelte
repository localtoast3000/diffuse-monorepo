<script>
  import '../css/global.css';
  import Navbar from '$components/page/navbar.svelte';
  import Footer from '$components/page/footer.svelte';
</script>

<Navbar />
<div class="content-container w-full overflow-hidden">
  <slot />
</div>
<Footer />

<style>
  .content-container {
    display: grid;
    grid-template-columns: 100%;
    overflow: hidden;
    min-height: 800px;
  }
</style>
