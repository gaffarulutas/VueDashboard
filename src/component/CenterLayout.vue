<script setup>
import MainHeader from './MainHeader.vue'
import Navigation from './Navigation.vue'
</script>
<template>
    <div class="layout-wrapper">
        <div class="content-wrapper">
            <MainHeader />
            <!-- begin::navigation -->
            <Navigation />
            <!-- end::navigation -->
            <div class="content-body">

                <div class="content">
                    <!--
                  <div class="page-header">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href=index.html>Home</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                            </ol>
                        </nav>
                    </div>
                -->
                    <router-view></router-view>
                </div>
                <!-- begin::footer -->
                <footer class="content-footer">
                    <div>© 2020 BinBin - <a href="http://algoritme.io" target="_blank">Algoritma</a></div>
                    <div>
                        <nav class="nav">
                            <a href="https://algoritma.io" class="nav-link">Licenses</a>
                            <a href="#" class="nav-link">Change Log</a>
                            <a href="#" class="nav-link">Get Help</a>
                        </nav>
                    </div>
                </footer>
                <!-- end::footer -->

            </div>

        </div>

    </div>
</template>