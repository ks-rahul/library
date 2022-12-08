@extends('layouts.adminLayout')
@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div id="tg-twocolumns" class="tg-twocolumns">
                <div class="col-xs-12 pull-right h-100">
                    <div id="tg-content" class="tg-content content-area">
                        <div class="tg-newsdetail">
                            <div class="tg-posttitle float-none">
                                <h3>
                                    <a href="{{ route('admin.transactions') }}" class="small">
                                        <i class="fa fa-chevron-left"></i>
                                    </a>
                                    <span>Transactions details</span>
                                </h3>
                            </div>
                            <div class="dash-content panel panel-default border-0">
                                <div class="panel-body">
                                    <fieldset class="fieldset form-group">
                                        <legend class="small font-16">
                                            General Information
                                        </legend>
                                        <ul class="tg-productinfo books-details">
                                            <li>
                                                <span>Request No:</span>
                                                <span>{{ 'R' . str_pad($requestDetails->id, 3, '0', STR_PAD_LEFT) }}</span>
                                            </li>
                                            <li>
                                                <span>Status:</span>
                                                <span>{{ $requestDetails->status }}</span>
                                            </li>
                                            <li>
                                                <span>Book:</span>
                                                <span>{{ $requestDetails->book_title }}</span>
                                            </li>
                                            <li>
                                                <span>Borrower/Lender Name:</span>
                                                <span>{{ $requestDetails->l_first_name }}
                                                    {{ $requestDetails->l_last_name }}</span>
                                            </li>
                                            <li>
                                                <span>Date of Request:</span>
                                                <span>{{ date('M d, Y', strtotime($requestDetails->datetime_of_request)) }}</span>
                                            </li>
                                            <li>
                                                <span>Expected Returning Date:</span>
                                                <span>{{ trim($requestDetails->returning_date) != '' ? date('M d, Y', strtotime($requestDetails->returning_date)) : 'N/A' }}</span>
                                            </li>

                                        </ul>
                                    </fieldset>
                                    <fieldset class="fieldset form-group">
                                        <legend class="small font-16">
                                            Request Transation History
                                        </legend>
                                        <div class="transaction-box">
                                            @foreach ($requestHistory as $key => $row)
                                            <div class="panel-default border-bottom">
                                                <div class="panel-body px-0">
                                                    <ul class="tg-productinfo books-details">
                                                        <li>
                                                            <span>Date &amp; Time:</span>
                                                            <span>{{ date('M d, Y', $row->transaction_datetime) }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Status:</span>
                                                            <span>{{ $row->status }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Delay in Return:</span>
                                                            <span>{{ $row->delay_in_return ?? 'N/A' }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Penalty:</span>
                                                            <span>{{ $row->penalty_amount ?? 'N/A' }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Penalty waived off:</span>
                                                            <span>{{ $row->penalty_waived_off ? 'Yes' : 'No' }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Delay In Days:</span>
                                                            <span>{{ $row->rate_of_penalty ?? 'N/A' }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Rate of Penalty:</span>
                                                            <span>{{ $row->rate_of_penalty ?? 'N/A' }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Penalty Amount:</span>
                                                            <span>{{ $row->penalty_amount ?? 'N/A' }}</span>
                                                        </li>
                                                        <li>
                                                            <span>Notes:</span>
                                                            <span>{{ $row->notes ?? 'N/A' }}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            @endforeach

                                        </div>
                                    </fieldset>
                                    <fieldset class="fieldset form-group">
                                        <legend class="small font-16">
                                            Chat History
                                        </legend>
                                        <main class="msger-chat chat-container">
                                            @foreach ($chatHistory as $key => $row)
                                            @if ($row->from_id == $row->borrower_id)
                                            <div class="msg right-msg">
                                                <div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/145/145867.svg)"></div>

                                                <div class="msg-bubble">
                                                    <div class="msg-info">
                                                        <div class="msg-info-name">{{$row->first_name.' '.$row->last_name}}</div>
                                                        <div class="msg-info-time">{{date("H:i",strtotime($row->created_at))}}</div>
                                                    </div>

                                                    <div class="msg-text">
                                                        {{ $row->body }}
                                                    </div>
                                                </div>
                                            </div>
                                            @else
                                            <div class="msg left-msg">
                                                <div class="msg-img" style="background-image: url(https://image.flaticon.com/icons/svg/327/327779.svg)"></div>

                                                <div class="msg-bubble">
                                                    <div class="msg-info">
                                                        <div class="msg-info-name">{{$row->first_name.' '.$row->last_name}}</div>
                                                        <div class="msg-info-time">{{date("H:i",strtotime($row->created_at))}}</div>
                                                    </div>

                                                    <div class="msg-text">
                                                        {{ $row->body }}
                                                    </div>
                                                </div>
                                            </div>
                                            @endif
                                            @endforeach



                                        </main>

                                        <!-- <ul class="tg-productinfo books-details chat-container">
                                            @foreach ($chatHistory as $key => $row)
                                            @if ($row->from_id == $row->borrower_id)
                                            <li style="float: right;">
                                                <span>{{ $row->body }}</span>
                                            </li>
                                            @else
                                            <li style="float: left;">
                                                <span>{{ $row->body }}</span>
                                            </li>
                                            @endif
                                            @endforeach
                                        </ul> -->
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
@endsection