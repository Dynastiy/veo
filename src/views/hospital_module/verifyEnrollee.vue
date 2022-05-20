<template>
    <div>
        <div>
            <div class="enrollee--container">
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
                    <div class="left--enrollee">
                        <h4 class="text-center" style="color: var(--main-color)">Client Information</h4>
                        <div>
                            <div class="row mt-3 mb-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Enrollee Name:</h6>
                                <p class="col-md-6">Bruno Daniels</p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3 mb-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Enrollee Unique Id:</h6>
                                <p class="col-md-6">123233DC</p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3 mb-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Address:</h6>
                                <p class="col-md-6">13 Udom Close, D/Line PH. River State.</p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3 mb-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Gender:</h6>
                                <p class="col-md-6">Male</p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3 mb-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Subscription Plan:</h6>
                                <p class="col-md-6">Bruno Daniels</p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3 mb-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Status:</h6>
                                <p class="col-md-6"><span class="completed">Active</span></p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Hospital Plan:</h6>
                                <p class="col-md-6">New Age Hospital Ltd.</p>
                            </div>
                            <hr class="m-0">
                            <div class="row mt-3">
                                <h6 class="col-md-6" style="color: var(--main-color)">Photo:</h6>
                                <div class="col-md-6">
                                    <img src="https://www.w3schools.com/howto/img_avatar.png" width="80" height="80" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="right--enrollee d-flex flex-column justify-content-between">
                       <h4 class="text-center" style="color: var(--main-color)">Policy Details</h4>
                       <div class="mt-3 text-center">
                            <h5>List Policy Details Here</h5>
                        </div>
                       <div class="mt-3 text-center">
                            <button class="main--button">Add Visit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>