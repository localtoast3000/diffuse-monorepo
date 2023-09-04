<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<!-- svelte-ignore a11y-label-has-associated-control -->
<div class="relative navbar bg-base-100 z-50">
  <div class="navbar-start">
    <a
      href="/"
      class="btn btn-ghost normal-case text-xl"
    >
      <img
        src="graphics/logo/logo.svg"
        alt="Diffuse logo"
      />
    </a>
  </div>
  <div class="navbar-center hidden md:flex">
    <ul class="menu menu-horizontal px-1">
      <li>
        <a href="/txttoimg">Text to Image</a>
      </li>
      <li>
        <a href="/imgtoimg">Image to Image</a>
      </li>
      <li>
        <a href="/inpainting">Inpainting</a>
      </li>
    </ul>
  </div>
  <div class="navbar-end">
    <a
      href="/account/signup"
      class="btn hidden md:flex">Sign Up</a
    >
    <div class="dropdown dropdown-end">
      <label
        tabindex="0"
        class="btn btn-ghost md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </label>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <a href="/txttoimg">Text to Image</a>
        </li>
        <li>
          <a href="/imgtoimg">Image to Image</a>
        </li>
        <li>
          <a href="/inpainting">Inpainting</a>
        </li>
        <li>
          <a
            href="/account/signup"
            class="btn flex items-center justify-center"
            ><span class="h-full w-full flex items-center justify-center">Sign Up</span
            ></a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
