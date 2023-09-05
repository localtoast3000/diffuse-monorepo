<script lang="ts">
  export let image_number = 0;
  export let src = '';
  export let loading: string | boolean = '';

  let loaded = false;
  let error = false;

  const defaultImage = '/graphics/image-placeholder.svg';

  const loadedHandler = () => {
    loading = false;
    error = false;
  };

  const errorHandler = () => {
    loading = false;
    error = true;
  };

  const determineSrc = () => (!src ? defaultImage : src);

  const determineAlt = () =>
    `${src === defaultImage ? 'Placeholder for none generated' : 'Generated'} ${
      image_number === 0 ? 1 : image_number
    }`;
</script>

<div
  class=" flex p-[10px] items-center justify-center w-full max-w-[500px] h-[500px] bg-base-300 border-primary border-[2px] rounded-[10px]">
  <img
    class="w-full max-w-[150px]"
    src={determineSrc()}
    alt={determineAlt()}
    on:load={loadedHandler}
    on:error={errorHandler} />
</div>
