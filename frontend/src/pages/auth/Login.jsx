@extends('layouts.beforeLoginApp')

@section('content')
<div class="tg-sectionspace tg-haslayout login-page">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
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
            <div class="panel panel-default login-card loginInfo">
                <div class="tg-contactus panel-body p-0 h-100">
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 h-100">
                        <div class="form-container">
                            <div class="tg-sectionhead text-center">
                                <h2 class="d-block w-100"> {{ __('Login') }} </h2>
                            </div>
                            <form id="user-login" class="tg-formtheme tg-formcontactus" method="POST" action="{{ route('login') }}">
                                @csrf
                                <div class="form-group w-100">
                                    <label for="username" class="col-form-label text-md-start">
                                        {{ __('Username or Email') }}
                                    </label>
                                    <input id="username" type="text" class="form-control @error('username') is-invalid @enderror" name="username" value="{{ old('username') }}" required autofocus autocomplete="off">

                                    @error('email')
                                    <span class="invalid-feedback danger" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
                                    @enderror
                                </div>
                                <div class="form-group w-100 mb-0">
                                    <label for="password" class="col-form-label text-md-start">
                                        {{ __('Password') }}
                                    </label>

                                    <div class="d-flex">
                                        <input id="password" type="password" class="input radius-input form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password" aria-label="password" aria-describedby="basic-addon1" />

                                        <div class="input-group-append radius-btn">
                                            <span class="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn" onclick="password_show_hide();">
                                                <i class="fa fa-eye f1x" id="show_eye"></i>
                                                <i class="fa fa-eye-slash f1x d-none" id="hide_eye"></i>
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div class="form-group w-100">
                                    <!-- 
                                @if (Route::has('password.request'))
                                <a class="btn btn-link" href="{{ route('password.request') }}">
                                    {{ __('Forgot Your Password?') }}
                                </a>
                                @endif

                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror 
                             -->
                                </div>
                                <div class="form-group w-100">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                                        <label class="form-check-label" for="remember">
                                            {{ __('Remember Me') }}
                                        </label>
                                    </div>
                                </div>
                                <div class="form-group text-center w-100">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Login') }}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 p-0 h-100">
                        <div class="image-container">
                            <figure>
                                <img src="{{asset('images/login.jpg')}}" alt="login page" class="img-responsive" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    if ($("#user-login").length > 0) {
        $("#user-login").validate({

            rules: {
                username: {
                    required: true,
                    maxlength: 50
                },
                password: {
                    required: true
                },


            },
            messages: {

                username: {
                    required: "{{trans('message.login.username_required')}}",
                },
                password: {
                    required: "{{trans('message.login.password_required')}}",
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