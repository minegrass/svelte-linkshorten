
<script>
    import { error } from "@sveltejs/kit";
  
      export let form;
      /**
   * @type {boolean}
   */
      let showModal;
  </script>
  

  <form method="post" action="?/login">
    <h1>Login</h1>
      <input type="email" name="email" placeholder="Email" required>
      
      <input type="password"  name="password" placeholder="Password" required>
      <button type="submit">Login</button>
      <a  class="hover:text-blue-400"href="/auth/register">Register</a>
      <button class="hover:text-blue-400" on:click={()=> showModal = !showModal}>Forgot Password?</button>
  </form>
  
  <dialog open={showModal}>
    <h3>Password reset</h3>
        <form action="?/resetPassword" method="post">
            <input type="email" name="email" placeholder="Email" required>
            <button type="submit">Reset Password</button>
            <button class="hover:bg-blue-400" type="button" on:click={()=> showModal = false}>Close</button>
        </form>
  </dialog>
  {#if form?.error}
      <p>{form.error}</p>
      <p>{JSON.stringify(form.data)}</p>
  {/if}

  {#if form?.success}
  <p class="greeny">{form.success}</p>
  <p>{JSON.stringify(form.data)}</p>
{/if}
  
  <style>
      form {
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 300px;
          margin: 0 auto;
          row-gap: 1rem;
      }
  
      input {
          margin-bottom: 10px;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
      }
  
      button[type=submit] {
          padding: 10px;
          border: none;
          border-radius: 5px;
          background-color: #007bff;
          color: white;
          cursor: pointer;
      }
  
      button[type=submit]:hover {
          background-color: #0056b3;
      }
  
      a {
          text-align: center;
      }

      .greeny {
          color: green;
      }

    input:focus{
        outline: none;
        scale: 1.1;
    }

  </style>
  