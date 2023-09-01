<script>
  export let icon = false
  export let icon_left = true
  export let classes = {
    container: '',
    input: ''
  }
</script>

<div class="{classes.container}">
    {#if icon && icon_left}
    {icon}
    {/if}
    <input {...$$restProps} class="{classes.input}" />
    {#if icon && !icon_left}
    {icon}
    {/if}
</div>