@extends('layouts.app')

@section('content')
<!--************************************
					News Grid Start
			*************************************-->
<main id="tg-main" class="tg-main tg-haslayout">
	<!--************************************
					News Grid Start
			*************************************-->
	<div class="tg-sectionspace tg-haslayout">
		<div class="container">
			<div class="row">
				<div id="tg-twocolumns" class="tg-twocolumns">
					<div class="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
						<div id="tg-content" class="tg-content">

							<div class="tg-productdetail">
								<div class="row">
									<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
										<div class="tg-postbook">
											<figure class="tg-featureimg">
												@if(trim($book->image)!='')
												<img src="{{asset('storage'.$book->image)}}" alt="image description">
												@else
													@if(trim($book->supporting_images)!='' && count(json_decode($book->supporting_images))>0)
													<img src="{{asset('storage'.json_decode($book->supporting_images)[0])}}" alt="image description">
													@endif
												@endif
											</figure>
											<div class="tg-postbookcontent">
												<ul class="tg-delevrystock">
													<li><i class="icon-store"></i>
														@if(trim($book->status)=='Available')
														<span>Status: <em>{{'Available'}}</em></span>
														@else
														<span>Status: <em>{{'Not Available'}}</em></span>
														@endif
													</li>
												</ul>

												@auth
												@if(trim(Auth::user()->id)!=trim($book->created_by) && trim($book->status)=='Available')
												<a class="tg-btn tg-active tg-btn-lg btn-details" href="javascript:void(0);" onclick="createBorrowRequest('{{$book->id}}')">
													<i class="fa fa-book"></i>
													<em>Borrow</em>
												</a>
												@else
												<!-- <a class="tg-btn tg-active tg-btn-lg btn-details" href="javascript:void(0);">
													<i class="fa fa-book"></i>
													<em>Borrowed</em>
												</a> -->
												@endif
												@endauth

											</div>
										</div>
									</div>
									<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
										<div class="tg-productcontent">
											<ul class="tg-bookscategories">
												<li><a href="javascript:void(0);">{{ $genre->genre }}</a></li>
											</ul>

											<div class="tg-booktitle">
												<h3 title="{{ $book->title }}">{{ $book->title }}</h3>
											</div>
											<span class="tg-bookwriter">By: <a href="javascript:void(0);">{{ $author->author }}</a></span>

											<div class="tg-sectionhead">
												<h2>Product Details</h2>
											</div>
											<ul class="tg-productinfo">
												<li><span>Age Group:</span><span>{{$book->age_group}}</span></li>
												<li><span>Is Series:</span><span>{{$book->is_series}}</span></li>
												<li><span>Series No:</span><span>{{(trim($book->series_no)!='')?$book->series_no:'N/A'}}</span></li>
												<li><span>Publisher:</span><span>{{$book->publisher}}</span></li>
												<li><span>ISBN10:</span><span>{{$book->isbn_10}}</span></li>
												<li><span>ISBN13:</span><span>{{$book->isbn_13}}</span></li>
												<li><span>Period of lending:</span><span>{{$book->lending_period}}</span></li>
												<li><span>Penalty per day:</span><span>{{$book->penalty_per_day}}</span></li>
												<li><span>Penalty for damage:</span><span>{{$book->penalty_for_damage}}</span></li>
											</ul>

										</div>
									</div>

									@if(count($relatedBooks))
									<div class="tg-relatedproducts">
										<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
											<div class="tg-sectionhead">
												<h2><span>Related Products</span>You May Also Like</h2>
												<a class="tg-btn" href="{{ route('books.list') }}">View All</a>
											</div>
										</div>
										<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
											<div id="tg-relatedproductslider" class="tg-relatedproductslider tg-relatedbooks owl-carousel">
												@foreach($relatedBooks AS $key=>$row)
												<div class="item">
													<div class="tg-postbook">
														<figure class="tg-featureimg">
															<div class="tg-bookimg">
																@if(trim($row->image)!='')
																<div class="tg-frontcover"><img src="{{asset('storage'.$row->image)}}" alt="image description"></div>
																<div class="tg-backcover"><img src="{{asset('storage'.$row->image)}}" alt="image description"></div>
																@else
																	@if(trim($row->supporting_images)!='' && count(json_decode($row->supporting_images))>0)
																	<div class="tg-frontcover"><img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description"></div>
																	<div class="tg-backcover"><img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description"></div>
																	@endif
																@endif
															</div>

														</figure>
														<div class="tg-postbookcontent">
															<ul class="tg-bookscategories">
																<li><a href="javascript:void(0);">{{$row->genre}}</a></li>
															</ul>
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
																	<a href="{{ route('books.details', ['id'=>$row->id]) }}" title="{{$row->title}}">{{$row->title}}</a>
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
															<a class="tg-btn tg-btnstyletwo" href="javascript:void(0);">
																<i class="fa fa-book"></i>
																<em>Borrowed</em>
															</a>
															@endif
															@endauth
														</div>
													</div>
												</div>
												@endforeach
											</div>
										</div>
									</div>
									@endif
								</div>
							</div>
						</div>
					</div>
					<div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
						<aside id="tg-sidebar" class="tg-sidebar">

							<div class="tg-widget tg-catagories">
								<div class="tg-widgettitle">
									<h3>Genres</h3>
								</div>
								<div class="tg-widgetcontent">
									<ul>
										@foreach ($categories as $key => $row)
										<li><a href="{{ route('books.list').'?genre='.$row->genre }}"><span>{{$row->genre}}</span><em>{{$row->total}}</em></a></li>
										@endforeach
									</ul>
								</div>
							</div>

						</aside>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!--************************************
					News Grid End
			*************************************-->
</main>
<!--************************************
					News Grid End
			*************************************-->
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