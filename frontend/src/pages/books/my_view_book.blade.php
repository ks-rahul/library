@extends('layouts.app')

@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="panel panel-default login-card" style="max-width:100%;">
                <div class="tg-contactus panel-body">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div class="tg-sectionhead text-center" style="padding-right:0;">
                            <h2 class="d-block w-100">
                                {{ __('View Book') }}
                            </h2>
                        </div>
                    </div>
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <form method="POST" action="{{ route('books.store') }}" enctype="multipart/form-data">
                            <fieldset class="fieldset form-group add-form">
                                <legend class="small font-16">
                                    Book Informations
                                </legend>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="title" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Name:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->title}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="title" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Author:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label">
                                                @isset($author->author){{$author->author}} @else {{'Not Avalable'}}@endisset
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="title" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Genre:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label">
                                                @isset($genre->genre){{$genre->genre}} @else {{'Not Avalable'}}@endisset
                                            </label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Age Group:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->age_group}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Is Series:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->is_series}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Series No:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->series_no}}</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">

                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Publisher:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->publisher}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('ISBN 10:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->isbn_10}}</label>
                                        </div>
                                    </div>

                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('ISBN 13:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->isbn_13}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="age_group" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Period of lending:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->lending_period}}</label>

                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="penalty_per_day" class="col-md-4 col-form-label text-md-end">
                                                {{ __('Penalty per day:') }}
                                            </label>
                                            <label class="col-md-8 col-form-label"> {{$book->penalty_per_day}}</label>
                                        </div>
                                    </div>
                                    <div class="col-md-6"></div>
                                    <div class="col-md-6">
                                        <div class="form-group row">
                                            <label for="image" class="col-md-4 col-form-label text-md-end"></label>

                                            <div class="col-md-8">
                                                @if($book->upload_type =='manual')
                                                <img src="{{asset('storage'.$book->image)}}" id="book_image" width="200px" />
                                                @else
                                                <img src="{{asset('storage'.$book->image)}}" id="book_image" width="200px" />
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <div class="row mb-0 add-form-button">
                                <div class="col-md-12 text-center">
                                    <a href="{{ route('books.list') }}">
                                        <button type="button" class="btn btn-secondary">
                                            {{ __('Cancel') }}
                                        </button>
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
@endsection