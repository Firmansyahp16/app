<script>
  import TasksListsContent from "./tasksListsContent.svelte";
  let count = 12;
  export let countToString = count.toString();
</script>

<div class="bg-gray-300 h-screen w-60 p-4">
  <div class="flex align-middle">
    <div class="grow">
      <div class="grid h-full content-center">
        <p class="text-2xl font-bold">Menu</p>
      </div>
    </div>
    <button class="bg-slate-200 p-2 rounded-lg">
      <img src="https://icongr.am/octicons/three-bars.svg?size=20" alt="" />
    </button>
  </div>
  <form class="my-8">
    <input
      type="text"
      class="w-full rounded-lg bg-slate-200 text-sm p-2"
      placeholder="Search"
    />
  </form>
  <div class="h-60 text-sm bg-red-100 my-4">
    <p class="text-xl">Tasks</p>
    <TasksListsContent page="Sticky Wall" notif={countToString} />
    <TasksListsContent page="Calendar" notif="" />
    <TasksListsContent page="Notes" notif="" />
  </div>
  <div class="h-60 text-sm bg-red-100">
    <p class="text-xl">Lists</p>
    <TasksListsContent page="Sticky Wall" notif={countToString} />
    <TasksListsContent page="Calendar" notif="" />
    <TasksListsContent page="Notes" notif="" />
  </div>
  <div class="h-20 bg-red-100 mt-4 text-sm">
    <p class="text-xl">Tags</p>
    <div class="flex space-x-1 flex-wrap">
      <button class="bg-blue-100 p-2 rounded-xl">Tags1</button>
      <button class="bg-blue-100 p-2 rounded-xl">Tags2</button>
      <button class="bg-blue-100 p-2 rounded-xl">Add Tags</button>
    </div>
  </div>
</div>
