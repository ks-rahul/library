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

<div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner banner-lay" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="{{ asset('/images/request-page-banner.webp') }}">
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
				<div class="tg-innerbannercontent">
					<h1 class="title">Notificatoins</h1>
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
					<h2><span></span>All Notifications</h2>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 mx-auto">
				<ul class="notificationlist">
					@foreach ($list as $key => $row)
					<li class="">
						@if($row->type=='Request')

						<a href="{{ route('user.request.chat', ['id'=>json_decode($row->details)->borrower_id,'request_id'=>json_decode($row->details)->request_id]) }}" title="{{$row->title}}" class="{{($row->seen!=1)?'fontBold':''}}">
							<i class="fa fa-bell text-muted small"></i>
							<p>
								<span>
									{{$row->title}}
								</span>
								<em class="dateTime">{{date("Y-m-d H:i:s", strtotime($row->created_at)) }}</em>
							</p>
						</a>
						@elseif($row->type=='Public Request')
						<a href="{{ route('bookRequests') }}" title="{{$row->title}}" class="{{($row->seen!=1)?'fontBold':''}}">
							<i class="fa fa-bell text-muted small"></i>
							<p>
								<span>
									{{$row->title}}
								</span>
								<em class="dateTime">{{date("Y-m-d H:i:s", strtotime($row->created_at)) }}</em>
							</p>
						</a>
						@elseif($row->type=='Book Added')
						<a href="{{ route('books.details', ['id'=>json_decode($row->details)->book_id]) }}" title="{{$row->title}}" class="{{($row->seen!=1)?'fontBold':''}}">
							<i class="fa fa-bell text-muted small"></i>
							<p>
								<span>
									{{$row->title}}
								</span>
								<em class="dateTime">{{date("Y-m-d H:i:s", strtotime($row->created_at)) }}</em>
							</p>
						</a>
						@else
						<a href="javascript:void(0)" title="{{$row->title}}" class="{{($row->seen!=1)?'fontBold':''}}">
							<i class="fa fa-bell text-muted small"></i>
							<p>
								<span>
									{{$row->title}}
								</span>
								<em class="dateTime">{{date("Y-m-d H:i:s", strtotime($row->created_at)) }}</em>
							</p>
						</a>
						@endif
					</li>
					@endforeach
				</ul>
			</div>
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