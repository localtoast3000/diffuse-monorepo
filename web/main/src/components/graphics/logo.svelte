<script>
    export let with_pokedex_text = true
</script>

<div class="flex flex-col items-center justify-center">
  <img {...$$restProps} src="/svgs/International_Pokémon_logo.svg" alt="pokemon logo" />
  {#if with_pokedex_text}
  POKEDEX
  {/if}
  
</div>