@extends('layouts.app')

@section('content')

<div class="container">
	<div class="row justify-content-center">
		<div class="col-md-8">
			@if ($message = Session::get('success'))
			<div class="alert alert-success alert-dismissible fade show" role="alert">
				<strong>{{ $message }}</strong>
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			</div>
			@endif
		</div>
	</div>
</div>
<!--************************************
				Main Start
		*************************************-->
<!--************************************
					All Status Start
			*************************************-->
<section class="tg-haslayout">
	<div class="container">
		<div class="row">
			<div class="tg-allstatus mt-5 pt-5">
				<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div class="tg-parallax tg-bgbookwehave" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
						<div class="tg-status">
							<div class="tg-statuscontent">
								<span class="tg-statusicon"><i class="icon-book"></i></span>
								<h2>Books we have<span>{{$booksWeHave}}</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div class="tg-parallax tg-bgtotalmembers" data-z-index="2" data-appear-bottom-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
						<div class="tg-status">
							<div class="tg-statuscontent">
								<span class="tg-statusicon"><i class="icon-user"></i></span>
								<h2>Total users<span>{{$totalUsers}}</span></h2>
							</div>
						</div>
					</div>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4 col-lg-4">
					<div class="tg-parallax tg-bghappyusers" data-z-index="2" data-appear-top-offset="600" data-parallax="scroll" data-image-src="images/book-library-with-open-textbook-home-page.jpg">
						<div class="tg-status">
							<div class="tg-statuscontent">
								<span class="tg-statusicon"><i class="icon-heart"></i></span>
								<h2>Total Borrowers<span>{{$countOfBorrowers}}</span></h2>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!--************************************
					All Status End
			*************************************-->
<!--************************************
					Best Selling Start
			*************************************-->
<section class="tg-sectionspace tg-haslayout">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="tg-sectionhead">
					<h2><span>People’s Choice</span>Trending Books</h2>
					<a class="tg-btn" href="{{ route('books.list')}}">View All</a>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div id="tg-bestsellingbooksslider" class="tg-bestsellingbooksslider tg-bestsellingbooks owl-carousel">
					@foreach ($topBorrowedBooks as $key => $row)
					<div class="item">
						<div class="tg-postbook">
							<figure class="tg-featureimg">
								<div class="tg-bookimg">
									@if(trim($row->image))
									<div class="tg-frontcover"><img src="{{asset('storage'.$row->image)}}" alt="image description"></div>
									<div class="tg-backcover"><img src="{{asset('storage'.$row->image)}}" alt="image description"></div>
									@else
									@if(trim($row->supporting_images)!='' && count(json_decode($row->supporting_images))>0)
									<div class="tg-frontcover"><img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description"></div>
									<div class="tg-backcover"><img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description"></div>
									@endif
									@endif
								</div>
								<!-- <a class="tg-btnaddtowishlist" href="javascript:void(0);">
									<i class="icon-heart"></i>
									<span>add to wishlist</span>
								</a> -->
							</figure>
							<div class="tg-postbookcontent">
								<ul class="tg-bookscategories">
									<li><a href="{{ route('books.list').'?genre='.urlencode($row->genre) }}">{{ $row->genre }}</a></li>
								</ul>
								<!-- <div class="tg-themetagbox">
									<span class="tg-themetag">10</span>
								</div> -->
								@if(trim(Auth::user()->id)!=trim($row->created_by) && trim($row->status)=='Available')
								<div class="tg-themetagbox">
									<span class="tg-themetag bg-success">Available</span>
								</div>
								@else
								<div class="tg-themetagbox">
									<span class="tg-themetag">Not Available</span>
								</div>
								@endif
								<div class="tg-booktitle">
									<h3>
										<a href="{{ route('books.details', ['id'=>$row->id]) }}" title="{{$row->title}}">
											{{$row->title}}
										</a>
									</h3>
								</div>
								<span class="tg-bookwriter">By: <a href="javascript:void(0);">{{$row->author}}</a></span>
								@auth
								@if(trim(Auth::user()->id)!=trim($row->created_by) && trim($row->status)=='Available')
								<a class="tg-btn tg-btnstyletwo" href="javascript:void(0);" onclick="createBorrowRequest('{{$row->id}}')">
									<i class="fa fa-book"></i>
									<em>Borrow</em>
								</a>
								@else
								<!-- <a class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
									<i class="fa fa-book"></i>
									<em>Borrowed</em>
								</a> -->
								@endif
								@endauth
							</div>
						</div>
					</div>
					@endforeach
				</div>
			</div>
		</div>
	</div>
</section>
<!--************************************
					Best Selling End
			*************************************-->

<a href="{{ url('chat') }}" class="btn btn-primary floating-chat-btn">
	<i class="fa fa-comments" aria-hidden="true"></i>
	Chat
</a>

<script>
	$(document).ready(function() {
		$.ajaxSetup({
			headers: {
				'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
			}
		});


	});

	function createBorrowRequest(book_id) {
		$.ajax({
			type: 'POST',
			url: "{{ route('borrow.request') }}",
			data: {
				book_id: book_id,
				notes: ""
			},
			success: function(response) {
				if (response.status_code == 200) {
					//alert(response.message);
					location.href = "{{ url('/') }}" + "/chat/" + response.data.lender_id + "/" + response.data.id;
				} else {
					alert(response.message);
				}
			},
			error: function(xhr, ajaxOptions, thrownError) {
				if (xhr?.responseJSON?.message) {
					alert(xhr?.responseJSON?.message);
				} else {
					alert("You have already raised a request to Borrow this book. Please reload and try again.");
				}
			}
		})
	}
</script>
@endsection