<template>
    <div>
        <div>
            <div class="add-employee-container">
                <div class="add-employee-content p-4 shadow-lg">
                    <form action="" @submit.prevent="">
                        <div class="">
                            <div class="mb-3">
                                <label for="">Surname</label>
                                <input type="text">
                            </div>
                            <div class="mb-3">
                                <label for="">First Name</label>
                                <input type="text">
                            </div>
                            
                            <div class="mb-3">
                                <label for="">Address</label>
                                <input type="text">
                            </div>
                            <div class="mb-3">
                                <label for="">Phone Number</label>
                                <input type="text">
                            </div>
                            <div class="mb-3">
                                <label for="">Choose Plan</label>
                                <select name="" id="">
                                    <option value="">Plan 1</option>
                                    <option value="">Plan 2</option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-4 d-flex justify-content-center align-items-center" style="gap:10px">
                            <button class="btn btn-danger px-4 py-2" @click="closeModal">Cancel</button>
                            <button class="main--button px-4 py-2" @click="addEmployee">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        closeModal(){
            this.$emit('close')
        },
        addEmployee(){
            this.$emit('close')
        }
    }
}
</script>