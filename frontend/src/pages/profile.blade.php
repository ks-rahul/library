@extends('layouts.app')

@section('content')

<!--************************************
					Dashboard Start
			*************************************-->
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div id="tg-twocolumns" class="tg-twocolumns">
                <div class="col-xs-12 pull-right h-100">
                    <div id="tg-content" class="tg-content content-area">
                        <div class="tg-newsdetail">
                            <div class="tg-posttitle float-none">
                                <h3>
                                    User Profile
                                </h3>
                            </div>
                            <div class="dash-content panel panel-default border-0">
                                <div class="panel-body">
                                    <fieldset class="fieldset form-group">
                                        <legend class="small font-16">
                                            User Profile Information
                                        </legend>
                                        <a href="{{ route('user.edit', ['id'=>$getProfile->id]) }}" class="btn btn-outline-dark edit-btn-link">
                                            <span class="fa fa-edit"></span>
                                            Edit Profile
                                        </a>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="user-profile">
                                                    <figure>
                                                        @if ($getProfile->image)
                                                        <img src="{{asset('storage/users-avatar/'.$getProfile->image)}}" alt="image description" />
                                                        @else
                                                        <img src="/images/team/img-01.jpg" alt="" />
                                                        @endif
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-md-10">
                                                <ul class="tg-productinfo books-details">
                                                    <li>
                                                        <span>Name:</span>
                                                        <span>{{$getProfile->name}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Screen Name:</span>
                                                        <span>{{$getProfile->screenName}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Email:</span>
                                                        <span>{{$getProfile->email}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Community:</span>
                                                        <span>{{$getProfile->userCcommunities}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Phone No.:</span>
                                                        <span>{{$getProfile->phone_no}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Whatsapp No.:</span>
                                                        <span>{{$getProfile->whatsapp_no}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Username:</span>
                                                        <span>{{$getProfile->username}}</span>
                                                    </li>
                                                    <li>
                                                        <span>Available Wallet Balance:</span>
                                                        <span>{{$getProfile->availableWalletBalance}}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <fieldset class="fieldset form-group">
                                        <legend class="small font-16">
                                            Address
                                        </legend>
                                        <ul class="tg-productinfo books-details">
                                            <li>
                                                <span>Address:</span>
                                                <span>{{$getProfile->address_1}} {{$getProfile->address_2}}</span>
                                            </li>
                                            <li>
                                                <span>City:</span>
                                                <span>{{$getProfile->city}}</span>
                                            </li>
                                            <li>
                                                <span>District:</span>
                                                <span>{{$getProfile->district}}</span>
                                            </li>
                                            <li>
                                                <span>State:</span>
                                                <span>{{$getProfile->state}}</span>
                                            </li>
                                            <li>
                                                <span>Country:</span>
                                                <span>{{$getProfile->country}}</span>
                                            </li>
                                            <li>
                                                <span>Pincode:</span>
                                                <span>{{$getProfile->pincode}}</span>
                                            </li>
                                        </ul>
                                    </fieldset>
                                    <fieldset class="fieldset form-group">
                                        <legend class="small font-16">
                                            Account's Details
                                        </legend>
                                        <div class="table-responsive">
                                            <table class="table table-border">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            <span>Date of transaction</span>
                                                        </th>
                                                        <th>
                                                            <span>Request Number</span>
                                                        </th>
                                                        <th>
                                                            <span>Amount</span>
                                                        </th>
                                                        <th>
                                                            <span>Transaction Type</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    @foreach ($getProfile->userTransactions as $item)
                                                    <tr>
                                                        <td>
                                                            <span>{{$item->transaction_datetime}}</span>
                                                        </td>
                                                        <td>
                                                            <span>{{$item->requestNumber}}</span>
                                                        </td>
                                                        <td>
                                                            <span>{{$item->amount}}</span>
                                                        </td>
                                                        <td>
                                                            <span>{{$item->transactionType}}</span>
                                                        </td>
                                                    </tr>
                                                    @endforeach
                                                </tbody>
                                            </table>
                                        </div>
                                    </fieldset>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--************************************
					Dashboard End
			*************************************-->

@endsection