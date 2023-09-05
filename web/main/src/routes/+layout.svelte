<script>
  import '../css/global.css';
  import Navbar from './components/navbar.svelte';
  import Footer from './components/footer.svelte';
  import BackgroundImage from './components/background-image.svelte';

  import { onMount, setContext } from 'svelte';

  let current_route = '';

  onMount(() => {
    current_route = window.location.pathname;
  });

  setContext('current_route', () => current_route);
</script>

<Navbar />
<BackgroundImage />
<div class="relative w-full overflow-hidden">
  <slot />
</div>
<Footer />
