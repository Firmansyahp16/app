<script>
  import { goto } from "@roxi/routify";
  import { supabase } from "../server";
  export let username = "",
    password = "";
  export let isLogin = true;
  export let uuid;
  export const getUsers = async (user, pass) => {
    await supabase
      .from("users")
      .select("id")
      .eq("username", user)
      .eq("password", pass)
      .then((res) => {
        uuid = res.data[0].id;
      });
  };
</script>

<div class="flex py-20 items-center justify-center">
  {#if isLogin}
    <div class="w-1/6 rounded-lg bg-red-400 px-5 py-4 text-center">
      <div class="py-5">
        <h1 class="text-3xl font-extrabold">Login</h1>
      </div>
      <div class="mt-4 space-y-3">
        <div class="space-y-1">
          <p>Username</p>
          <input
            type="text"
            class="w-full rounded-lg px-3 py-1 text-center"
            placeholder="Username"
            required
            bind:value={username}
          />
        </div>
        <div class="space-y-1">
          <p>Password</p>
          <input
            type="password"
            class="w-full rounded-lg px-3 py-1 text-center"
            placeholder="Password"
            required
            bind:value={password}
          />
        </div>
        <div class="w-full py-3">
          <button
            class="w-fit rounded-lg bg-gray-400 px-3 py-1"
            on:click={() => {
              getUsers(username, password);
              if (uuid) {
                // alert("Selamat Datang");
                $goto("./workspaces/" + uuid);
              }
            }}>Login</button
          >
        </div>
      </div>
      <div class="mt-8 flex justify-center space-x-1 p-3">
        <div>---------------</div>
        <div>OR</div>
        <div>---------------</div>
      </div>
      <div class="flex justify-center space-x-3 py-1">
        <button
          on:click={() => {
            isLogin = !isLogin;
          }}>Doesn't have an account?</button
        >
      </div>
    </div>
  {:else}
    <div class="w-1/6 rounded-lg bg-red-400 px-5 py-4 text-center">
      <div class="py-5">
        <h1 class="text-3xl font-extrabold">Sign Up</h1>
      </div>
      <div class="mt-4 space-y-3">
        <div class="space-y-1">
          <p>Username</p>
          <input
            type="text"
            class="w-full rounded-lg px-3 py-1 text-center"
            placeholder="Username"
            required
            bind:value={username}
          />
        </div>
        <div class="space-y-1">
          <p>Password</p>
          <input
            type="password"
            class="w-full rounded-lg px-3 py-1 text-center"
            placeholder="Password"
            required
            bind:value={password}
          />
        </div>
        <div class="w-full py-3">
          <button class="w-fit rounded-lg bg-gray-400 px-3 py-1">Login</button>
        </div>
      </div>
      <div class="mt-8 flex justify-center space-x-1 p-3">
        <div>---------------</div>
        <div>OR</div>
        <div>---------------</div>
      </div>
      <div class="flex justify-center space-x-3 py-1">
        <button
          on:click={() => {
            isLogin = !isLogin;
          }}>Already a user?</button
        >
      </div>
    </div>
  {/if}
</div>
