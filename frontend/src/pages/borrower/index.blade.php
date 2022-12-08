@extends('layouts.app')

@section('content')

<!--************************************
					Book request Start
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
                                                    <!-- <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Request Number
                                                        </span>
                                                        <span>R001</span>
                                                    </h3> -->
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
                                                    <h3 class="mb-3">
                                                        <span class="label-font label-width">
                                                            Lending Period
                                                        </span>
                                                        <span>
                                                            {{$book->lending_period}}
                                                        </span>
                                                    </h3>
                                                </div>
                                            </fieldset>
                                            @if(trim($book->status)!='Inactive')
                                            <fieldset class="fieldset form-group">
                                                <legend class="small font-16">
                                                    Requested Information
                                                </legend>

                                                <div class="tg-posttitle">
                                                    <div class="mb-3 d-flex">
                                                        <span class="label-font label-width">
                                                            Period of Lending Requested
                                                        </span>
                                                        <input type="number" name="duration_requested_by_borrower" id="duration_requested_by_borrower" class="form-control" placeholder="Enter...">
                                                    </div>
                                                    <div class="mb-3 d-flex">
                                                        <span class="label-font label-width">
                                                            Notes
                                                        </span>
                                                        <textarea rows="5" style="height:100%;" name="notes" id="notes" maxlength="255" class="form-control" placeholder="Enter..."></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group text-center w-100">
                                                    <a id="submit" href="#" class="btn btn-primary">
                                                        {{ __('Submit') }}
                                                    </a>
                                                    <a href="#" class="btn btn-secondary">
                                                        {{ __('Cancel') }}
                                                    </a>
                                                </div>
                                            </fieldset>
                                            @else
                                            <fieldset class="fieldset form-group">
                                                <legend class="small font-16">
                                                    Requested cannot be processed
                                                </legend>
                                            </fieldset>
                                            @endif
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
					Book request End
			*************************************-->
<script>
    $(document).ready(function() {
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $("#submit").click(function() {
            var duration_requested_by_borrower = $('#duration_requested_by_borrower').val();
            var notes = $('#notes').val();
            if (duration_requested_by_borrower.trim() == '' || notes.trim() == '') {
                alert("Please fill up all fields");
                return false;
            }

            $.ajax({
                type: 'POST',
                url: "{{ route('borrow.request') }}",
                data: {
                    book_id: "{{$book->id}}",
                    duration_requested_by_borrower: duration_requested_by_borrower,
                    notes: notes
                },
                success: function(data) {
                    alert("Request sent succesfully.");
                    location.href = "{{ route('dashboard') }}";
                }
            });
        })
    });
</script>

@endsection