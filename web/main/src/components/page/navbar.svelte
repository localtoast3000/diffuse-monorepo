<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->

<script>
  import { afterNavigate } from '$app/navigation';
  import { getContext } from 'svelte';

  let current_route = getContext('current_route');

  afterNavigate((navigation) => {
    current_route = navigation.to?.route.id;
  });
</script>

<div class="drawer z-50">
  <input
    id="drawer-toggle-btn"
    type="checkbox"
    class="drawer-toggle" />
  <div class="drawer-content flex flex-col">
    <div class="w-full navbar h-[90px] px-[20px] bg-transparent">
      <div class="navbar-start">
        <a
          href="/"
          class="btn btn-ghost">
          <img
            src="/graphics/logo/logo.svg"
            alt="Diffuse logo" />
        </a>
      </div>
      <div class="flex-none md:hidden navbar-end">
        <label
          for="drawer-toggle-btn"
          class="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-6 h-6 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>
      <nav class="hidden md:block navbar-center">
        <ul class="menu menu-horizontal font-semibold text-[1rem]">
          <li>
            <a
              href="/txttoimg"
              class="{current_route === '/txttoimg'
                ? 'btn-disabled text-neutral'
                : ''} h-[50px] flex">Text to Image</a>
          </li>
          <li>
            <a
              href="/imgtoimg"
              class="{current_route === '/imgtoimg'
                ? 'btn-disabled text-neutral'
                : ''} h-[50px] flex">Image to Image</a>
          </li>
          <li>
            <a
              href="/inpainting"
              class="{current_route === '/inpainting'
                ? 'btn-disabled text-neutral'
                : ''} h-[50px] flex">Inpainting</a>
          </li>
        </ul>
      </nav>
      <div class="hidden md:flex navbar-end">
        <a
          href="/account/signup"
          class="{current_route === '/account/signup'
            ? 'btn-disabled text-neutral'
            : ''} btn btn-secondary normal-case text-[1rem]">Sign Up</a>
      </div>
    </div>
  </div>
  <div class="drawer-side">
    <label
      for="drawer-toggle-btn"
      class="drawer-overlay" />
    <nav
      class="menu p-4 w-[200px] min-[350px]:w-[250px] min-[400px]:w-[300px] sm:w-80 min-h-full bg-base-200">
      <a
        href="/"
        class="flex justify-start btn btn-ghost mb-[20px]">
        <img
          src="/graphics/logo/logo.svg"
          alt="Diffuse logo" />
      </a>
      <ul class="mb-[30px]">
        <li>
          <a
            href="/txttoimg"
            class="{current_route === '/txttoimg'
              ? 'btn-disabled text-neutral'
              : ''} flex h-[50px] min-[400px]:pl-[50px]">Text to Image</a>
        </li>
        <li>
          <a
            class="{current_route === '/imgtoimg'
              ? 'btn-disabled text-neutral'
              : ''} flex h-[50px] min-[400px]:pl-[50px]"
            href="/imgtoimg">Image to Image</a>
        </li>
        <li>
          <a
            class="{current_route === '/inpainting'
              ? 'btn-disabled text-neutral'
              : ''} flex h-[50px] min-[400px]:pl-[50px]"
            href="/inpainting">Inpainting</a>
        </li>
      </ul>
      <div class="w-full flex justify-center">
        <a
          href="/account/signup"
          class="{current_route === '/account/signup'
            ? 'btn-disabled'
            : ''} btn btn-secondary w-full max-w-[250px] normal-case text-[1rem]"
          >Sign Up</a>
      </div>
    </nav>
  </div>
</div>
