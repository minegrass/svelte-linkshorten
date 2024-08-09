<script>import "../app.css";
export let data;</script>
<div>
    <!-- display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
      color: white;
    background-color: orange;
    border-radius: 5px; -->
    <nav class="flex justify-between items-center p-5 text-white bg-orange-400 rounded-b-lg">
        <ul>
            <li><button class="" on:click={()=>{
                window.location.href = "/"
            }}><span class="text-2xl hover:text-3xl transition-all duration-200">Link shorten</span></button></li>
           
        </ul>
        <ul>
            {#if !data.user}
            <li><a class="the-a" href="/auth/signin">Sign in</a></li>
            <li><a class="the-a" href="/auth/register">Sign up</a></li>
            {/if}
            {#if data.user}
            <li><h1>Welcome {data.user.name}</h1></li>
            <li><a class="the-a" href="/logout">Sign out</a></li>
            {/if}
        </ul>
    </nav>
    <main>
        <slot></slot>
    </main>
    <footer class="flex justify-center items-center">
        <a href="https://tomato.contact">
        <h1 class="text-3xl font-bold hover:text-red-500 transition-all duration-200">Made by Tomato with ❤️</h1></a>
    </footer>
</div>

<style>
    
    .the-a{
        color: white;
        background-color: #007bff;
        padding: 5px;
        border-radius: 5px;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }

    .the-a:hover{
        background-color: red;
        padding:0.8rem;
        
    }

    nav ul {
        display: flex;
        align-items: center;

        gap: 1rem;
    }

    nav ul li {
        list-style: none;
    }

    main {
        padding: 1rem;
    }
    h1{
        padding: 0;
        margin: 0;
    }

   
</style>
