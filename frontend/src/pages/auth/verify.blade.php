@extends('layouts.app')

@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="panel panel-default login-card">
                <div class="tg-contactus panel-body">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead text-center" style="padding-right:0;">
                            <h2 class="d-block w-100">
                                {{ __('Verify Your Email Address') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="w-100 alert">
                            @if (session('resent'))
                            <div class="alert alert-success" role="alert">
                                {{ __('A fresh verification link has been sent to your email address.') }}
                            </div>
                            @endif

                            {{ __('Before proceeding, please check your email for a verification link.') }}
                            {{ __('If you did not receive the email') }},
                        </div>
                        <form class="tg-formtheme tg-formcontactus" method="POST" action="{{ route('verification.resend') }}">
                            @csrf
                            <fieldset class="fieldset form-group">
                                <div class="form-group text-center w-100">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('click here to request another') }}
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