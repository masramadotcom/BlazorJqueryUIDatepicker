window.JsInteropDatepicker = function () {
    $("#datepicker").datepicker({
        dateFormat: "dd/mm/yy",
        minDate: 0,
        constrainInput: false,
        changeMonth: true,
        changeYear: true,
        onSelect: function (selectedDate) {
            var myElement = document.getElementById('datepicker');
            myElement.value = selectedDate;
            var event = new Event('change');
            myElement.dispatchEvent(event);

            $(this).datepicker("hide");
        },
    });
}