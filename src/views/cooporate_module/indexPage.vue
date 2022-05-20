<template>
    <div>
        <div>
            <div class="dashboard">
                <div class="top">
                    <div class="top--left">
                        <div style="background: #2A9871" class="card-1">
                            <div class="d-flex align-items-end justify-content-between" >
                                <div>
                                    <h2>273</h2>
                                    <h6>Monthly Visits</h6>
                                </div>
                                <div>
                                    <IconComponent icon="bi:people-fill"  class="icon" />
                                </div>
                            </div>
                            <div class="view-more-section">
                                <button>View</button>
                            </div>
                        </div>
                        <div style="background: #E22B1F" class="card-1" >
                            <div class="d-flex align-items-end justify-content-between">
                                <div>
                                    <h2>520, 300</h2>
                                    <h6>Amount Due</h6>
                                </div>
                                <div>
                                    <IconComponent  icon="fa6-solid:money-bill-transfer"  class="icon" />
                                </div>
                            </div>
                            <div class="view-more-section">
                                <button>View</button>
                            </div>
                        </div>
                        <div style="background: #1F4AE2" class="card-1" >
                            <div class="d-flex align-items-end justify-content-between">
                                <div>
                                    <h2>74</h2>
                                    <h6>Bills</h6>
                                </div>
                                <div >
                                    <IconComponent icon="bi:people-fill"  class="icon" />
                                </div>
                            </div>
                            <div class="view-more-section">
                                <button>View</button>
                            </div>
                        </div>
                        <div style="background: #DAA00C" class="card-1" > 
                            <div class="d-flex align-items-end justify-content-between">
                                <div>
                                    <h2>273, 999, 000</h2>
                                    <h6>Enrollees</h6>
                                </div>
                                <div>
                                    <IconComponent icon="bi:people-fill"  class="icon" />
                                </div>
                            </div>
                            <div class="view-more-section">
                                <button>View</button>
                            </div>
                        </div>
                    </div>
                    <div class="top--image text-center">
                        <img src="@/assets/img/doctors.png" width="300px" height="230px"  alt="">
                    </div>
                </div>

                <!-- User Data Table  -->

                <!-- Top that contains a Search Filter -->
                <div class="table--top">
                    <div class="d-flex align-items-center justify-content-between mt-4">
                       <div class="d-flex align-items-center" style="gap:15px">
                            <IconComponent icon="bx:filter" class="icon" style="color:var(--main-color)"/>
                            <div class="table--search">
                                <IconComponent  icon="bytesize:search" style="font-size:18px" />
                                <input type="text" placeholder="Search">
                            </div>
                       </div>
                        <div>
                            <button class="main--button d-flex align-items-center" style="gap:10px"><IconComponent icon="bi:plus-circle"/> <span>Add Visit</span></button>
                        </div>
                    </div>
                </div>
                <!-- Deposits Table  -->
    <section class="mt-4">
      <h3 class="text-bold">Recent Deposits</h3>
      <div class="mt-4 other--tables bg-white rounded-lg">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col"> <input type="checkbox" name="" id=""> </th>
                <th scope="col">NAME</th>
                <th scope="col">ADDRESS</th>
                <th scope="col">UNIQUE NO</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">TREATMENT</th>
                <th scope="col">DATE</th>
                <th scope="col"> <IconComponent  icon="gridicons:ellipsis"/> </th>
              </tr>
            </thead>
            <tbody>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>Malaria</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>Francis Lookman</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> Lorem ipsum dolor sit quibusdam nam ut. Libero? </td>
                 <td>12341343452DB</td>
                 <td>&#8358; 23,450</td>
                 <td>TYphoid</td>
                 <td>12/12/2022</td>
                 <td>
                     <IconComponent icon="ci:edit" class="mr-2" style="font-size:20px"/>
                     <IconComponent icon="el:trash"  class="mr-2"/>
                     <IconComponent  icon="gridicons:ellipsis"/>
                 </td>
             </tr>

            </tbody>
          </table>
        </div>
      </div>
    </section>
            </div>
        </div>
    </div>
</template>