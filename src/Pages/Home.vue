<script>
export default {
    name: 'Home',
    components: {}
}
</script>
<template>
    <div class="row">
        <div class="col-md-12">
            <div class="row">
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3">
                                <div>
                                    <p class="text-muted">Total Sales</p>
                                    <h2 class="font-weight-bold">$58,000</h2>
                                </div>
                                <div>
                                    <figure class="avatar">
                                        <span class="avatar-title bg-success-bright text-success rounded-circle">
                                            <i class="ti-bar-chart"></i>
                                        </span>
                                    </figure>
                                </div>
                            </div>
                            <div class="d-inline-flex align-items-center">
                                <span class="text-success d-inline-flex align-items-center mr-2">
                                    <span class="ti-arrow-up mr-2"></span> 5.1%
                                </span> Up from past week
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3">
                                <div>
                                    <p class="text-muted">Total Orders</p>
                                    <h2 class="font-weight-bold">9,621</h2>
                                </div>
                                <div>
                                    <figure class="avatar">
                                        <span class="avatar-title bg-info-bright text-info rounded-circle">
                                            <i class="ti-package"></i>
                                        </span>
                                    </figure>
                                </div>
                            </div>
                            <div class="d-inline-flex align-items-center">
                                <span class="text-danger d-inline-flex align-items-center mr-2">
                                    <span class="ti-arrow-down mr-2"></span> 2.6%
                                </span> Down from yesterday
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <div class="d-flex justify-content-between mb-3">
                                <div>
                                    <p class="text-muted">Total Pending</p>
                                    <h2 class="font-weight-bold">2,217</h2>
                                </div>
                                <div>
                                    <figure class="avatar">
                                        <span class="avatar-title bg-warning-bright text-warning rounded-circle">
                                            <i class="ti-reload"></i>
                                        </span>
                                    </figure>
                                </div>
                            </div>
                            <div class="d-inline-flex align-items-center">
                                <span class="text-success d-inline-flex align-items-center mr-2">
                                    <span class="ti-arrow-up mr-2"></span> 1.9%
                                </span> Up from yesterday
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="col-lg-12 col-md-12">
            <div class="card">
                <div class="card-header">
                    grid liste
                </div>
                <div class="card-body">
                    <div id="grid"></div>

                </div>
            </div>
        </div>
    </div>
</template>