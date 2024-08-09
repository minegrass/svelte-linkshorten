<script>
    export let data;
</script>

<h1>{data.user.name}</h1>
<form action="/auth/logout" method="post">
    <button type="submit">Logout</button>
</form>