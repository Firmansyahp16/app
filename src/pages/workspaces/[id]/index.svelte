<script>
  import { onMount } from "svelte";
  import Card from "../../../_components/card.svelte";
  import CardBlank from "../../../_components/cardBlank.svelte";
  import { supabase } from "../../../server";
  export let id,
    tasks = [];
  export const getUsers = async () => {
    await supabase
      .from("users")
      .select("id")
      .eq("username", "firman")
      .eq("password", "firmansyah")
      .then((res) => {
        id = res.data[0].id;
      });
  };
  export const getTasks = async (uuid) => {
    await supabase
      .from("tasks")
      .select("title,content")
      .eq("uuid_users", uuid)
      .then((res) => {
        tasks = Object.values(res.data);
      });
  };
  let count = 0;
  const increment = () => {
    count += 1;
  };
  onMount(async() => {
    await getUsers()
    await getTasks(id)
  });
</script>
<!-- <button on:click={getTasks(id)}>Get Tasks</button> -->
<div class="flex flex-wrap p-3 space-x-5 justify-center">
  <!-- <button>
    <Card title="Counter" content="Count is {count}" />
  </button>
  <button on:click={increment}>
    <CardBlank />
  </button> -->
  {#if id}
    {#each tasks as task}
      <ul>
        <Card title={task.title} content={task.content} />
      </ul>
    {/each}
  {/if}
</div>
<!-- <button on:click={getUsers()}>Get Users</button>
<button on:click={getTasks(id)}>Get Tasks</button> -->
