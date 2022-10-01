<script>
  import TextFill from './TextFill.svelte'
</script>

<svelte:head>
  <title>
    Bar 5
  </title>
</svelte:head>

<div class="background">
  <div class="main-container">
    <div class="wtfisthis">
      <!-- Navigation bar -->
      <div class="surround-top-menu-frame">
        <nav class="top-menu-frame">
          <!-- Site Name -->
          <div class="site-name-frame">
            <h3>Mignone_Donation</h3>
          </div>
          <ul class="menu-items-frame">
            <li>
              <div class="example_svg"><a href="/">Root</a>
              <svg width="89" height="16" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="example_svg" clip-path="url(#clip0_3_13)">
              <path id="Vector 1" d="M4 19C6.30004 12.5923 9.35865 7.09731 13.049 5.6142C20.0659 2.79426 27.8318 10.4268 34.6507 13.4829C51.0295 20.8236 67.7271 16.7293 84 10.046" 
							stroke="transparent" stroke-width="3" stroke-linecap="round"/>
              </g>
              <defs>
              <clipPath id="clip0_3_13">
              <rect width="89" height="19" fill="white"/>
              </clipPath>
              </defs>
              </svg></div>
            </li>
            <li>
              <a href="/bar">Home</a>
            </li>
            <li>
              <a href="/bar1">Bar1</a>
            </li>
            <li>
              <a href="/bar2">Bar2</a>
            </li>
            <li>
              <a href="/bar3">Bar3</a>
            </li>
          </ul>
        </nav>
      </div>
      
      <!-- Main page -->
      <div class="content-area-frame">
        <TextFill />
      </div>
    </div>
  </div>
</div>

<style>

.background{
  @apply 
    bg-red-400
  ;
}


.main-container{
  @apply
    flex
    border-8 
    border-cyan-600 
    max-w-full
  ;
  justify-content: center;
}

.wtfisthis{
  @apply 
    border-8 
    border-yellow-600 
    bg-slate-200 
    px-32 
    py-1
  ;
  
  justify-content: space-around;
}

.surround-top-menu-frame{
  @apply 
    fixed
    bg-slate-200
    border-8
    border-black
    flex
    justify-center
  ;

  left: 0;
  top: 0;
  height: 17%;
  width: 100%;
}

.top-menu-frame{
  @apply 
    border-8 
    border-cyan-600 
    bg-slate-200 
    px-32 
    py-1 
    flex 
    justify-center
    items-center
    md:flex-col
    xl:flex-row
    md:flex-row
    max-w-5xl
  ;

  position: fixed;
  justify-content: space-around;
}

.site-name-frame{
  @apply 
    border-8 
    border-blue-600 
    py-5 
    w-full
  ;
  display: flex;
  justify-content: space-around;
  width: 30%;
}

.menu-items-frame {
  @apply 
    hidden
    border-8 
    border-green-600 
    px-24 
    py-3 
    max-w-xl
    w-full
    justify-between
    items-center
    md:flex
    mt-2
    mb-1
    xl:my-0
  ;
 /*
  display: flex;
  justify-content: space-around;
 */
}

.menu-items-frame > * {
  @apply
    px-3
    leading-4
    font-['Comic_Sans'] text-2xl
    justify-self-start
  ;
  text-align: center;
}

.menu-items-frame > *:hover {
  @apply
    text-red-600;
  ;
}

.example_svg{
  @apply
    border-2
    border-black
    justify-self-start
    w-full
  ;
}

/*path{*/
path{
	stroke: transparent;
	stroke-dasharray: 1000;
}

path:hover{
	stroke: red;
  animation: dash 4s linear forwards;
}

@keyframes dash {
	from{
		stroke-dashoffset: 1000;
	}
  to {
   	stroke-dashoffset: 0;
  }
}

.content-area-frame{
  @apply 
    max-w-5xl
    border-8 
    border-red-600 
  ;
}
</style>
