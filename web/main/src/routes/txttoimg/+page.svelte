<script lang="ts">
  import ImageContainer from './components/image-container.svelte';
  import Textarea from '$components/form/textarea.svelte';
  import { error } from '@sveltejs/kit';

  let src = '';
  let initial_submit = false;
  let inputs = {
    prompt: '',
    negativePrompt: '',
    samples: 1,
  };
  let errors = {
    prompt: false,
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    if (inputs.prompt.trim().length < 1) errors.prompt = true;
  };

  const handleButtonClick = () => {
    if (initial_submit) return;
    initial_submit = true;
  };

  $: {
    if (initial_submit) {
      errors.prompt = inputs.prompt.trim().length < 1;
    }
  }
</script>

<main class="flex w-full px-page-xs">
  <section class="hero min-h-screen">
    <div
      class="w-full flex items-center lg:gap-[50px] flex-col max-w-[500px] lg:max-w-none"
    >
      <form
        on:submit={handleSubmit}
        class="w-full my-[30px] lg:my-0 lg:mt-[50px] flex flex-col items-center justify-center lg:justify-start max-w-[500px] lg:max-w-[600px]"
      >
        <div class="mb-[20px] w-full flex">
          <button
            type="submit"
            on:click={handleButtonClick}
            class="btn btn-sm w-[200px] mr-auto btn-accent normal-case text-[1rem]"
            >Generate</button
          >
          <div class="flex mt-auto">
            <div class="w-full flex flex-col max-w-[100px]">
              <input
                id="samples"
                type="range"
                min="1"
                max="4"
                class="range range-xs range-info"
                step="1"
                bind:value={inputs.samples}
              />
              <div class="w-full flex justify-between text-xs px-2 mt-[5px]">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col w-full">
          <div class="w-full flex flex-col mb-[20px]">
            <label
              class="ml-[10px] mb-[5px] text-[0.9rem]"
              for="prompt">Prompt</label
            >
            <Textarea
              id="prompt"
              class="textarea w-full border-neutral"
              placeholder="Cat with a space helmet"
              bind:value={inputs.prompt}
            />
            <p
              class="{errors.prompt
                ? ''
                : 'hidden'} text-error mt-[10px] ml-[5px] text-[0.9rem]"
            >
              You must provide a prompt to generate images
            </p>
          </div>
          <div class="w-full flex flex-col mb-[20px]">
            <label
              class="ml-[10px] mb-[5px] text-[0.9rem]"
              for="prompt">Negative Prompt</label
            >
            <Textarea
              id="prompt"
              class="textarea w-full border-neutral"
              placeholder="stars, dogs, cars"
              bind:value={inputs.negativePrompt}
            />
          </div>
        </div>
      </form>
      <div class="flex justify-center w-full mb-[50px] flex-wrap gap-[10px]">
        {#each Array(inputs.samples) as _, idx}
          <ImageContainer
            class="flex p-[10px] max-w-[500px] items-center justify-center w-full h-[500px] bg-base-300 border-primary border-[2px] rounded-[10px]"
            {src}
          />
        {/each}
      </div>
    </div>
  </section>
</main>
