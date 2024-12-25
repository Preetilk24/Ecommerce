$(function() {

    // User Register validation
    var $userRegister = $("#userRegister");

    $userRegister.validate({
        rules: {
            name: {
                required: true,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            mobileNumber: {
                required: true,
                numericOnly: true,
                minlength: 10,
                maxlength: 12
            },
            password: {
                required: true
            },
            confirmpassword: {
                required: true,
                equalTo: '#password'
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            pincode: {
                required: true,
                numericOnly: true
            },
            img: {
                required: true
            }
        },
        messages: {
            name: {
                required: 'Name is required',
                lettersonly: 'Name can only contain letters'
            },
            email: {
                required: 'Email is required',
                email: 'Invalid email format'
            },
            mobileNumber: {
                required: 'Mobile number is required',
                numericOnly: 'Only numbers are allowed',
                minlength: 'Minimum 10 digits',
                maxlength: 'Maximum 12 digits'
            },
            password: {
                required: 'Password is required'
            },
            confirmpassword: {
                required: 'Confirm password is required',
                equalTo: 'Password and confirm password do not match'
            },
            address: {
                required: 'Address is required'
            },
            city: {
                required: 'City is required'
            },
            state: {
                required: 'State is required'
            },
            pincode: {
                required: 'Pincode is required',
                numericOnly: 'Only numbers are allowed'
            },
            img: {
                required: 'Profile image is required'
            }
        }
    });

    // Orders Validation
    var $orders = $("#orders");

    $orders.validate({
        rules: {
            firstName: {
                required: true,
                lettersonly: true
            },
            lastName: {
                required: true,
                lettersonly: true
            },
            email: {
                required: true,
                email: true
            },
            mobileNo: {
                required: true,
                numericOnly: true,
                minlength: 10,
                maxlength: 12
            },
            address: {
                required: true
            },
            city: {
                required: true
            },
            state: {
                required: true
            },
            pincode: {
                required: true,
                numericOnly: true
            },
            paymentType: {
                required: true
            }
        },
        messages: {
            firstName: {
                required: 'First name is required',
                lettersonly: 'First name can only contain letters'
            },
            lastName: {
                required: 'Last name is required',
                lettersonly: 'Last name can only contain letters'
            },
            email: {
                required: 'Email is required',
                email: 'Invalid email format'
            },
            mobileNo: {
                required: 'Mobile number is required',
                numericOnly: 'Only numbers are allowed',
                minlength: 'Minimum 10 digits',
                maxlength: 'Maximum 12 digits'
            },
            address: {
                required: 'Address is required'
            },
            city: {
                required: 'City is required'
            },
            state: {
                required: 'State is required'
            },
            pincode: {
                required: 'Pincode is required',
                numericOnly: 'Only numbers are allowed'
            },
            paymentType: {
                required: 'Payment type is required'
            }
        }
    });

    // Reset Password Validation
    var $resetPassword = $("#resetPassword");

    $resetPassword.validate({
        rules: {
            password: {
                required: true
            },
            confirmPassword: {
                required: true,
                equalTo: '#password'
            }
        },
        messages: {
            password: {
                required: 'Password is required'
            },
            confirmPassword: {
                required: 'Confirm password is required',
                equalTo: 'Password and confirm password do not match'
            }
        }
    });

    // Custom validation methods
    jQuery.validator.addMethod('lettersonly', function(value, element) {
        return /^[a-zA-Z\s]+$/.test(value);
    });

    jQuery.validator.addMethod('numericOnly', function(value, element) {
        return /^[0-9]+$/.test(value);
    });

    jQuery.validator.addMethod('space', function(value, element) {
        return !/\s/.test(value);
    });
});
