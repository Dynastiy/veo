<template>
    <div>
        <div>
            <!-- Add Visit First Modal -->
            <div class="visit--container">
                <div v-show="slide1">
                    <div class="enrollee--top">
                    <div class="left--enrollee">
                        <div class="content">
                            <h5 class="mb-3">Verify Enrollee</h5>
                            <div>
                                <input type="text" placeholder="Enter Unique ID">
                                <button>Verify</button>
                            </div>
                        </div>
                    </div>
                    <div class="right--enrollee">
                        <div class="text-center">
                            <IconComponent icon="bi:check-lg" style="color: var(--main-color); font-size:60px" />
                        </div>
                        <div class="mt-3">
                            <h4 style="color: var(--main-color)">The Enrollee is verified Successfully!</h4>
                            <p>However, Note that You Require 
                                Authorisation Code For care Secondary 
                                Services.
                            </p>
                        </div>
                        <div class="mt-3 text-center">
                            <button class="main--button">View Details</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="py-3 px-4" style="background-color: var(--main-color);">
                        <h4 class="text-white">Enrollee Information</h4>
                    </div>
                    <div class="bottom--visit">
                        <form action="" @submit.prevent="">
                            <div class="row">
                                <div class="col-md-4 mb-3">
                                    <label for="">Enrollee ID</label>
                                    <input type="text">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="">Enrollee Name</label>
                                    <input type="text">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="">Gender</label>
                                    <select name="" id="">
                                        <option value="">Male</option>
                                        <option value="">Female</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="">Company</label>
                                    <input type="text">
                                </div>
                                <div class="col-md-4 mb-3">
                                    <label for="">Treatment Tag</label>
                                    <input type="text">
                                </div>
                                <div class="col-md-4">
                                    <label for="">Verification Code</label>
                                    <input type="text">
                                </div>
                            </div>
                            <div class="mt-3 text-center">
                                <button class="main--button" @click="toSlideTwo">Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
                </div>

                 <!-- Continue New Visit  -->
                <div v-show="slide2">
                        <div>
                        <div class="py-3 px-4" style="background-color: var(--main-color);">
                            <h4 class="text-white">Provider Information</h4>
                        </div>
                        <div class="bottom--visit">
                            <form action="" @submit.prevent="">
                                <div class="row">
                                    <div class="col-md-4 mb-3">
                                        <label for="">Name of Doctor</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="">Area of Speciality</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="">Date Signed</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="">Name of Specialist</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-4 mb-3">
                                        <label for="">Area of Specialization</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-4">
                                        <label for="">Date Signed</label>
                                        <input type="text">
                                    </div>
                                </div>
                                <!-- <div class="mt-3 text-center">
                                    <button class="main--button">Continue</button>
                                </div> -->
                            </form>
                        </div>
                    </div>

                    <div>
                        <div class="py-3 px-4" style="background-color: var(--main-color);">
                            <h4 class="text-white">Treatment Details</h4>
                        </div>
                        <div class="bottom--visit">
                            <form action="" @submit.prevent="">
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="">Date of Service</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="">Duration of Treatment</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="">Date of Admission</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="">Date of Discharge</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="">Diagnosis</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="">Treatment Given</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="">Treatment Code</label>
                                        <input type="text">
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="">Referral Code</label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="mt-3 text-center">
                                    <button class="main--button" @click="toSlideThree">Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Next  -->
                <div v-show="slide3">
                        <div>
                        <div class="py-3 px-4" style="background-color: var(--main-color);">
                            <h4 class="text-white">Service Information</h4>
                        </div>
                        <div class="bottom--visit">
                            <form action="" @submit.prevent="">
                                <div class="row align-items-end">
                                    <div class="col">
                                        <label for="">Item Description</label>
                                        <select name="" id="">
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="">Duration</label>
                                        <input type="text">
                                    </div>
                                    <div class="col">
                                        <label for="">Service Rate</label>
                                        <input type="text">
                                    </div>
                                    
                                    <div class="col">
                                        <label for="">Amount</label>
                                        <input type="text">
                                    </div>
                                    <div class="col">
                                        <button class="main--button d-flex align-items-center" style="gap:10px"><IconComponent icon="bi:plus-circle"/> <span>Add Visit</span></button>
                                    </div>
                                    
                                </div>
                                <!-- <div class="mt-3 text-center">
                                    <button class="main--button">Continue</button>
                                </div> -->
                            </form>
                        </div>
                    </div>

                    <div>
                        <div class="py-3 px-4" style="background-color: var(--main-color);">
                            <h4 class="text-white">Drug Information</h4>
                        </div>
                        <div class="bottom--visit">
                             <form action="" @submit.prevent="">
                                <div class="row align-items-end">
                                    <div class="col">
                                        <label for="">Item Description</label>
                                        <select name="" id="">
                                            <option value="">Male</option>
                                            <option value="">Female</option>
                                        </select>
                                    </div>
                                    <div class="col">
                                        <label for="">Unit</label>
                                        <input type="text">
                                    </div>
                                    <div class="col">
                                        <label for="">Rate</label>
                                        <input type="text">
                                    </div>
                                    
                                    <div class="col">
                                        <label for="">Amount</label>
                                        <input type="text">
                                    </div>
                                    <div class="col">
                                        <button class="main--button d-flex align-items-center" style="gap:10px"><IconComponent icon="bi:plus-circle"/> <span>Add Visit</span></button>
                                    </div>
                                    
                                </div>
                                <div class="mt-3 text-center">
                                    <button class="main--button" @click="toSlideFour">Continue</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <!-- Last  -->
                <div v-show="slide4">
                        <div>
                            <div class="py-3 px-4" style="background-color: var(--main-color);">
                                <h4 class="text-white">Remarks</h4>
                            </div>
                            <div class="bottom--visit">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <div class="mt-3 justify-content-end d-flex" style="gap:10px">
                                    <button class="btn btn-danger">Cancel</button>
                                    <button class="btn btn-primary">Suspend</button>
                                    <button class="main--button">Save</button>
                                </div>
                            </div>
                            
                        </div>
                </div>
            </div>

           
        </div>
    </div>
</template>


<script>
export default {
    data(){
        return {
            slide1: true,
            slide2: false,
            slide3: false,
            slide4: false,
        }
    },
    methods:{
        toSlideTwo(){
            this.slide1 = false;
            this.slide2 = true;
        },
        toSlideThree(){
            this.slide2 = false;
            this.slide3 = true
        },
        toSlideFour(){
            this.slide3 = false;
            this.slide4 = true
        }
    }
}
</script>