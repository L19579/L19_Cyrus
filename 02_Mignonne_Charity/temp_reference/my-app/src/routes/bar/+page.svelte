<script>
  let count = 0;

  function handleClick(){
    count += 1;
  }
</script>

<div class="mymenu bg-black">
    <ul id="menu" class="py-6 px-10">
      <li class="text-white py-10">
        <a href="/">Option 0</a>
      </li>
      <li class="text-white py-10">
        <a href="/bar1">Option 1</a>
      </li>
      <li class="text-white py-10">
        <a href="/bar2">Option 2</a>
      </li>
      <li class="text-white py-10">
        <a href="/bar3">Option 3</a>
      </li>
      <li class="text-white py-10">
        <a href="/bar4">Option 4</a>
      </li>
      <li class="text-white py-10">
        <a href="/bar5">Option 5</a>
      </li>
    </ul>
</div>

<pre>
  <span></span>
  <p id="sentence">test sentence</p>
</pre>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time': 'times'} 
</button>

<style>
  .mymenu{
    width: 100%;
  }

	pre {border: 1px solid gray}
	span {visibility: hidden}

  ul#menu li {
    display:inline;
  }

  li + li::before{
    /* content: "   |   "; */
  }
  
  ul#menu{
    margin: auto;
    width: 40%;
    border: 3px solid green;
  }

  p#sentence{
    margin: auto;
    width: 14%;
    border: 3px solid green;
    padding: 10px;
  }
</style>
