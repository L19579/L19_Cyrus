<script>
  import Panel1 from './Panel1.svelte'
  import Navbar from './../shared/Navbar.svelte'
  import Footer from './../shared/Footer.svelte'
</script>

<Navbar current_nav_page = 'impact'/>
<div class="panels">
  <Panel1 />
</div>
<Footer />

<style>
  .panels{
    @apply
      block
      xsm:pt-[110px]
      sm:pt-[110px]
      md:pt-[123px]
      lg:pt-[127px]
      xl:pt-[110px]
    ;
  }
</style>
