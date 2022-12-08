@extends('layouts.app')

@section('content')

<!--************************************
					Dashboard Start
			*************************************-->

<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div id="tg-twocolumns" class="tg-twocolumns">
                <div class="col-xs-12">
                    <div id="tg-content" class="tg-content">
                        <div class="tg-newslist">
                            <div class="row">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <article class="tg-post custom-tg-post">
                                        <figure>
                                            <a href="javascript:void(0);">
                                                @if(File::exists(public_path('/uploads/books/'.$book->image)))
                                                    <img src="{{url('').$book->image}}" width="200px" alt="image description">
                                                @else{
                                                    <img src="{{url('').$book->image}}" width="200px" alt="image description">
                                                @endif
                                            </a>
                                        </figure>
                                        <div class="tg-postcontent">
                                        <fieldset class="fieldset form-group">
                                                <legend class="small font-16">
                                                    General Information
                                                </legend>
                                                <div class="tg-posttitle">
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Request Number
                                                        </span>
                                                        <span>{{'R'.str_pad($requestDetails->id,3,"0",STR_PAD_LEFT)}}</span>
                                                    </h3>
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Book Name
                                                        </span>
                                                        <a href="javascript:void(0);">{{$book->title}}</a>
                                                    </h3>
                                                    <h3 class="mb-3">
                                                        @php
                                                        $borrowDate = new DateTime(date("Y-m-d",$requestHistoryBorrowed[0]->transaction_datetime));
                                                        $returningDate = new DateTime(date("Y-m-d",$requestHistoryReturning[0]->transaction_datetime));
                                                        $totalDaysDiff = $borrowDate->diff($returningDate)->days;
                                                        @endphp
                                                        <span class="label-font label-width">
                                                            Total days
                                                        </span>
                                                        <a href="javascript:void(0);">{{$totalDaysDiff}}</a>
                                                    </h3>
                                                    <h3 class="mb-3">
                                                        @php
                                                        $returnDate = new DateTime($requestDetails->returning_date);
                                                        $returningDate = new DateTime(date("Y-m-d",$requestHistoryReturning[0]->transaction_datetime));
                                                        if($returnDate<$returningDate){
                                                            $totalDelay = $returnDate->diff($returningDate)->days;
                                                        }else{
                                                            $totalDelay = 0;
                                                        }
                                                        @endphp
                                                        <span class="label-font label-width">
                                                            Delay in days
                                                        </span>
                                                        <a href="javascript:void(0);">{{$totalDelay}}</a>
                                                    </h3>
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Penalty
                                                        </span>
                                                        <a href="javascript:void(0);">{{$requestHistoryReturning[0]->penalty_amount}}</a>
                                                    </h3>
                                                    <!-- <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Penalty reason
                                                        </span>
                                                        <a href="javascript:void(0);">Where The Wild Things Are</a>
                                                    </h3> -->
                                                </div>
                                            </fieldset>

                                            <fieldset class="fieldset form-group">
                                                <legend class="small font-16">
                                                    Borrower's Return Request Information
                                                </legend>

                                                <div class="tg-posttitle">
                                                    <div class="mb-3 d-flex">
                                                        <span class="label-font label-width">
                                                            Book's current condition
                                                        </span>
                                                        <div class="form-group">
                                                            <input type="file" name="email" class="form-control" placeholder="Enter..." />
                                                            <ul class="list-group uploadedFileDetails">
                                                                <li class="list-group-item">
                                                                    <span>File Name</span>
                                                                    <button class="btn">
                                                                        <i class="fa fa-close"></i>
                                                                    </button>
                                                                </li>
                                                                <li class="list-group-item">
                                                                    <span>File Name 2</span>
                                                                    <button class="btn">
                                                                        <i class="fa fa-close"></i>
                                                                    </button>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>

                                                    <div class="mb-3 d-flex">
                                                        <span class="label-font label-width">
                                                            Notes
                                                        </span>
                                                        <textarea rows="5" style="height:100%;" type="text" name="notes"  id="notes" class="form-control" placeholder="Enter..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group text-center w-100">
                                                    <a href="javascript:void(0)" id="submit" class="btn btn-primary">
                                                        {{ __('Submit') }}
                                                    </a>
                                                    <a href="#" class="btn btn-secondary">
                                                        {{ __('Cancel') }}
                                                    </a>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </article>
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
					Book request approve End
			*************************************-->

<script>
    $(document).ready(function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $("#submit").click(function() {
            var notes = $('#notes').val(); 
            
            if(notes.trim()==''){
                alert("Please fill up all fields");
                return false;
            }

            $.ajax({
                type:'POST',
                url:"{{ route('borrow.actionOnRequest') }}",
                data:{actionType:'approvedReturn', request_id:"{{$requestDetails->id}}", notes:notes},
                success:function(data){
                    alert("Return request created succesfully.");
                    location.href = "{{ route('dashboard') }}";
                }
            });
        })
    });
</script>
@endsection