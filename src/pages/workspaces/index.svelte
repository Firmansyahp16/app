<script>
  import { onMount } from "svelte";
  import Card from "../../_components/card.svelte";
  import CardBlank from "../../_components/cardBlank.svelte";
  import { createClient } from "@supabase/supabase-js";
  const supabase = createClient(
    "https://vufenhqimkvryweilgyx.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ1ZmVuaHFpbWt2cnl3ZWlsZ3l4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NjY2OTUsImV4cCI6MTk5NDQ0MjY5NX0.Vh5FcxLQDEGoU6NydEIhCaLyH_g0xA59WeWajnxwGb8"
  );

  export let users = [], tasks = [];
  onMount(() => {
    getUsers();
    getTask();
  });
  async function getUsers() {
    await supabase
      .from("users")
      .select()
      .then((res) => {
        users = res.data;
      });
    // console.log(users);
  }
let getTask = async() => {
  await supabase
  .from('tasks')
  .select()
  .eq('uuid_users', "c97ef600-9ee4-4e7b-a2dc-37a6811b35b9")
  .then((res) => {
    tasks = res.data
  })
  console.log(tasks)
}
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<div class="flex">
  <button>
    <Card title="Counter" content="Count is {count}" />
  </button>
  <button on:click={increment}>
    <CardBlank />
  </button>
  {#each tasks as task}
    <button>
      <Card title="{task.title}" content="{task.content}"/>
    </button>
  {/each}
</div>
