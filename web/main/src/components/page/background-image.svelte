<script>
  export const class_ext = '';
</script>

<div class="absolute background-container full-width {class_ext}">
  <div class="bolt-pattern">
    <img
      src="/images/bolt/bolt.png"
      loading="eager"
      height=""
      sizes="(max-width: 479px) 100vw, 732px"
      alt="background bolt"
      class="bolt-img-bg"
      srcset="/images/bolt/bolt-500.png 500w, /images/bolt/bolt-800.png 800w, images/bolt/bolt-1080.png 1080w, images/bolt/bolt-1468.png 1468w  1468w" />
    <div class="elipse-bolt-effect-wrapper xsmall-hidden">
      <div class="elipse-bolt-effect" />
    </div>
    <div class="rectangle-bolt-effect" />
  </div>
</div>

<style>
  .background-container.full-width {
    max-width: none;
  }
  .background-container {
    overflow-x: clip;
  }
  .background-container {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
  }
  .elipse-bolt-effect {
    z-index: 10;
    width: 468px;
    height: 1063px;
    opacity: 0.2;
    filter: blur(68px);
    mix-blend-mode: hard-light;
    border-radius: 100%;
    position: absolute;
    left: 35%;
    background: linear-gradient(180deg, hsl(var(--p)) 0%, var(--third) 100%);
    transform: matrix(-0.39, -0.92, 1, -0.06, 0, 0);
  }
  .rectangle-bolt-effect {
    background: linear-gradient(180deg, #111827 0%, rgba(17, 24, 39, 0) 100%);
  }
  .background-container {
    overflow-x: clip;
  }
  .bolt-img-bg {
    z-index: 10;
    object-fit: cover;
    position: absolute;
    left: 50%;
    overflow: visible;
    transform: translate(-50%);
  }
  .elipse-bolt-effect-wrapper {
    z-index: 5;
    width: 100vw;
    mix-blend-mode: normal;
    background-color: #111827;
    position: absolute;
    top: 0%;
    bottom: 0%;
    left: 50%;
    right: 0%;
    transform: translate(-50%);
  }
  .rectangle-bolt-effect {
    z-index: 15;
    width: 100%;
    height: 212px;
    position: absolute;
    top: 0;
    background: linear-gradient(180deg, #111827 0%, rgba(17, 24, 39, 0) 100%);
  }
  .full-width {
    width: 100%;
  }
  .bolt-pattern {
    z-index: 10;
    width: 732px;
    height: 844px;
    opacity: 0.6;
    position: absolute;
    top: 73px;
    left: 50%;
    transform: translate(-50%);
  }
</style>
