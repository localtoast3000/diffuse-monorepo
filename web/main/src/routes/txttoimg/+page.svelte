<script lang="ts">
  import ImageContainer from './components/image-container.svelte';

  let prompt_input = '';
  let src = '';
  let input_error: boolean = false;
  let initial_submit = false;

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (prompt_input.length < 1) {
      input_error = true;
      return;
    }
  };

  const handleButtonClick = () => {
    if (initial_submit) return;
    initial_submit = true;
  };

  $: {
    if (initial_submit) {
      input_error = prompt_input.length < 1;
    }
  }
</script>

<main class="flex w-full px-page-xs">
  <section class="hero min-h-screen flex flex-col w-full">
    <div class="flex justify-center w-full mb-[50px]">
      <ImageContainer {src} />
    </div>
    <form
      on:submit={handleSubmit}
      class="w-full flex flex-col items-center justify-center max-w-[800px]">
      <button
        type="submit"
        on:click={handleButtonClick}
        class="btn mr-auto btn-accent normal-case text-[1rem] mb-[50px]">Generate</button>
      <div class="flex flex-col w-full">
        <p class="{input_error ? '' : 'hidden'} text-error mb-[10px] ml-[5px]">
          You must provide a prompt to generate images
        </p>
        <textarea
          class="textarea w-full border-[2px] border-neutral"
          placeholder="Prompt"
          bind:value={prompt_input} />
      </div>
    </form>
  </section>
</main>
