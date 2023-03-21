<script>
  export let notif = '', page = ""
</script>
<div class="flex items-center px-1 mt-2">
  <div class="grow"><button>{page}</button></div>
  {#if notif !== ''}
    <div class="bg-slate-200 p-1 rounded-lg"><p class="text-xs">{notif}</p></div>
  {/if}
</div>