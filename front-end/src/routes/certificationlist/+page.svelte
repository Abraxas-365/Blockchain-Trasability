<script lang="ts">
    import TransactionCard from "$lib/Certification/Cards/TransactionCard";
    import { onMount } from "svelte";
    import { getReports, type Report } from "./utils";

    let pins: Array<Report> = [];
    onMount(async () => {
        pins = await getReports();
        // Load the site
    });
    console.log(pins);
</script>

<div class="min-h-screen  w-screen text-white">
    <div class="container px-4 px-lg-5 ">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <h3 class="text-center">LISTA DE DOCUMENTOS</h3>
                <div class="h-[1000px] overflow-auto mt-10">
                    {#each pins as pin}
                        <div class="mb-4">
                            <TransactionCard {pin} />
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
</div>
