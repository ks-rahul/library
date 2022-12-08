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
                                {{ __('Create Community') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form id="createCommunity" method="POST" action="{{ route('admin.community.store') }}" enctype="multipart/form-data">
                            @csrf
                            <fieldset class="fieldset form-group">
                                <legend class="small font-16">
                                    Basic Information
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="community" class="col-form-label text-md-start">
                                                {{ __('Name') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="community" type="text" class="form-control @error('community') is-invalid @enderror" name="community" value="" autocomplete="community" autofocus>

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
                                            <label for="description" class="col-form-label text-md-start">
                                                {{ __('Short Description') }}
                                                <span class="mandatory text-danger">*</span>
                                            </label>

                                            <div class="w-100">
                                                <input id="description" type="text" class="form-control @error('description') is-invalid @enderror" name="description" value="" autocomplete="description" autofocus>

                                                @error('description')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                                @enderror
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div class="row mb-0">
                                <div class="col-md-12 text-center">
                                    <button id="submitBtn" type="submit" class="btn btn-primary">
                                        {{ __('Create') }}
                                    </button>
                                    <a role="button" class="btn btn-secondary" href="{{ route('admin.community') }}">
                                        {{ __('Cancel') }}
                                    </a>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

</div>
<script>
    if ($("#createCommunity").length > 0) {
        $("#createCommunity").validate({
            rules: {
                community: {
                    required: true
                },
                description: {
                    required: true
                }
            },
            messages: {

                community: {
                    required: "Please enter community !",
                },
                description: {
                    required: "Please enter description !"
                }
            },
        })
    }
</script>
@endsection