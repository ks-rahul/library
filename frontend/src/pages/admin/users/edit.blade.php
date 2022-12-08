@extends('layouts.adminLayout')
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
                                {{ __('Update User (' . $user->first_name . ')') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="updateProfile" method="POST" action="{{ route('admin.user.update') }}" enctype="multipart/form-data">
                            @csrf
                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Account Information
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="email" class="col-form-label text-md-start">
                                                {{ __('Email Address') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="email" type="email" readonly class="form-control @error('email') is-invalid @enderror" name="email" value="{{ $user->email }}" autocomplete="email">

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
                                            <label for="community" class="col-form-label text-md-start">
                                                {{ __('Community') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>


                                            <div class="w-100">
                                                <select id="community" type="text" class="form-control @error('community') is-invalid @enderror" name="community" autocomplete="community">
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
                                            <label for="address_1" class="col-form-label text-md-start">
                                                {{ __('Flat No / Address') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="address_1" type="text" class="form-control @error('address_1') is-invalid @enderror" name="address_1" value="{{ $userAddress->address_1 }}" autocomplete="address_1">

                                                @error('address_1')
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

                                </div>
                            </fieldset>

                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Status Information
                                </legend>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <!-- <label for="image" class="col-form-label text-md-start">
                                                {{ __('Status') }}
                                            </label> -->
                                            <div class="d-flex">
                                                <div class="form-group d-flex">
                                                    <label for="Enable" class="col-form-label text-md-end" style="margin-right:10px;">Enable</label>
                                                    <input type="radio" value="1" {{ $user->status == 1 ? 'checked' : '' }} id="status" name="status">
                                                </div>
                                                <div class="form-group d-flex">
                                                    <label for="Disable" class="col-form-label text-md-end" style="margin-right:10px;">Disable</label>
                                                    <input type="radio" value="0" {{ $user->status == 0 ? 'checked' : '' }} id="status" name="status">
                                                </div>
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
                                    <a href="{{ route('admin.users') }}" id="cancelBtn" rol="submit" class="btn btn-secondary">
                                        {{ __('Cancel') }}
                                    </a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="panel panel-primary login-card w-100 px-0" style="max-width:100%;">
            <!-- Default panel contents -->
            <div class="panel-heading ">
                <h2 class="panel-title">
                    Accounts and transactions report
                </h2>
            </div>
            <div class="panel-body">
                <h3>
                    {{ $user->first_name .' '. $user->last_name }}
                </h3>
            </div>
            <ul class="list-group">

                <li class="list-group-item">
                    <h4>(Current Balance :: {{$checkUserAmount}})</h4>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Date Of Transaction</th>
                                <th>Request Number</th>
                                <th>Transaction Type</th>
                                <th>Amount</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($userTransactions as $item)
                            <tr>
                                <td>{{ $item->transaction_datetime }}</td>
                                <td>{{ $item->requestNumber}}</td>
                                <td>{{ $item->transactionType }}</td>
                                <td>{{ $item->amount }}</td>
                                <td>{{ $item->notes }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </li>

            </ul>
        </div>

    </div>
</div>

</div>

</div>
@endsection