<script lang="ts">
    import { goto } from "$app/navigation";
    import transaction, {
        type ITransaction,
    } from "$lib/Shared/stores/transaction";
    import DefaultButton from "$lib/UI/Buttons/DefaultButton";
    export let pin: ITransaction = {
        name: "name",
        data: "hash",
        creation_date: "date",
    };
    function onClick() {
        transaction.set(pin);
        goto("/certification");
    }
</script>

<div class="border-b-[1px] border-slate-500  ">
    <div class="pb-2 row">
        <p class="col-md-10 col-lg-9 col-xl-8 truncate">
            {pin.name}
            <br />
            <span class="font-bold">Hash: </span>{pin.data}
            <br />
            <span class="font-bold"> Fecha de registro: </span>
            {pin.creation_date}
        </p>

        <div class="col-md-12 col-lg-12 col-xl-4 my-auto ">
            <DefaultButton
                text="Detalle"
                textStyle="p-3"
                handleClick={onClick}
            />
        </div>
    </div>
</div>
