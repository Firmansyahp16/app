<script>
  export let title = "", content = ""
  export let color = [
    "bg-green-300",
    "bg-teal-300",
    "bg-emerald-300",
    "bg-cyan-300",
    "bg-sky-300"
  ]
</script>
<div class="{color[1]} w-64 h-64 py-5 px-3 rounded-lg text-justify font-mono">
  <p class="font-extrabold text-xl mb-2">{title}</p>
  <p>{content}</p>
</div>