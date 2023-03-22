<script>
  import { goto } from "@roxi/routify";
  import { supabase } from "../server";
  export let username = "",
    password = "";
  export let isLogin = true;
  export let uuid
  export const getUsers = async(user,pass) => {
    await supabase
    .from("users")
      .select("id")
      .eq("username", user)
      .eq("password", pass)
      .then((res) => {
        uuid = res.data[0].id;
      });
  }
</script>

{#if isLogin}
  <h1>Login</h1>
  <form>
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" bind:value={username} />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" bind:value={password} />
    </div>
  </form>
  <button on:click={() => {
    getUsers(username,password)
    if(uuid) {
      alert("Selamat Datang")
      $goto("./workspaces/" + uuid)
    }
  }}>Cek</button>
  <!-- <p>{uuid}</p> -->
  <!-- <a href="/workspaces" on:click={login(username,password)}>Login</a> -->
  <!-- <a href={$url("./workspaces/:id", {id: uuid})}>Login</a> -->
  <button
    on:click={() => {
      isLogin = !isLogin;
    }}>New User?</button
  >
{:else if !isLogin}
  <h1>Sign Up</h1>
  <form>
    <div>
      <label for="username">Username</label>
      <input type="text" name="username" bind:value={username} />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="password" name="password" bind:value={password} />
    </div>
  </form>
  <button>Sign Up</button>
  <button
    on:click={() => {
      isLogin = !isLogin;
    }}>Old User?</button
  >
{/if}
