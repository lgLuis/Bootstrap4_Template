// Add Your Scripts here

(function(){
    'use strict';
    window.addEventListener('load', function(){
        //SELECCIONAR EL FORMULARIO PARA VALIDAR
        var forms = this.document.getElementsByClassName('needs-validation');
        // VALIDAD CADA CAMPO Y PREVENIR QUE SE ENVIE
        var validation = Array.prototype.filter.call(forms, function(form){
            form.addEventListener('submit', function(event){
                if(form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();