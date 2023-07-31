
function Translate(tr, en) {
    return tr;
}
$(function () {


//var input = document.querySelector("#phone");

$("#phone").intlTelInput({
	geoIpLookup: function (callback) {
		$.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
			var countryCode = (resp && resp.country) ? resp.country : "";
			callback(countryCode);
		});
	},
    preferredCountries: ["tr", "bg", "ba", "hr","az","mk"],
	initialCountry: "auto",
	separateDialCode: false,
});

$('#phone').on('countrychange', function (e) {

	$(this).val('');

	var selectedCountry = $(this).intlTelInput('getSelectedCountryData');
	var dialCode = selectedCountry.dialCode;
	var maskNumber = intlTelInputUtils.getExampleNumber(selectedCountry.iso2, 0, 0);
	maskNumber = maskNumber.replace('+' + dialCode + ' ', '');
	mask = maskNumber.replace(/[0-9+]/ig, '0');
	maskPlaceHolder = mask.replace(/[0-9+]/ig, '_');
	$('#phone').mask(mask, { placeholder: maskNumber });
});



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
            phone: {
                identifier: 'phone',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter a valid Phone number'
                    }
                ]
            },
            txtSifre: {
                identifier: 'txtSifre',
                rules: [
                    {
                        type: 'empty',
                        prompt: 'Please enter a password'
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


