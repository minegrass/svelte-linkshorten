
<script>
  import { error } from "@sveltejs/kit";

    export let form;
</script>


<form method="post">
    <h1>Register</h1>
    <input type="text" name="username" placeholder="Username" required>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" minlength="8" name="password" placeholder="Password" required>
    <input type="password" minlength="8" name="passwordConfirm" placeholder="Confirm Password" required>
    <button type="submit">Register</button>
    <a class="hover:text-blue-400" href="/auth/signin">Login</a>
</form>
{#if form?.error}
    <p>{form.error}</p>
{/if} 
<style>
    form {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }

    input {
        margin-bottom: 10px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #007bff;
        color: white;
        cursor: pointer;
    }

    button:hover {
        background-color: #0056b3;
    }

    a {
        text-align: center;
    }
</style>

