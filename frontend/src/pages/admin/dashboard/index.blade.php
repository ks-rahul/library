@extends('layouts.adminLayout')
@section('content')

<section class="tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="tg-allstatus mt-5 pt-5 mb-5 pb-5">

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-5">
                    <div class="tg-parallax tg-bgbookwehave" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
                        <div class="tg-status">
                            <div class="tg-statuscontent">
                                <span class="tg-statusicon"><i class="icon-book"></i></span>
                                <h2>Books we have<span>{{$booksWeHave}}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-5">
                    <div class="tg-parallax tg-bgtotalmembers" data-z-index="2" data-appear-bottom-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
                        <div class="tg-status">
                            <div class="tg-statuscontent">
                                <span class="tg-statusicon"><i class="icon-user"></i></span>
                                <h2>Total users<span>{{$totalUsers}}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-5">
                    <div class="tg-parallax tg-bghappyusers" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
                        <div class="tg-status">
                            <div class="tg-statuscontent">
                                <span class="tg-statusicon"><i class="icon-heart"></i></span>
                                <h2>Total Borrowers<span>{{$countOfBorrowers}}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-4 mb-5">
                    <div class="tg-parallax tg-bgtotallender" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
                        <div class="tg-status">
                            <div class="tg-statuscontent">
                                <span class="tg-statusicon"><i class="icon-heart"></i></span>
                                <h2>Total Lender<span>{{$totalLender}}</span></h2>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>

@endsection