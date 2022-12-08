@extends('layouts.adminLayout')
@section('content')
<!-- admin user list -->
<!-- banner section -->
<div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="{{ asset('images/slider/book-library.jpg') }}">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-innerbannercontent">
                </div>
            </div>
        </div>
    </div>
</div>

<!-- users list -->
<div class="tg-authorsgrid bookslist">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-sectionhead">
                    <h2>
                        All Users
                    </h2>
                </div>
            </div>
            <div class="tg-pickedbyauthor tg-pickedbyauthorslider">
                @foreach ($users as $val)
                <div class="col-xs-6 col-sm-6 col-md-4">

                    <div class="tg-postbook">
                        <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                                <div class="tg-frontcover">
                                    @if ($val->avatar)
                                    <img src="{{url('').'/uploads/profile/'.$val->avatar}}" alt="image description" />
                                    @else
                                    <img src="{{ asset('images/users/img-01.jpg') }}" alt="image description">
                                    @endif
                                </div>
                            </div>
                            <div class="tg-hovercontent">
                                <div class="tg-description">
                                    <p>
                                        {{$val->flat_no.','.$val->address_1.','.$val->city.','.$val->district.','.$val->state.','.$val->country.','.$val->pincode}}
                                    </p>
                                </div>
                                <strong class="tg-bookpage">Username: {{$val->username}}</strong>
                                <strong class="tg-bookcategory">Phone No: {{$val->phone_no}}</strong>
                                <strong class="tg-bookprice">Community:{{$val->community}}</strong>
                            </div>
                        </figure>
                        <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                                <h3>
                                    <a href="javascript:void(0);">
                                        {{ $val->first_name . ' ' . $val->last_name }}
                                    </a>
                                </h3>
                            </div>
                            <span class="tg-bookwriter">Email:
                                {{$val->email}}
                            </span>
                            <a class="tg-btn tg-btnstyletwo" href="{{ route('admin.user.edit', ['id' => $val->id]) }}">
                                <i class="fa fa-book"></i>
                                <em>Edit</em>
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="panel-footer border-0 pt-0 bg-transparent">
                <div class="custom-pagination pagination">
                    {{ $users->links() }}
                </div>

            </div>
        </div>
    </div>
</div>

<!-- admin user list -->
@endsection