@extends('layouts.adminLayout')
@section('content')

<!-- banner section -->
<div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="{{ asset('images/slider/book-library.jpg')}}">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-innerbannercontent">
                    <!-- <h1>All Books</h1>
					<ol class="tg-breadcrumb">
						<li><a href="{{ url('/') }}">home</a></li>
						<li class="tg-active">All Books</li>
					</ol> -->
                </div>
            </div>
        </div>
    </div>
</div>

<!-- books -->
<section class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-sectionhead">
                    <h2>All Books</h2>
                </div>
            </div>
            <div class="tg-pickedbyauthor tg-pickedbyauthorslider row">
                @foreach ($list as $row)
                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-4">
                    <div class="tg-postbook">
                        <figure class="tg-featureimg">
                            <div class="tg-bookimg">
                                <div class="tg-frontcover">
                                    @if ($row->image)
                                    <img src="{{url('').$row->image}}" alt="image description">
                                    @else
                                    <img src="{{ asset('images/book-library-with-open-textbook-home-page.jpg')}}" alt="image description">
                                    @endif
                                </div>
                                <div class="tg-backcover">
                                    @if ($row->image)
                                    <img src="{{url('').$row->image}}" alt="image description">
                                    @else
                                    <img src="{{ asset('images/book-library-with-open-textbook-home-page.jpg')}}" alt="image description">
                                    @endif
                                </div>
                                
                            </div>
                            <div class="tg-hovercontent">
                                {{-- <div class="tg-description">
                                    <p>
                                        Consectetur adipisicing elit sed do eiusmod tempor incididunt labore toloregna aliqua enim adia minim veniam, quis nostrud.
                                    </p>
                                </div> --}}
                                <strong class="tg-bookpage">Publisher: {{$row->publisher}}</strong>
                                <strong class="tg-bookcategory">Lending Period: {{$row->lending_period}}</strong>
                                <strong class="tg-bookprice">Isbn 10: {{$row->isbn_10}}</strong>
                                <strong class="tg-bookprice">Isbn 13: {{$row->isbn_13}}</strong>
                            </div>
                        </figure>
                        <div class="tg-postbookcontent">
                            <div class="tg-booktitle">
                                <h3>
                                    <a href="javascript:void(0);">
                                       {{$row->title}}
                                    </a>
                                </h3>
                            </div>
                            <span class="tg-bookwriter">By:
                                <a href="javascript:void(0);">
                                    {{$row->first_name.' '.$row->last_name}}
                                </a>
                            </span>
                            <a class="tg-btn tg-btnstyletwo" href="{{ route('admin.book.edit',['id'=>$row->id]) }}">
                                <i class="fa fa-book"></i>
                                <em>Edit</em>
                            </a>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <!-- pagination -->
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="pagination-box">
                    {{ $list->links() }}
                </div>
            </div>
        </div>
    </div>
</section>
@endsection