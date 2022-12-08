@extends('layouts.app')

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
                                    Books borrowed by me
                                </h3>
                            </div>
                            @foreach($requests AS $key=>$row)
                            <div class="dash-content panel panel-default">
                                <a href="{{ route('borrowRequestDetails',['id'=>$row->id]) }}">
                                    <div class="panel-body">
                                        <ul class="tg-productinfo books-details">
                                            <li>
                                                <span>Request No:</span>
                                                <span>{{'R'.str_pad($row->id,3,"0",STR_PAD_LEFT)}}</span>
                                            </li>
                                            <li>
                                                <span>Status:</span>
                                                <span>{{$row->status}}</span>
                                            </li>
                                            <li>
                                                <span>Borrower/Lender Name:</span>
                                                <span>{{$row->first_name." ".$row->last_name}}</span>
                                            </li>
                                            <li>
                                                <span>Date of Request:</span>
                                                <span>{{date("M d, Y",strtotime($row->datetime_of_request)) }}</span>
                                            </li>
                                            <li>
                                                <span>Date of Lending:</span>
                                                <span>{{(trim($row->borrow_date)!='')?date("M d, Y",$row->borrow_date):'N/A' }}</span>
                                            </li>
                                            <li>
                                                <span>Expected Date of Return:</span>
                                                <span>{{(trim($row->returning_date)!='')?date("M d, Y",strtotime($row->returning_date)):'N/A' }}</span>
                                            </li>
                                            <li>
                                                <span>Actaul Date of Return:</span>
                                                <span>{{(trim($row->return_date)!='')?date("M d, Y",$row->return_date):'N/A' }}</span>
                                            </li>
                                            <li>
                                                <span>Delay in Return:</span>
                                                <span>{{(trim($row->delay_in_days)!='')?$row->delay_in_days:'N/A' }}</span>
                                            </li>
                                            <li>
                                                <span>Penalty:</span>
                                                <span>{{(trim($row->penalty_amount)!='')?$row->penalty_amount:'N/A' }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </a>
                                <div class="btn-container">
                                    @if(trim($row->status)!='Returned')
                                    <a href="{{ url('chat').'/'.$row->lender_id.'/'.$row->id }}" class="btn btn-primary text-uppercase">
                                        Chat
                                    </a>
                                    @endif
                                    {{-- @if(trim($row->status)=='Request to Borrow')
                                    <a href="#" class="btn btn-secondary">
                                        Edit
                                    </a>
                                    @endif
                                    @if(trim($row->status)=='Borrowed')
                                    <a href="{{ route('borrow.returnIndex',['id'=>$row->id]) }}" class="btn btn-secondary">
                                    Return
                                    </a>
                                    @endif --}}
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection