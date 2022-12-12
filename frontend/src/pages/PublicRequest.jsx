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

<div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner banner-lay" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="{{ asset('/images/request-page-banner.jpg') }}">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="tg-innerbannercontent">
					<h1 class="title">Public Requests</h1>
				</div>
			</div>
		</div>
	</div>
</div>

<!--************************************
					Best Selling Start
			*************************************-->
<section class="tg-sectionspace tg-haslayout">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="tg-sectionhead">
					<h2><span></span>People’s book requests</h2>
				</div>
			</div>
			@foreach ($list as $key => $row)
			<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">
				<div class="panel panel-default tg-bestsellingbooksslider tg-bestsellingbooks">
					<div class="panel-body">
						<div class="tg-postbookcontent">
							<div class="tg-booktitle">
								<h3>
									<strong>
										<a href="{{ route('books.details', ['id'=>$row->id]) }}" title="{{$row->title}}">
											{{$row->title}}
										</a>
									</strong>
								</h3>
							</div>
							<span class="tg-bookwriter">Author: <strong>{{$row->author}}</strong></span>
							<span class="tg-bookwriter">Requested By: <strong>{{$row->username}}</strong></span>
						</div>
					</div>
				</div>
			</div>
			@endforeach
			<div class="panel-footer border-0 pt-0 bg-transparent">
				<div class="custom-pagination pagination">
					{{ $list->links() }}
				</div>
			</div>
		</div>
	</div>
</section>
<!--************************************
					Best Selling End
			*************************************-->



<script>
	$(document).ready(function() {});
</script>
@endsection