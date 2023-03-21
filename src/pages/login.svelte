<script>
  // export let title = "";
  export let username = "",
    password = "";
  export let isLogin = true;
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
  <a href="/workspaces">Login</a>
  <button on:click={() => {isLogin = !isLogin}}>New User?</button>
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
<button on:click={() => {isLogin = !isLogin}}>Old User?</button>
{/if}
