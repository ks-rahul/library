@extends('layouts.app')

@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="panel panel-default login-card">
                <div class="tg-contactus panel-body">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
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
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead text-center" style="padding-right:0;">
                            <h2 class="d-block w-100">
                                {{ __('Change Password') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form class="tg-formtheme tg-formcontactus" method="POST" action="{{ route('setting.password.process') }}">
                            @csrf
                            <fieldset class="fieldset form-group">
                                <div class="form-group w-100">
                                    <label for="username" class="col-form-label text-md-start">
                                        {{ __('Current Password') }}
                                    </label>
                                    <div class="d-flex">
                                        <input id="old_password" type="password" class="input radius-input form-control @error('password') is-invalid @enderror" name="old_password" required autocomplete="current-password">
                                        <div class="input-group-append radius-btn">
                                            <span class="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn" onclick="password_show_hide('show_eye_c','hide_eye_c','old_password');">
                                                <i class="fa fa-eye f1x" id="show_eye_c"></i>
                                                <i class="fa fa-eye-slash f1x d-none" id="hide_eye_c"></i>
                                            </span>
                                        </div>
                                    </div>

                                    @error('old_password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="form-group w-100">
                                    <label for="username" class="col-form-label text-md-start">
                                        {{ __('New Password') }}
                                    </label>
                                    <div class="d-flex">
                                        <input id="new_password" type="password" class="input radius-input form-control @error('new_password') is-invalid @enderror" name="new_password" required autocomplete="current-password">
                                        <div class="input-group-append radius-btn">
                                            <span class="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn" onclick="password_show_hide('show_eye','hide_eye','new_password');">
                                                <i class="fa fa-eye f1x" id="show_eye"></i>
                                                <i class="fa fa-eye-slash f1x d-none" id="hide_eye"></i>
                                            </span>
                                        </div>
                                    </div>

                                    @error('new_password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="form-group w-100">
                                    <label for="username" class="col-form-label text-md-start">
                                        {{ __('Confirm Password') }}
                                    </label>
                                    <div class="d-flex">
                                        <input id="confirm_password" type="password" class="input radius-input form-control @error('password') is-invalid @enderror" name="confirm_password" required autocomplete="current-password">
                                        <div class="input-group-append radius-btn" style="order:2;">
                                            <span class="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn" onclick="password_show_hide('show_eye_d','show_eye_d','confirm_password');">
                                                <i class="fa fa-eye f1x" id="show_eye_d"></i>
                                                <i class="fa fa-eye-slash f1x d-none" id="show_eye_d"></i>
                                            </span>
                                        </div>
                                    </div>

                                    @error('confirm_password')
                                    <span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="form-group text-center w-100">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Change Password') }}
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection