<script lang="ts">
  import { getShortLink } from "$lib/myUtils";
  import { fade } from "svelte/transition";

    export let data, form;
    let copied:boolean;
    const copy = (text:string) => {
        navigator.clipboard.writeText(text);
        copied = true;
    }

    $: {
        if (copied) {
            setTimeout(() => {
                copied = false;
            }, 2000);
        }
    }
</script>


<div class="p-2 flex flex-col items-center justify-center gap-y-5">
    <h1 class="text-2xl font-bold">Shorten Linker</h1>
    <form action="?/createShortLink" method="post" class="flex flex-row items-center gap-x-2 bg-blue-300 p-2 rounded-lg shadow-lg">
        <label class="text-white " for="link">Link</label>
        <input class="rounded-lg pl-2 focus:outline-0 focus:scale-110 focus:mx-5 transition-all duration-300" type="text" id="link" name="link" placeholder="Enter your link" value={form?.link || ""} required>
        <button class="p-2 bg-blue-400 rounded-lg text-white hover:bg-blue-500 hover:scale-110 transition-all duration-300" type="submit">Shorten</button>
    </form>


{#if form?.shortLink}
<button on:click={()=> copy(form.shortLink)}>
    <span>{form.shortLink}</span>
</button>

{/if}

{#if copied}
<p in:fade>Link copied</p>
{/if}

<div class="flex flex-col items-center gap-x-2 bg-blue-500 p-5 rounded-lg shadow-lg text-white">
<h1 class="text-2xl font-bold">Top 10 Links</h1>
<table class="border-spacing-5">
    <thead>
        <tr>
            <th>#</th>
            <th>Link</th>
            <th>Short Link</th>
            <th>Clicks</th>
        </tr>
    </thead>
    <tbody>
        {#each data.top10Links as link,i}
        <tr>
            <td>{i+1}</td>
            <td>{link.link}</td>
            <td><a class="text-yellow-500 hover:text-yellow-600" href={getShortLink(link.shortSlug)}>{link.shortSlug}</a></td>
            <td>{link.click}</td>
        </tr>
        {/each}
    </tbody>
</table>


</div>
</div>