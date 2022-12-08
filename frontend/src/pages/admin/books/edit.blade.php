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
            <div class="panel panel-default login-card" style="max-width:100%;">

                <div class="tg-contactus panel-body">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead text-center pt-4 border-0 pb-2" style="padding-right:0;">
                            <h2 class="d-block w-100">
                                {{ __('Edit Book') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form method="POST" action="{{ route('admin.book.update') }}" enctype="multipart/form-data" id="book_edit">
                            @csrf
                            <input Type="hidden" name="book_id" value="{{ $book->id }}" />
                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Upload Type
                                </legend>
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="form-group d-flex">
                                            <div class="form-group d-flex">
                                                <label for="upload_type_manual" class="col-form-label text-md-end" style="margin-right:10px;">Manual</label>
                                                <input type="radio" value="manual" readonly {{ ($book->upload_type =='manual')? "checked" : "" }} id="upload_type_manual" name="upload_type">
                                            </div>
                                            <div class="form-group d-flex">
                                                <label for="upload_type_isbn" class="col-form-label text-md-end" style="margin-right:10px;">ISBN</label>
                                                <input type="radio" readonly value="isbn" {{ ($book->upload_type =='isbn')? "checked" : "" }} id="upload_type_isbn" name="upload_type">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group w-100" id="isbn_div" style="display: {{ ($book->upload_type =='isbn')? '' : 'none' }}">
                                            <div class="col-md-8">
                                                <input id="check_isbn" type="text" readonly class="form-control" name="check_isbn" autocomplete="check_isbn" value="{{$book->isbn_13}}" placeholder="Enter ISBN" onkeyup="removeHiphen()">
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button" class="btn btn-success" id="get_details_btn" disabled>
                                                    {{ __('Get Details') }}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset class="fieldset form-group add-form">
                                <legend class="small font-16">
                                    Book Information
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="title" class="col-form-label text-md-start">
                                                {{ __('Name') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="title" type="text" readonly class="form-control @error('title') is-invalid @enderror" name="title" value="{{ $book->title }}" autocomplete="title" autofocus>

                                                @error('title')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="author" class="col-form-label text-md-start">
                                                {{ __('Author') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="author" type="text" readonly class="form-control @error('author') is-invalid @enderror" name="author" value="@isset($author->author){{$author->author}}@endisset" autocomplete="author">

                                                @error('author')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="Genre" class="col-form-label text-md-start">
                                                {{ __('Genre') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="genre" readonly type="text" class="form-control @error('genre') is-invalid @enderror" name="genre" value="@isset($genre->genre){{$genre->genre}}@endisset" autocomplete="genre">

                                                @error('genre')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="age_group" class="col-form-label text-md-start">
                                                {{ __('Age Group') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="age_group" readonly type="text" class="form-control" name="age_group" value="{{ $book->age_group }}" autocomplete="age_group">
                                                @error('age_group')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="is_series" class="col-form-label text-md-start">
                                                {{ __('Is Series') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="d-flex w-100">
                                                <div class="d-flex">
                                                    <input type="radio" readonly value="Yes" checked @if( $book->is_series == 'Yes'){{'checked'}} elseif @endif id="is_series_yes" name="is_series" name="is_series" class="p-0 m-0">
                                                    &nbsp;&nbsp;
                                                    <label for="is_series_yes" class="p-0 m-0">Yes</label>
                                                </div>
                                                <div class="d-flex" style="margin-left:15px;">
                                                    <input type="radio" readonly value="No" checked @if($book->is_series == 'No'){{'checked'}} else @endif id="is_series_no" name="is_series" class="p-0 m-0">&nbsp;&nbsp;
                                                    <label for="is_series_no" class="p-0 m-0">No</label>
                                                </div>
                                                <div class="w-100">
                                                    @error('is_series')
                                                    <span class="invalid-feedback" role="alert">
                                                        <strong>{{ $message }}</strong>
                                                    </span>
                                                    @enderror
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="series_no" class="col-form-label text-md-start">
                                                {{ __('Series No') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="series_no" readonly type="text" class="form-control" @if( $book->is_series == 'No'){{'readonly="readonly"'}}@endif name="series_no" value="{{$book->series_no}}" autocomplete="series_no">
                                                @error('series_no')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="publisher" class="col-form-label text-md-start">
                                                {{ __('Publisher') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="publisher" readonly type="text" class="form-control @error('publisher') is-invalid @enderror" name="publisher" value="{{ $book->publisher }}" autocomplete="publisher" autofocus>

                                                @error('publisher')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="isbn_10" class="col-form-label text-md-start">
                                                {{ __('ISBN 10') }}
                                            </label>

                                            <div class="w-100">
                                                <input id="isbn_10" readonly type="text" class="form-control @error('isbn_10') is-invalid @enderror" name="isbn_10" value="{{ $book->isbn_10 }}" autocomplete="isbn" autofocus>

                                                @error('isbn_10')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="isbn_13" class="col-md-4 col-form-label text-md-start">
                                                {{ __('ISBN 13') }}
                                            </label>

                                            <div class="w-100">
                                                <input id="isbn_13" readonly type="text" class="form-control @error('isbn_13') is-invalid @enderror" name="isbn_13" value="{{ $book->isbn_13 }}" autocomplete="isbn" autofocus>

                                                @error('isbn')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="lending_period" class="col-form-label text-md-start">
                                                {{ __('Period of lending') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="lending_period" readonly type="number" class="form-control @error('lending_period') is-invalid @enderror" name="lending_period" value="{{ $book->lending_period }}" autocomplete="lending_period" autofocus>

                                                @error('lending_period')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="penalty_per_day" class="col-form-label text-md-start">
                                                {{ __('Penalty Per Day') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="penalty_per_day" readonly type="number" class="form-control @error('penalty_per_day') is-invalid @enderror" name="penalty_per_day" value="{{ $book->penalty_per_day }}" autocomplete="penalty_per_day" autofocus>

                                                @error('penalty_per_day')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="penalty_for_damage" class="col-form-label text-md-start">
                                                {{ __('Penalty for Damage') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="penalty_for_damage" readonly type="number" class="form-control @error('penalty_for_damage') is-invalid @enderror" name="penalty_for_damage" value="{{ $book->penalty_for_damage }}" autocomplete="penalty_for_damage" autofocus>

                                                @error('penalty_for_damage')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group w-100" id="image_div" style="display:{{ ($book->upload_type =='isbn')? 'none' : '' }}">
                                            <label for="image" class="col-form-label text-md-start">
                                                {{ __('Upload Cover') }}
                                                <!-- <span class="mandatory text-danger">*</span> -->
                                            </label>

                                            <div class="w-100">
                                                <input id="image" type="file" disabled class="form-control @error('image') is-invalid @enderror" name="image" value="{{ old('image') }}" autofocus>

                                                @error('image')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-12">
                                    <div class="tg-authors">
                                        <div class="form-group w-100">
                                            <label for="penalty_for_damage" class="col-form-label text-md-start">
                                                {{ __('Supporting Images') }}
                                            </label>
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                                <div class="tg-author">
                                                    <figure>
                                                        <a>
                                                            <img src="{{ asset('images/users/img-01.jpg')}}" alt="image description" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                                <div class="tg-author">
                                                    <figure>
                                                        <a>
                                                            <img src="{{ asset('images/users/img-01.jpg')}}" alt="image description" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                                <div class="tg-author">
                                                    <figure>
                                                        <a>
                                                            <img src="{{ asset('images/users/img-01.jpg')}}" alt="image description" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                                <div class="tg-author">
                                                    <figure>
                                                        <a>
                                                            <img src="{{ asset('images/users/img-01.jpg')}}" alt="image description" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                                <div class="tg-author">
                                                    <figure>
                                                        <a>
                                                            <img src="{{ asset('images/users/img-01.jpg')}}" alt="image description" />
                                                        </a>
                                                    </figure>
                                                </div>
                                            </div>
                                            <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
                                                <div class="tg-author">
                                                    <figure>
                                                        <a>
                                                            <img src="{{ asset('images/users/img-01.jpg')}}" alt="image description" />
                                                        </a>
                                                    </figure>
                                                </div>
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
                                            <label for="image" class="col-form-label text-md-start">
                                                {{ __('Approval') }}
                                            </label>
                                            <div class="d-flex">
                                                <div class="form-group d-flex">
                                                    <label for="status" class="col-form-label text-md-end" style="margin-right:10px;">Accept</label>
                                                    <input type="radio" {{ ($book->status =='Active')? "checked" : "" }} value="Active" id="status" name="status">
                                                </div>
                                                <div class="form-group d-flex">
                                                    <label for="status" class="col-form-label text-md-end" style="margin-right:10px;">Reject</label>
                                                    <input type="radio" {{ ($book->status =='Inactive')? "checked" : "" }} value="Inactive" id="status" name="status">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div class="row mb-0 add-form-button">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-primary">
                                        {{ __('Save') }}
                                    </button>

                                    <a href="{{ route('admin.books') }}">
                                        <button type="button" class="btn btn-secondary">
                                            {{ __('Cancel') }}
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <input type="hidden" name="image_thumbnail" id="image_thumbnail" val="" />
                            <input type="hidden" name="image_thumbnail_small" id="image_thumbnail_small" val="" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    if ($("#book_edit").length > 0) {
        $("#book_edit").validate({

            rules: {
                title: {
                    required: true
                },
                author: {
                    required: true
                },
                genre: {
                    required: true
                },
                age_group: {
                    required: true
                },
                series_no: {
                    required: '#is_series_yes:checked'
                },
                publisher: {
                    required: true
                },
                lending_period: {
                    required: true,
                    number: true
                },
                penalty_per_day: {
                    required: true,
                    number: true
                },
                penalty_for_damage: {
                    required: true,
                    number: true
                }

            },
            messages: {

                title: {
                    required: "Please enter title.",
                },
                author: {
                    required: "Please enter author."
                },
                genre: {
                    required: "Please enter genre."
                },
                age_group: {
                    required: "Please enter age group."
                },
                series_no: {
                    required: "Please enter series details."
                },
                publisher: {
                    required: "Please enter publisher name."
                },
                lending_period: {
                    required: "Please enter lending period."
                },
                penalty_per_day: {
                    required: "Please enter penalty per day."
                },
                penalty_for_damage: {
                    required: "Please enter penalty for damage."
                }
            },
        })
    }
</script>
<script>
    $(document).ready(function() {
        //$('#isbn_div').hide();

        $("#upload_type_manual").click(function() {
            resetForManualBookAdd();
            //$('.add-form').show();
            $('#image_div').show();
            $('#isbn_div').hide();
            $('#check_isbn').val("");
        })
        $("#upload_type_isbn").click(function() {
            //$('.add-form').hide();
            $('#image_div').hide();
            $('#isbn_div').show();
        })
        $("#get_details_btn").click(function() {
            // $('.add-form').show();
        })

        $("#get_details_btn").click(function() {
            getBookDetaisByISBN();
            $('.add-form').show();
        })

        $("#is_series_yes").click(function() {
            $('#series_no').val('');
            $('#series_no').removeAttr('readonly');
        })

        $("#is_series_no").click(function() {
            $('#series_no').val('');
            $('#series_no').attr('readonly', 'readonly');
        })

    });

    function removeHiphen() {
        var isbn = $('#check_isbn').val();
        $('#check_isbn').val(isbn.replace('-', '').replace(' ', ''));
    }

    function getBookDetaisByISBN() {
        var isbn = $('#check_isbn').val(); // '9781451648546'
        if (isbn.trim() == '') return false;
        $.ajax({
            url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn,
            type: 'GET',
            dataType: 'json', // added data type
            success: function(res) {
                if (res.totalItems > 0) {
                    var book_details = res.items[0];

                    var title = book_details.volumeInfo.title;
                    var authors = book_details.volumeInfo.authors;
                    var genre = book_details.volumeInfo.categories;
                    var age_group = "";
                    var is_series = "";
                    var series_no = "";
                    var penalty_per_day = book_details.volumeInfo.penalty_per_day;
                    var publisher = book_details.volumeInfo.publisher;
                    var isbns = book_details.volumeInfo.industryIdentifiers;
                    var isbn_13 = isbns[0].identifier;
                    var isbn_10 = isbns[1].identifier;
                    var image_thumbnail_small = book_details.volumeInfo.imageLinks.smallThumbnail;
                    var image_thumbnail = book_details.volumeInfo.imageLinks.thumbnail;

                    $('#title').val(title);
                    $('#author').val(authors);
                    $('#genre').val(genre);
                    $('#age_group').val(age_group);
                    $('#is_series').val(is_series);
                    $('#series_no').val(series_no);
                    $('#penalty_per_day').val(penalty_per_day);
                    $('#publisher').val(publisher);
                    $('#isbn_13').val(isbn_13);
                    $('#isbn_10').val(isbn_10);

                    $('#image_thumbnail').val(image_thumbnail);
                    $('#image_thumbnail_small').val(image_thumbnail_small);

                    $("#book_image").attr("src", image_thumbnail);
                    $("#book_image").show();
                    //console.log(book_details);
                } else {
                    $('.add-form').hide();
                    alert("Data not available for this ISBN - " + isbn + '.');
                }

            }
        });
    }

    function resetForManualBookAdd() {
        $('#title').val("");
        $('#author').val("");
        $('#genre').val("");
        $('#age_group').val("");
        $('#is_series').val("");
        $('#series_no').val("");
        $('#penalty_per_day').val("");
        $('#publisher').val("");
        $('#isbn_13').val("");
        $('#isbn_10').val("");

        $('#image_thumbnail').val("");
        $('#image_thumbnail_small').val("");

        $("#book_image").attr("src", "");
        $("#book_image").hide();
    }
</script>
<style>
    .error {
        color: #ff0000 !important;
    }
</style>
@endsection