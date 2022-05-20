<template>
    <div>
        <div>
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
                        
                    </div>
                </div>
                <!-- Deposits Table  -->
    <section class="mt-4">
      <!-- <h3 class="text-bold">Recent Deposits</h3> -->
      <div class="mt-4 other--tables bg-white rounded-lg">
        <div class="table-responsive">
          <table class="table table-centered table-nowrap mb-0">
            <thead>
              <tr>
                <th scope="col"> <input type="checkbox" name="" id=""> </th>
                <th scope="col">PROVIDER</th>
                <th scope="col">CLAIMS PERIOD</th>
                <th scope="col">NO OF CLAIMS</th>
                <th scope="col">AMOUNT</th>
                <th scope="col">REMOTE STATUS</th>
                <th scope="col">DATE</th>
                <th scope="col"> STATUS </th>
              </tr>
            </thead>
            <tbody>
             <tr>
                 <td><input type="checkbox" name="" id=""></td>
                 <td>
                     <h6>New Age Hospitals</h6>
                     <p class="text-secondary">08093915841</p>
                 </td>
                 <td> March 2022 </td>
                 <td>20</td>
                 <td>&#8358; 23,450</td>
                 <td>Accepted</td>
                 <td>12/12/2022</td>
                 <td>
                     Paid
                 </td>
             </tr>
             

            </tbody>
          </table>
        </div>
      </div>
    </section>
        </div>
    </div>
</template>