<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <title>Verificação de Força de Senha</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css'>
    <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Lato:300,400'>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
            <form class="form-horizontal mar-top-bot-50" id="validateForm" action="#">
                <h1>Verificar Senha</h1>
                <fieldset>
                    <!-- Password input-->
                    <div class="form-group">
                        <label class="col-md-12 control-label">Senha<span
                                    id="popover-password-top" class="hide pull-right block-help"><i
                                        class="fa fa-info-circle text-danger"
                                        aria-hidden="true"></i>Insira uma senha forte</span></label>
                        <div class="col-md-12">
                            <input id="password" name="password" type="password"
                                   class="form-control input-md" data-placement="bottom" data-toggle="popover"
                                   data-container="body" type="button" data-html="true">

                            <div id="popover-password">
                                <p>Força da senha: <span id="result"> </span></p>
                                <div class="progress">
                                    <div id="password-strength" class="progress-bar progress-bar-success"
                                         role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"
                                         style="width:0%">
                                    </div>
                                </div>
                                <ul class="list-unstyled">

                                    <li class=""><span class="low-case"><i class="fa fa-times"
                                                                                 aria-hidden="true"></i></span>&nbsp;
                                        1 letra minúscula
                                    </li>

                                    <li class=""><span class="upper-case"><i class="fa fa-times"
                                                                                 aria-hidden="true"></i></span>&nbsp;
                                        1 letra maiúscula
                                    </li>

                                    <li class=""><span class="one-number"><i class="fa fa-times" aria-hidden="true"></i></span>
                                        &nbsp;1 número (0-9)
                                    </li>
                                    <li class=""><span class="one-special-char"><i class="fa fa-times"
                                                                                   aria-hidden="true"></i></span> &nbsp;1
                                        Símbolo (!@#$%^&*).
                                    </li>
                                    <li class=""><span class="eight-character"><i class="fa fa-times"
                                                                                  aria-hidden="true"></i></span>&nbsp;
                                        De 8 a 70 caracteres.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- Repeat Password -->
                    <!-- Repetir Senha -->
                    <div class="form-group">
                        <label class="col-md-12 control-label">Confirmação de Senha<span
                                    id="popover-cpassword" class="hide pull-right block-help"><i
                                        class="fa fa-info-circle text-danger"
                                        aria-hidden="true"></i> Senha não corresponde</span></label>
                        <div class="col-md-12">
                            <input id="confirm-password" name="confirm-password" type="password"
                                   class="form-control input-md" disabled>
                        </div>
                    </div>
                </fieldset>
            </form>
            <button class="btn btn-primary" id="btn_verificar" disabled>Verificar</button>
        </div>
    </div>
</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js'>
</script>
<script src="function.js"></script>
</body>
</html>