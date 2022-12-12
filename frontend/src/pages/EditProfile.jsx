@extends('layouts.app')

@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            @if ($message = Session::get('success'))
            <div class="alert alert-success alert-dismissible show" role="alert">
                <strong>{{ $message }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            @if ($message = Session::get('error'))
            <div class="alert alert-danger alert-dismissible show" role="alert">
                <strong>{{ $message }}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            @endif
            <div class="panel panel-default login-card" style="max-width: 100%;">
                <div class="tg-contactus panel-body">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead text-center border-bottom-0">
                            <h2 class="d-block w-100 pt-4">
                                {{ __('Update Profile') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="updateProfile" method="POST" action="{{ route('user.update') }}" enctype="multipart/form-data">
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
                                                    @foreach ($Communities as $key => $val)
                                                    <option {{ $val->id == $userCcommunities->community_id ? 'selected' : '' }} value="{{ $val->id }}">{{ $val->community }}</option>
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
                                            <label for="image" class="col-form-label text-md-start">
                                                {{ __('Profile Picture') }}
                                            </label>

                                            <div class="w-100">
                                                <input id="image" type="file" class="form-control @error('image') is-invalid @enderror" name="image" value="{{ $user->image }}" autocomplete="image">

                                                @error('image')
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
                                                <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ $user->first_name }}" autocomplete="first_name" autofocus>

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
                                                <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ $user->last_name }}" autocomplete="last_name" autofocus>

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
                                                <input id="phone_no" type="text" class="form-control @error('phone_no') is-invalid @enderror" name="phone_no" value="{{ $user->phone_no }}" autocomplete="phone_no" autofocus>

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
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="whatsapp_no" type="text" class="form-control @error('whatsapp_no') is-invalid @enderror" name="whatsapp_no" value="{{ $user->whatsapp_no }}" autocomplete="whatsapp_no" autofocus>

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
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="flat_no" class="col-form-label text-md-start">
                                                {{ __('Flat No') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="flat_no" type="flat_no" class="form-control @error('flat_no') is-invalid @enderror" name="flat_no" value="{{ $userAddress->flat_no }}" autocomplete="flat_no">

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
                                            <label for="address_1" class="col-form-label text-md-start">
                                                {{ __('Address Line 1') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="address_1" type="address_1" class="form-control @error('address_1') is-invalid @enderror" name="address_1" value="{{ $userAddress->address_1 }}" autocomplete="address_1">

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
                                            <label for="address_2" class="col-form-label text-md-start">
                                                {{ __('Address Line 2') }}
                                            </label>

                                            <div class="w-100">
                                                <input id="address_2" type="address_2" class="form-control @error('address_2') is-invalid @enderror" name="address_2" value="{{ $userAddress->address_2 }}" autocomplete="address_2">

                                                @error('address_2')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="city" class="col-form-label text-md-start">
                                                {{ __('City') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="city" type="city" class="form-control @error('city') is-invalid @enderror" name="city" value="{{ $userAddress->city }}" autocomplete="city">

                                                @error('city')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="district" class="col-form-label text-md-start">
                                                {{ __('District') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="district" type="district" class="form-control @error('district') is-invalid @enderror" name="district" value="{{ $userAddress->district }}" autocomplete="district">

                                                @error('district')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="state" class="col-form-label text-md-start">
                                                {{ __('State') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="state" type="state" class="form-control @error('state') is-invalid @enderror" name="state" value="{{ $userAddress->state }}" autocomplete="state">

                                                @error('state')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="country" class="col-form-label text-md-start">
                                                {{ __('Country') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="country" type="country" class="form-control @error('country') is-invalid @enderror" name="country" value="{{ $userAddress->country }}" autocomplete="country">

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
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="pincode" type="pincode" class="form-control @error('pincode') is-invalid @enderror" name="pincode" value="{{ $userAddress->pincode }}" autocomplete="pincode">

                                                @error('pincode')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </fieldset>

                            <div class="row mb-0">
                                <div class="col-md-12 text-center">
                                    <input id="user_id" type="hidden" name="user_id" value="{{ $user->id }}">
                                    <button id="submitBtn" type="submit" class="btn btn-primary">
                                        {{ __('Update') }}
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
    $(document).ready(function() {
        $("#updateProfile").submit(function() {
            //alert("dcdv");
            var formData = {
                user_id: $("#user_id").val(),
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                phone_no: $("#phone_no").val(),
                whatsapp_no: $("#whatsapp_no").val(),
                email: $("#email").val(),
                password: $("#password").val(),
                flat_no: $("#flat_no").val(),
                address_1: $("#address_1").val(),
                address_1: $("#address_1").val(),
                address_2: $("#address_2").val(),
                city: $("#city").val(),
                district: $("#district").val(),
                state: $("#state").val(),
                country: $("#country").val(),
                pincode: $("#pincode").val(),
                community_id: $("#community").val(),
            };

            if (formData.community_id == '') {
                alert("Please select the community!");
                return false;
            }
            if (formData.email == '') {
                alert("Please fill the email!");
                return false;
            }
            if (formData.first_name == '') {
                alert("Please fill the first name!");
                return false;
            }
            if (formData.last_name == '') {
                alert("Please fill the last name!");
                return false;
            }
            if (formData.phone_no == '') {
                alert("Please fill the phone no.");
                return false;
            }
            if (formData.whatsapp_no == '') {
                alert("Please fill the whatsapp no.");
                return false;
            }
            if (formData.flat_no == '') {
                alert("Please fill the flat no.");
                return false;
            }
            if (formData.address_1 == '') {
                alert("Please fill the Address Line 1");
                return false;
            }
            if (formData.city == '') {
                alert("Please fill the City");
                return false;
            }
            if (formData.district == '') {
                alert("Please fill the District");
                return false;
            }
            if (formData.state == '') {
                alert("Please fill the State");
                return false;
            }
            if (formData.country == '') {
                alert("Please fill the Country");
                return false;
            }
            if (formData.pincode == '') {
                alert("Please fill the Pincode");
                return false;
            }
        });


    });
</script>
@endsection