$(document).ready(function () {

    $('#password').keyup(function () {
        var password = $('#password').val();
        var passwordStrength = checkStrength(password);
        console.log(passwordStrength);
        if (passwordStrength < 5) {
            console.log('A força da senha é menor que 5');
            $('#confirm-password').attr('disabled', true);
            $('#btn_verificar').attr('disabled', true);
        } else {
            console.log('A força da senha não é menor que 5');
            $('#confirm-password').attr('disabled', false);
        }
    });
    $('#confirm-password').keyup(function () {
        if ($('#password').val() !== $('#confirm-password').val()) {
            $('#popover-cpassword').removeClass('hide');
            $('#btn_verificar').attr('disabled', true);
        } else {
            $('#popover-cpassword').addClass('hide');
            $('#btn_verificar').attr('disabled', false);
        }
    });


    function checkStrength(password) {
        var strength = 0;
        //If password contains both lower and uppercase characters, increase strength value.
        // Se a senha contém tanto letra minúscula e letra maiúscula, aumenta a força da senha.
        if (password.match(/([a-z])/)) {
            strength += 1;
            $('.low-case').addClass('text-success');
            $('.low-case i').removeClass('fa-times').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.low-case').removeClass('text-success');
            $('.low-case i').addClass('fa-times').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }

        if (password.match(/([A-Z])/)) {
            strength += 1;
            $('.upper-case').addClass('text-success');
            $('.upper-case i').removeClass('fa-times').addClass('fa-check');
            $('#popover-password-top').addClass('hide');
        } else {
            $('.upper-case').removeClass('text-success');
            $('.upper-case i').addClass('fa-times').removeClass('fa-check');
            $('#popover-password-top').addClass('hide');
        }

        //If it has numbers and characters, increase strength value.
        // Se tem números e caracteres, aumenta a força da senha.
        if (password.match(/([0-9])/)) {
            strength += 1;
            $('.one-number').addClass('text-success');
            $('.one-number i').removeClass('fa-times').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.one-number').removeClass('text-success');
            $('.one-number i').addClass('fa-times').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }

        //If it has one special character, increase strength value.
        // Se tem um caractere especial, aumenta a força da senha.
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
            strength += 1;
            $('.one-special-char').addClass('text-success');
            $('.one-special-char i').removeClass('fa-times').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.one-special-char').removeClass('text-success');
            $('.one-special-char i').addClass('fa-times').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }

        if (password.length >= 8 && password.length <= 70) {
            strength += 1;
            $('.eight-character').addClass('text-success');
            $('.eight-character i').removeClass('fa-times').addClass('fa-check');
            $('#popover-password-top').addClass('hide');

        } else {
            $('.eight-character').removeClass('text-success');
            $('.eight-character i').addClass('fa-times').removeClass('fa-check');
            $('#popover-password-top').removeClass('hide');
        }


        // If value is less than 2
        // Se o valor for menor que 2 para a força da senha

        if (strength < 1) {
            $('#result').removeClass();
            $('#password-strength').addClass('progress-bar-danger');

            $('#result').addClass('text-danger').text('Nada preenchido');
            $('#password-strength').css('width', '0%');
        }
        else if (strength < 2) {
            $('#result').removeClass();
            $('#password-strength').addClass('progress-bar-danger');

            $('#result').addClass('text-danger').text('Muito Fraca');
            $('#password-strength').css('width', '10%');
        } else if (strength >= 2 && strength < 5) {
            $('#result').addClass('good');
            $('#password-strength').removeClass('progress-bar-danger');
            $('#password-strength').addClass('progress-bar-warning');
            $('#result').addClass('text-warning').text('Fraca');
            $('#password-strength').css('width', '60%');
        } else if (strength == 5) {
            $('#result').removeClass()
            $('#result').addClass('strong');
            $('#password-strength').removeClass('progress-bar-warning');
            $('#password-strength').addClass('progress-bar-success');
            $('#result').addClass('text-success').text('Forte');
            $('#password-strength').css('width', '100%');
        }
        return strength;
    }
});