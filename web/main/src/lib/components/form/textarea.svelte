<script lang="ts">
  export let value = '';

  function autoResize(e: Event & { currentTarget: EventTarget & HTMLTextAreaElement }) {
    const textarea = e.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  }
</script>

<textarea
  bind:value
  on:input={autoResize}
  rows="1"
  {...$$restProps}
/>

<style>
  textarea {
    overflow: hidden;
    resize: none;
  }
</style>
