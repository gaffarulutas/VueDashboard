<script setup>
import CenterLayout from './component/CenterLayout.vue';
import Sidebar from './component/Sidebar.vue';
import { onMounted } from 'vue';
onMounted(() => {
    setTimeout(function () {
        feather.replace();

        $('.navigation .navigation-menu-body ul li a').each(function () {
            var $this = $(this);

            if ($this.next('ul').length) {
                $this.append('<i class="sub-menu-arrow ti-angle-up"></i>');
            }
        });
        $('.navigation .navigation-menu-body ul li.open>a>.sub-menu-arrow').removeClass('ti-plus').addClass('ti-minus').addClass('rotate-in');
        $('body.horizontal-navigation .horizontal-navigation ul li a').each(function () {
            var $this = $(this);

            if ($this.next('ul').length) {
                $this.append('<i class="sub-menu-arrow ti-angle-right"></i>');
            }
        });

        $('.navigation .navigation-menu-body .navigation-menu-group ul li a.active').closest('ul').parent('li').addClass('open').closest('ul').parent('li').addClass('open');
        $('.navigation .navigation-menu-body .navigation-menu-group ul li a.active').closest('div').addClass('open');
        $('.navigation .navigation-menu-tab [data-nav-target="#' + $('.navigation .navigation-menu-body .navigation-menu-group ul li a.active').closest('div').attr('id') + '"]').addClass('active');
        $('body.horizontal-navigation .horizontal-navigation ul li a.active').closest('ul').parent('li').addClass('open').closest('ul').parent('li').addClass('open');

    },
        200);
});
</script>
<template>
    <Sidebar />
    <CenterLayout />
</template>
