@extends('layouts.beforeLoginApp')

@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="panel panel-default login-card m-0 p-0" style="max-width: 100%;">
                <div class="tg-contactus panel-body h-m-auto p-0">

                    <div class="col-xs-12 col-sm-12 col-md-5 h-m-auto p-0 mb-hide">
                        <div class="registration-image-box">
                            <figure>
                                <img src="/images/registration-page.jpg" alt="side-image" />
                            </figure>
                        </div>
                    </div>

                    <div class="col-xs-12 col-sm-12 col-md-7 h-m-auto">
                        <div class="tg-sectionhead text-center pb-1 border-0">
                            <h2 class="d-block w-100 pt-5">
                                {{ __('Signup') }}
                            </h2>
                        </div>

                        <form method="POST" id="user-register" action="{{ route('register') }}" class="pb-4">
                            @csrf
                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Account Information
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="community" class="col-form-label text-md-start">
                                                {{ __('Community') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>


                                            <div class="w-100">
                                                <select id="community" type="text" class="form-control @error('community') is-invalid @enderror" name="community" value="{{ old('community') }}" autocomplete="community">
                                                    <option value="">Select</option>
                                                    @foreach($Communities as $key => $val)
                                                    <option value="{{ $val->id }}">{{ $val->community }}</option>
                                                    @endforeach
                                                </select>

                                                @error('community')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="address_1" class="col-form-label text-md-start">
                                                {{ __('Flat No / Address') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="address_1" type="text" class="form-control @error('address_1') is-invalid @enderror" name="address_1" value="{{ old('address_1') }}" autocomplete="address_1">

                                                @error('address_1')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="email" class="col-form-label text-md-start">
                                                {{ __('Email Address') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" autocomplete="email">

                                                @error('email')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="password" class="col-form-label text-md-start">
                                                {{ __('Password') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <div class="d-flex position-relative">
                                                    <input id="password" type="password" class="input radius-input form-control @error('password') is-invalid @enderror" name="password" autocomplete="new-password" aria-label="password" aria-describedby="basic-addon1" style="order:1;" />

                                                    <div class="input-group-append radius-btn" style="order:2;">
                                                        <span class="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn" onclick="password_show_hide();">
                                                            <i class="fa fa-eye f1x" id="show_eye"></i>
                                                            <i class="fa fa-eye-slash f1x d-none" id="hide_eye"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                                @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="password-confirm" class="col-form-label text-md-start">
                                                {{ __('Confirm Password') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <div class="d-flex position-relative">
                                                    <input id="password-confirm" type="password" class="input radius-input form-control @error('password') is-invalid @enderror" name="password_confirmation" autocomplete="new-password" aria-label="password_confirmation" aria-describedby="basic-addon1" style="order:1;" />

                                                    <div class="input-group-append radius-btn" style="order:2;">
                                                        <span class="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn" onclick="password_show_hide('show_eye_c','hide_eye_c','password-confirm');">
                                                            <i class="fa fa-eye f1x" id="show_eye_c"></i>
                                                            <i class="fa fa-eye-slash f1x d-none" id="hide_eye_c"></i>
                                                        </span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Basic Information
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first_name" class="col-form-label text-md-start">
                                                {{ __('First Name') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" autocomplete="first_name" autofocus>

                                                @error('first_name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="last_name" class="col-form-label text-md-start">
                                                {{ __('Last Name') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" autocomplete="last_name" autofocus>

                                                @error('last_name')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="phone_no" class="col-form-label text-md-start">
                                                {{ __('Phone No') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="phone_no" type="text" class="form-control @error('phone_no') is-invalid @enderror" name="phone_no" value="{{ old('phone_no') }}" autocomplete="phone_no" autofocus>

                                                @error('phone_no')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="whatsapp_no" class="col-form-label text-md-start">
                                                {{ __('Whatsapp No') }}
                                            </label>

                                            <div class="w-100">
                                                <input id="whatsapp_no" type="text" class="form-control @error('whatsapp_no') is-invalid @enderror" name="whatsapp_no" value="{{ old('whatsapp_no') }}" autocomplete="whatsapp_no" autofocus>

                                                @error('whatsapp_no')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Others Information
                                </legend>
                                <div class="row">
                                    {{--
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="flat_no" class="col-form-label text-md-start">
                                                {{ __('Flat No') }}
                                    <span class="mandatory text-danger">*</span>
                                    </label>

                                    <div class="w-100">
                                        <input id="flat_no" type="flat_no" class="form-control @error('flat_no') is-invalid @enderror" name="flat_no" value="{{ old('flat_no') }}" autocomplete="flat_no">

                                        @error('flat_no')
                                        <span class="invalid-feedback" role="alert">
                                            <strong>{{ $message }}</strong>
                                        </span>
                                        @enderror
                                    </div>
                                </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="address_2" class="col-form-label text-md-start">
                                {{ __('Address Line 2') }}
                            </label>

                            <div class="w-100">
                                <input id="address_2" type="address_2" class="form-control @error('address_2') is-invalid @enderror" name="address_2" value="{{ old('address_2') }}" autocomplete="address_2">

                                @error('address_2')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>
                    </div>--}}
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="city" class="col-form-label text-md-start">
                                {{ __('City') }}
                            </label>

                            <div class="w-100">
                                <input id="city" type="city" class="form-control @error('city') is-invalid @enderror" name="city" value="{{ old('city') }}" autocomplete="city">

                                @error('city')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>
                    </div>
                    {{--
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="district" class="col-form-label text-md-start">
                                                {{ __('District') }}
                    </label>

                    <div class="w-100">
                        <input id="district" type="district" class="form-control @error('district') is-invalid @enderror" name="district" value="{{ old('district') }}" autocomplete="district">

                        @error('district')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>
            </div> --}}
            <div class="col-md-6">
                <div class="form-group">
                    <label for="state" class="col-form-label text-md-start">
                        {{ __('State') }}
                    </label>

                    <div class="w-100">
                        <input id="state" type="state" class="form-control @error('state') is-invalid @enderror" name="state" value="{{ old('state') }}" autocomplete="state">

                        @error('state')
                        <span class="invalid-feedback" role="alert">
                            <strong>{{ $message }}</strong>
                        </span>
                        @enderror
                    </div>
                </div>
            </div>
            {{--
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="country" class="col-form-label text-md-start">
                                                {{ __('Country') }}
            </label>

            <div class="w-100">
                <input id="country" type="country" class="form-control @error('country') is-invalid @enderror" name="country" value="{{ old('country') }}" autocomplete="country">

                @error('country')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="form-group">
            <label for="pincode" class="col-form-label text-md-start">
                {{ __('Pincode') }}
            </label>

            <div class="w-100">
                <input id="pincode" type="pincode" class="form-control @error('pincode') is-invalid @enderror" name="pincode" value="{{ old('pincode') }}" autocomplete="pincode" maxlength="6">

                @error('pincode')
                <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
                @enderror
            </div>
        </div>
    </div>
    --}}

</div>
</fieldset>

<div class="row mb-0">
    <div class="col-md-12 text-center">
        <button type="submit" class="btn btn-primary">
            {{ __('Register') }}
        </button>
    </div>
</div>

</form>
</div>

</div>
</div>
</div>
</div>
</div>
<script>
    if ($("#user-register").length > 0) {
        $.validator.addMethod("pwcheck", function(value) {
            return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
                &&
                /[a-z]/.test(value) // has a lowercase letter
                &&
                /\d/.test(value) // has a digit
        });
        $("#user-register").validate({

            rules: {
                community: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    pwcheck: true,
                },
                password_confirmation: {
                    equalTo: "#password"
                },
                first_name: {
                    required: true
                },
                last_name: {
                    required: true
                },
                phone_no: {
                    required: true
                },
                address_1: {
                    required: true
                },


            },
            messages: {

                community: {
                    required: "{{trans('message.registration.community_required')}}",
                },
                email: {
                    required: "{{trans('message.registration.email_required')}}",
                    email: "{{trans('message.registration.email_email')}}",
                },
                password: {
                    required: "{{trans('message.registration.password_required')}}",
                    minlength: "{{trans('message.registration.password_minlength')}}",
                    pwcheck: "{{trans('message.registration.password_pwcheck')}}"
                },
                password_confirmation: {
                    equalTo: "{{trans('message.registration.password_confirmation_equalTo')}}"
                },
                first_name: {
                    required: "{{trans('message.registration.first_name_required')}}"
                },
                last_name: {
                    required: "{{trans('message.registration.last_name_required')}}"
                },
                phone_no: {
                    required: "{{trans('message.registration.phone_no_required')}}"
                },
                address_1: {
                    required: "{{trans('message.registration.flat_no_required')}}"
                },
            },
        })
    }
</script>
<style>
    .error {
        color: #ff0000 !important;
    }
</style>
@endsection