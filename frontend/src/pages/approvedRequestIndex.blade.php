@extends('layouts.app')

@section('content')

<!--************************************
					Book request aprrove Start
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
                                                <img src="{{url('').$book->image}}" alt="image description">
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
                                                            Book Name
                                                        </span>
                                                        <a href="javascript:void(0);">{{$book->title}}</a>
                                                    </h3>
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Author
                                                        </span>
                                                        <a href="javascript:void(0);">{{$author->author}}</a>
                                                    </h3>
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Genre
                                                        </span>
                                                        <a href="javascript:void(0);">{{$genre->genre}}</a>
                                                    </h3>
                                                </div>
                                            </fieldset>
                                            <fieldset class="fieldset form-group">
                                                <legend class="small font-16">
                                                    Borrower's Request Information
                                                </legend>
                                                <div class="tg-posttitle">
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Period of Lending Requested
                                                        </span>
                                                        <span class="periodLendingValue">{{$requestDetails->duration_requested_by_borrower}}</span>
                                                    </h3>
                                                    @foreach($requestHistory AS $key=>$row)
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Notes
                                                        </span>
                                                        <span>{{$row->notes}}</span>
                                                    </h3>
                                                    @endforeach
                                                </div>
                                            </fieldset>
                                            <fieldset class="fieldset form-group">
                                                <legend class="small font-16">
                                                    Lender's Approval
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
                                                        <textarea rows="5" style="height:100%;" type="text" name="notes" id="notes" class="form-control" placeholder="Enter..."></textarea>
                                                    </div>
                                                    <div class="mb-3 d-flex">
                                                        <span class="label-font label-width">
                                                            Period of lending requested by borrower
                                                        </span>
                                                        <div class="reject-option">
                                                            <div class="radio">
                                                                <input type="radio" name="agree_on_duration" id="optionsRadios_approved" value="1" checked>
                                                                Approve
                                                                </label>
                                                            </div>
                                                            <div class="radio">
                                                                <label>
                                                                    <input type="radio" name="agree_on_duration" id="optionsRadios_rejected" value="0">
                                                                    Rejected
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="mb-3 d-flex">
                                                        <span class="label-font label-width">
                                                            Penalty waive off
                                                        </span>
                                                        <div class="reject-option">
                                                            <div class="radio">
                                                                <input type="radio" name="penalty_waived_off" id="optionsRadios3" value="1" checked>
                                                                Yes
                                                                </label>
                                                            </div>
                                                            <div class="radio">
                                                                <label>
                                                                    <input type="radio" name="penalty_waived_off" id="optionsRadios4" value="0">
                                                                    No
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="form-group text-center w-100">
                                                    <a href="#" id="submit" class="btn btn-primary">
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
            //var duration_requested_by_borrower = $('#duration_requested_by_borrower').val(); 
            var notes = $('#notes').val();
            var agree_on_duration = $('input[name="agree_on_duration"]:checked').val();
            var penalty_waived_off = $('input[name="penalty_waived_off"]:checked').val();


            if (notes.trim() == '' || agree_on_duration.trim() == '' || penalty_waived_off.trim() == '') {
                alert("Please fill up all fields");
                return false;
            }

            $.ajax({
                type: 'POST',
                url: "{{ route('borrow.actionOnRequest') }}",
                data: {
                    actionType: 'approvedRequest',
                    request_id: "{{$requestDetails->id}}",
                    notes: notes,
                    agree_on_duration: agree_on_duration,
                    penalty_waived_off: penalty_waived_off
                },
                success: function(data) {
                    alert("Request approved succesfully.");
                    location.href = "{{ route('dashboard') }}";
                }
            });
        })
    });
</script>
@endsection