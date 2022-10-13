<script>
    import transaction from "$lib/Shared/stores/transaction";

    import Check from "./check.svelte";
</script>

<div class="border-t-[1px]">
    <div class="row pt-10 px-[50px]">
        <div class="col-md-2 col-lg-2 col-xl-2">
            <div class="h-[50px] w-[50px] mx-auto">
                <Check />
            </div>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Iota_logo.png"
                alt="0"
                class="h-[40px] mx-auto"
            />
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1" />
        <div class="col-md-9 col-lg-9 col-xl-9 truncate">
            <p>
                <span class="font-bold"
                    >Hash (SHA256) de documento:
                </span>{$transaction.data}
            </p>
            <p>
                <span class="font-bold"
                    >Transfer Hash:
                </span>{$transaction.transaction_id}
            </p>
            <p>
                <span class="font-bold">Tipo: </span>{$transaction.platform ==
                "I"
                    ? "IOTA TANGLE(DAG)"
                    : "LACCHAIN"}
            </p>
            <a href="1">Link del exploreador</a>
        </div>
    </div>
</div>
