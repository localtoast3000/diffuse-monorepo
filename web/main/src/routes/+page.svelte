<script>
  import BackgroundImage from '$components/page/background-image.svelte';
</script>

<BackgroundImage />
<main class="relative w-full z-10 px-page-xs flex justify-center">
  <header
    class="w-full flex flex-col items-center mt-[50px] max-w-[500px] md:mt-[200px] md:max-w-[900px]"
  >
    <div class="mb-10 w-full flex flex-col items-center">
      <h1
        class="flex flex-col text-center text-[2rem] sm:text-[3rem] md:text-[4rem] font-header font-bold"
      >
        <span>Words to Wonders,</span>
        <span>The New Era of AI-Driven Visuals.</span>
      </h1>
      <h2 class="text-neutral sm:text-[1.2rem] text-center md:text-[1.5rem]">
        Cutting edge AI technology for image creation and editing
      </h2>
    </div>
    <div class="flex w-full justify-center">
      <button class="btn btn-primary max-w-[150px] w-full normal-case text-[1.2rem]"
        >Start</button
      >
    </div>
  </header>
</main>
