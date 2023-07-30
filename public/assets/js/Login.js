
function Translate(tr, en) {
    return tr;
}
$(function () {
    $('.ui.dropdown').dropdown('set selected', [0]);

    $.ajax({
        url: "https://api.ipify.org/?format=json",
        methot: "GET",
        dataType: "json",
        complete: function () {
            $('#dvip').removeClass('loading');
        },
        success: function (data) {
            var ip = data.ip;
            $('#txtIp').val(ip);
        },
    });


    $('.LoginScreen').form({
        inline: false,
        delay: false,
        on: 'blur',
        fields: {
            txtMail: {
                identifier: 'txtMail',
                rules: [
                    {
                        type: 'email',
                        prompt: Translate("Lütfen geçerli e-posta adresini giriniz", "Please enter a valid e-mail")
                    }
                ]
            },
            txtSifre: {
                identifier: 'txtSifre',
                rules: [
                    {
                        type: 'empty',
                        prompt: Translate("lütfen bir şifre girin", "Please enter a password")
                    }
                ]
            }
        },
        onSuccess: function () {
            var Field = $('.LoginScreen').form('get values');
            var form = $(this);
            form.addClass("loading");
            setTimeout(function () {
                localStorage.setItem('user','gaffar');
                window.location = '/';
            }, 500);
        }
    });




})
