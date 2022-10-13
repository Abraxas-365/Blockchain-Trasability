<script lang="ts">
    export let text: string;
    export let handleClick = () => {
        console.log("HOLA");
    };
    export let textStyle = "";
</script>

<button class="rounded-[35px] bg-[#4662EB] w-full" on:click={handleClick}>
    <p class="p-[20px] {textStyle} text-white text-center my-auto font-bold">
        {text}
    </p>
</button>
