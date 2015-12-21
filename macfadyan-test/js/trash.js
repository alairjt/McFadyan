// FORM JS
$(form).formValidation(options);
$(form).data('formValidation').resetForm();
$(field)
    .nameOfPlugin(pluginOptions)
    .on(pluginChangedEvent, function() {
        $(form)
            .data('formValidation')         // Get the validator instance
            .revalidateField(field);        // Revalidate it

        // It is equivalent to use
        $(form).formValidation('revalidateField', field);
    });


  $(document).ready(function() {
        $('#taskForm')
            .formValidation({
                framework: 'bootstrap',
                excluded: ':disabled',
                icon: {
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh'
                },
                fields: {
                    title: {
                        validators: {
                            notEmpty: {
                                message: 'The title is required'
                            }
                        }
                    },
                    description: {
                        validators: {
                            notEmpty: {
                                message: 'The description is required'
                            },
                            stringLength: {
                                min: 50,
                                max: 1000,
                                message: 'The description must be more than 50 and less than 1000 characters'
                            }
                        }
                    },
                    priority: {
                        row: '.col-xs-6',
                        validators: {
                            notEmpty: {
                                message: 'The priority is required'
                            }
                        }
                    },
                    category: {
                        row: '.col-xs-6',
                        validators: {
                            notEmpty: {
                                message: 'The category is required'
                            }
                        }
                    }
                }
            })
            // Using Flat UI's select component
            .find('[name="priority"], [name="category"]')
                .select2({
                    dropdownCssClass: 'select-inverse-dropdown'
                });
    });

  /*TAGS WITH REMOVE BUTTON*/
$(document).ready(function() {
    $('#selectizeForm')
        .formValidation({
            framework: 'bootstrap',
            excluded: ':disabled',
            icon: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                frameworks: {
                    validators: {
                        callback: {
                            message: 'Please indicate 2-4 Javascript frameworks',
                            callback: function(value, validator, $field) {
                                // Get the frameworks separated by a comma
                                var frameworks = validator.getFieldElements('frameworks').val().split(',');
                                return (frameworks.length >= 2 && frameworks.length <= 4);
                            }
                        }
                    }
                }
            }
        })
        .find('[name="frameworks"]')
            .selectize({
                plugins: ['remove_button'],
                delimiter: ',',
                persist: false,
                create: function(input) {
                    return {
                        value: input,
                        text: input
                    };
                }
            })
            // Revalidate the frameworks field when it is changed
            .on('change', function(e) {
                $('#selectizeForm').formValidation('revalidateField', 'frameworks');
            })
            .end();
});

/**JS FROM AGE SLIDES**/
// With JQuery
$("#ex13").slider({
    ticks: [0, 100, 200, 300, 400],
    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
    ticks_snap_bounds: 30
});

// Without JQuery
var slider = new Slider("#ex13", {
    ticks: [0, 100, 200, 300, 400],
    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],
    ticks_snap_bounds: 30
});