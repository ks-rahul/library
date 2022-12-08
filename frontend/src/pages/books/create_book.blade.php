@extends('layouts.app')
<script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.25/webcam.min.js"></script>
<style type="text/css">
    #results {
        padding: 20px;
        border: 1px solid;
        background: #ccc;
    }
</style>

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
                        <div class="tg-sectionhead text-center border-0 pb-2" style="padding-right:0;">
                            <h2 class="d-block w-100 pt-4">
                                {{ __('Add Book') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form class="tg-formtheme tg-formcontactus" id="book_add" method="POST" action="{{ route('books.store') }}" enctype="multipart/form-data">
                            @csrf
                            <fieldset class="fieldset form-group" style="margin-top:10px;">
                                <legend class="small font-16">
                                    Upload Type
                                </legend>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group d-flex">
                                            <label for="upload_type_manual" class="col-form-label text-md-end" style="margin-right:10px;">Manual </label>
                                            <input type="radio" value="manual" checked id="upload_type_manual" name="upload_type">
                                        </div>
                                        <div class="form-group d-flex">
                                            <label for="upload_type_isbn" class="col-form-label text-md-end" style="margin-right:10px;">ISBN</label>
                                            <input type="radio" value="isbn" id="upload_type_isbn" name="upload_type">
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="form-group w-100" id="isbn_div">
                                            <div class="col-md-8">
                                                <input id="check_isbn" type="text" class="form-control" name="check_isbn" autocomplete="check_isbn" placeholder="Enter ISBN" onkeyup="removeHiphen()">
                                            </div>
                                            <div class="col-md-4">
                                                <button type="button" class="btn btn-success" id="get_details_btn">
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
                                                <input id="title" type="text" class="form-control @error('title') is-invalid @enderror" name="title" value="{{ old('title') }}" autocomplete="title" autofocus>

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
                                                <input id="author" type="text" class="form-control @error('author') is-invalid @enderror" name="author" value="{{ old('author') }}" autocomplete="author">

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
                                                <select class="multiselect" multiple="multiple" role="multiselect" id="genre" class="@error('genre') is-invalid @enderror" name="genre[]">
                                                    @foreach($all_book_genres AS $key=>$val)
                                                    <option value="{{trim($val->id)}}">{{trim($val->genre)}}</option>
                                                    @endforeach
                                                </select>

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
                                                <select id="age_group" type="text" class="form-control @error('age_group') is-invalid @enderror" name="age_group" value="{{ old('age_group') }}" autocomplete="age_group" autofocus>
                                                    @foreach($age_groups AS $key=>$val)
                                                    <option value="{{$val->id}}">{{$val->age_group}}</option>
                                                    @endforeach
                                                </select>

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
                                                {{ __('Part Of a Series') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100 d-flex">
                                                <div class="d-flex">
                                                    <input type="radio" value="Yes" checked id="is_series_yes" name="is_series" class="p-0 m-0">
                                                    &nbsp;&nbsp;
                                                    <label for="is_series_yes" class="p-0 m-0">Yes</label>
                                                </div>
                                                <div class="d-flex" style="margin-left:15px;">
                                                    <input type="radio" value="No" checked id="is_series_no" name="is_series" class="p-0 m-0">&nbsp;&nbsp;
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
                                                <input id="series_no" type="text" class="form-control @error('series_no') is-invalid @enderror" name="series_no" value="{{ old('series_no') }}" autocomplete="series_no" autofocus>
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
                                                <span class="mandatory text-danger"></span>
                                            </label>

                                            <div class="w-100">
                                                <input id="publisher" type="text" class="form-control @error('publisher') is-invalid @enderror" name="publisher" value="{{ old('publisher') }}" autocomplete="publisher" autofocus>

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
                                                <input id="isbn_10" type="text" class="form-control @error('isbn_10') is-invalid @enderror" name="isbn_10" value="{{ old('isbn_10') }}" autocomplete="isbn_10" autofocus>

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
                                            <label for="isbn_13" class="col-form-label text-md-start">
                                                {{ __('ISBN 13') }}
                                            </label>

                                            <div class="w-100">
                                                <input id="isbn_13" type="text" class="form-control @error('isbn_13') is-invalid @enderror" name="isbn_13" value="{{ old('isbn_13') }}" autocomplete="isbn_13" autofocus>

                                                @error('isbn_13')
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
                                                {{ __('Period Of Lending (In Days)') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="lending_period" type="number" class="form-control @error('lending_period') is-invalid @enderror" name="lending_period" value="{{ old('lending_period') }}" autocomplete="lending_period" autofocus>

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
                                                {{ __('Penalty For Late Return (Per Day)') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="penalty_per_day" type="number" class="form-control @error('penalty_per_day') is-invalid @enderror" name="penalty_per_day" value="{{ old('penalty_per_day') }}" autocomplete="penalty_per_day" autofocus>

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
                                                <input id="penalty_for_damage" type="number" class="form-control @error('penalty_per_day') is-invalid @enderror" name="penalty_for_damage" value="{{ env('BOOK_PENALTY_FOR_DAMAGE') }}" autocomplete="penalty_for_damage" readonly="readonly">

                                                @error('penalty_for_damage')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group  w-100" id="image_div">
                                            <label for="image" class="col-form-label text-md-start">
                                                {{ __('Upload Cover') }}
                                                <span class="mandatory text-danger"></span>
                                            </label>

                                            <div class="w-100">
                                                <input id="image" type="file" class="form-control @error('image') is-invalid @enderror" name="image" value="{{ old('image') }}" autocomplete="image" autofocus>

                                                @error('image')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="whatsapp_no" class="col-form-label text-md-start"></label>

                                            <div class="w-100">
                                                <img src="" id="book_image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {{--
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group w-100">
                                            <label for="penalty_per_day" class="col-form-label text-md-start">
                                                {{ __('Upload Image from Mobile') }}
                                <span class="mandatory text-danger">*</span>
                                </label>

                                <div class="w-100">
                                    {{ $qrCode }}
                                </div>
                    </div>
                </div>
            </div>
            --}}
            </fieldset>

            <fieldset class="fieldset form-group add-form">
                <legend class="small font-16">
                    Picture of cover page
                </legend>
                <div class="row">
                    <div class="col-md-12">
                        <div class="pb-4">
                            <span onClick="openCamera()" id="open_camera_btn" class="btn btn-info">Open Camera</span>
                            <span onClick="closeCamera()" id="close_camera_btn" class="btn btn-light">Close Camera</span>
                        </div>
                    </div>
                    <div class="col-md-6 p-0">
                        <div id="my_camera"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 text-center py-4">
                        <input type="button" class="btn btn-info" value="Take Snapshot" id="take_snapshot_btn" onClick="take_snapshot()">
                        <input type="hidden" id="capture_1" name="cam_image[]" class="image-tag">
                        <input type="hidden" id="capture_2" name="cam_image[]" class="image-tag">
                        <input type="hidden" id="capture_3" name="cam_image[]" class="image-tag">
                        <input type="hidden" id="capture_count" name="capture_count" class="image-tag" value="0">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 form-group w-100">
                        <div id="results" class="overflow-hidden">
                            <!-- <span>Your captured image will appear here...</span> -->
                        </div>
                        <div class="py-4 w-100 text-center">
                            <!-- <button class="btn btn-success">Submit</button> -->
                        </div>
                    </div>
                </div>
            </fieldset>

            <div class="row mb-0 add-form-button">
                <div class="col-md-12 text-center">
                    <button type="submit" class="btn btn-primary">
                        {{ __('Save') }}
                    </button>
                    <a href="{{ route('books.list') }}">
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
    if ($("#book_add").length > 0) {
        $("#book_add").validate({

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
                    //required: true
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
                },
                image: {
                    //required: '#upload_type_manual:checked'
                }

            },
            messages: {

                title: {
                    required: "{{trans('message.books.title_required')}}",
                },
                author: {
                    required: "{{trans('message.books.author_required')}}"
                },
                genre: {
                    required: "{{trans('message.books.genre_required')}}"
                },
                age_group: {
                    required: "{{trans('message.books.age_group_required')}}"
                },
                series_no: {
                    required: "{{trans('message.books.series_no_required')}}"
                },
                publisher: {
                    //required: "{{trans('message.books.publisher_required')}}"
                },
                lending_period: {
                    required: "{{trans('message.books.lending_period_required')}}",
                    number: "{{trans('message.books.lending_period_number')}}"
                },
                penalty_per_day: {
                    required: "{{trans('message.books.penalty_per_day_required')}}",
                    number: "{{trans('message.books.penalty_per_day_number')}}"
                },
                penalty_for_damage: {
                    required: "{{trans('message.books.penalty_for_damage_required')}}",
                    number: "{{trans('message.books.penalty_for_damage_number')}}"
                },
                image: {
                    //required: "{{trans('message.books.image_required')}}"
                }

            },
        })
    }
</script>

<script>
    $(document).ready(function() {
        $('#isbn_div').hide();
        $("#close_camera_btn").hide();
        $("#take_snapshot_btn").hide();

        if (parseInt($("#capture_count").val()) <= 0) {
            $("#results").hide();
        }

        $('#series_no').attr('readonly', 'readonly');

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
    //    var isbn = $('#check_isbn').val();
    //    $('#check_isbn').val(isbn.replace('-', '').replace(' ', ''));
    }

    function getBookDetaisByISBN() {
        var isbnVal = $('#check_isbn').val(); // '9781451648546'
        var isbn = isbnVal.replaceAll('-', '').replace(' ', '');
        if (isbn.trim() == '') return false;
        $.ajax({
            url: 'https://www.googleapis.com/books/v1/volumes?q=ISBN:'+isbn+'&keys={{env("GOOGLE_API_KEY_LL")}}',
            type: 'GET',
            dataType: 'jsonp', // added data type
            //jsonp: false,
            //cache:false,
            // cache: false,
            success: function(res) {
                if (res.totalItems > 0) {
                    var book_details = res.items[0];
                    var imageLinks = book_details.volumeInfo.imageLinks ?? "";
                    if(imageLinks){
                        var smallThumbnail = book_details.volumeInfo.imageLinks.smallThumbnail;
                        var thumbnail = book_details.volumeInfo.imageLinks.thumbnail;
                    }else{
                        var smallThumbnail = "";
                        var thumbnail = "";
                    }
                    // console.log(book_details); return false;
                    var title = book_details.volumeInfo.title;
                    var authors = book_details.volumeInfo.authors;
                    var genre = book_details.volumeInfo.categories;
                    var age_group = "";
                    var is_series = "";
                    var series_no = "";
                    var category = book_details.volumeInfo.categories;
                    var publisher = book_details.volumeInfo.publisher;
                    var isbns = book_details.volumeInfo.industryIdentifiers;
                    var isbn_13 = (isbns[0].identifier.length == 13) ? isbns[0].identifier : isbns[1].identifier;
                    var isbn_10 = (isbns[0].identifier.length == 10) ? isbns[0].identifier : isbns[1].identifier;
                    var image_thumbnail_small = smallThumbnail;
                    var image_thumbnail = thumbnail;

                    $('#title').val(title);
                    $('#author').val(authors);
                    //$('#genre').val(["15","1"]);
                    $("#genre option:selected").removeAttr("selected");
                    $(genre).each(function(key, val) {

                        $('#genre option').each(function() {
                            if (val.trim() == this.text.trim()) {
                                $(this).attr("selected", "selected");
                                //$('.multiselect-container').find('input:checkbox[value="'+val.trim()+'"]').parent("li").addClass("active"); 
                            }

                            console.log(this.text)
                        })
                        //$("#genre").multiselect('reload');
                        $("select[role='multiselect']").multiselect('refresh');
                    })

                    //"option[text='Biographies and Autobiographies']").attr("selected","selected");
                    $('#age_group').val(age_group);
                    $('#is_series').val(is_series);
                    $('#series_no').val(series_no);
                    $('#category').val(category);
                    $('#publisher').val(publisher);
                    $('#isbn_13').val(isbn_13);
                    $('#isbn_10').val(isbn_10);

                    $('#image_thumbnail').val(image_thumbnail);
                    $('#image_thumbnail_small').val(image_thumbnail_small);

                    $("#book_image").attr("src", image_thumbnail);
                    $("#book_image").show();
                    //console.log(book_details);
                } else {
                    //$('.add-form').hide();
                    $('#check_isbn').focus();
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
        $('#category').val("");
        $('#publisher').val("");
        $('#isbn_13').val("");
        $('#isbn_10').val("");

        $('#image_thumbnail').val("");
        $('#image_thumbnail_small').val("");

        $("#book_image").attr("src", "");
        $("#book_image").hide();
    }
</script>
<script language="JavaScript">
    function openCamera() {
        $("#open_camera_btn").hide();
        $("#close_camera_btn").show();
        $("#take_snapshot_btn").show();

        Webcam.set({
            width: 490,
            height: 350,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        $("#my_camera").show();
        Webcam.attach('#my_camera');
    }

    function closeCamera() {
        $("#my_camera").hide();
        $("#close_camera_btn").hide();
        $("#take_snapshot_btn").hide();
        $("#open_camera_btn").show();

        Webcam.reset({
            width: 490,
            height: 350,
            image_format: 'jpeg',
            jpeg_quality: 90
        });
        vid.pause();
        vid.src = "";
        localstream.stop();

    }

    function take_snapshot() {
        var capture_count = parseInt($("#capture_count").val());
        var new_capture_count = capture_count + 1;
        if (new_capture_count > 0) {
            $("#results").show();
        } else {
            $("#results").hide();
        }
        if (new_capture_count <= 3) {
            Webcam.snap(function(data_uri) {
                //$(".image-tag").val(data_uri);
                $("#capture_" + new_capture_count).val(data_uri);
                $("#results").append('<div class="col-md-4 img-box"><img class="captures" src="' + data_uri + '"/><button class="btn btn-link image-delete-btn" type="button" onclick="removeScreenshot(this,' + new_capture_count + ')"><i class="fa fa-close"></i></button></div>');
                $("#capture_count").val(new_capture_count);
            });
        } else {
            alert("You can't upload more than 3 pictures.");
        }
    }

    function removeScreenshot(obj, capture_count) {
        $(obj).parent('div').remove();
        var capture_count = parseInt($("#capture_count").val());
        var new_capture_count = capture_count - 1;
        $("#capture_count").val(new_capture_count);
        if (new_capture_count <= 0) {
            $("#results").hide();
        }
        for (i = capture_count; i <= 3; i++) {
            if (i == 3) {
                $("#capture_" + i).val('');
            } else {
                $("#capture_" + i).val($("#capture_" + (i + 1)).val());
            }

        }
    }
</script>
<style>
    .error {
        color: #ff0000 !important;
    }
</style>

@endsection