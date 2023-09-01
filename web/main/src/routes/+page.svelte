<script>
  import Form from "$components/form/form.svelte";
  import Input from "$components/form/input.svelte";
</script>

<main class="w-full min-h-[300px] flex items-center justify-center flex-col">
  <header>
    <span class="flex flex-col text-[2rem] font-[700]">
      <span class="flex gap-[8px]">
        <p>What</p>
        <h1>Pokemon</h1>
      </span>
      <p>are you looking for?</p>
    </span>
  </header>
  <section>
    <Form>
      <Input />
    </Form>
  </section>
</main>