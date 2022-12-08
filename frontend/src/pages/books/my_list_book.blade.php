@extends('layouts.app')

@section('content')

<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div id="tg-twocolumns" class="tg-twocolumns">
                <div class="col-12">
                    <div class="smg-cont">
                        @if ($message = Session::get('success'))
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                            <strong>{{ $message }}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        @endif
                        @if ($message = Session::get('error'))
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>{{ $message }}</strong>
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        @endif
                    </div>
                </div>
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                    <div id="tg-content" class="tg-content">
                        <div class="tg-products">
                            <div class="tg-sectionhead">
                                <h2>
                                    {{ __('My Books') }}
                                </h2>
                            </div>
                            <div class="tg-productgrid">
                                @foreach ($list as $key => $row)
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                    <div class="tg-postbook my-book">
                                        <figure class="tg-featureimg">
                                            <div class="tg-bookimg">
                                                @if(trim($row->image)!='')
                                                <div class="tg-frontcover">
                                                    <img src="{{asset('storage'.$row->image)}}" alt="image description" />
                                                </div>
                                                <div class="tg-backcover">
                                                    <img src="{{asset('storage'.$row->image)}}" alt="image description" />
                                                </div>
                                                @else
                                                    @if(trim($row->supporting_images)!='' && count(json_decode($row->supporting_images))>0)
                                                    <div class="tg-frontcover">
                                                        <img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description" />
                                                    </div>
                                                    <div class="tg-backcover">
                                                        <img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description" />
                                                    </div>
                                                    @endif
                                                @endif
                                            </div>
                                        </figure>
                                        <div class="tg-postbookcontent">
                                            <ul class="tg-bookscategories">
                                                <li>
                                                    <a href="{{ route('books.mylist').'?genre='.urlencode($row->genre) }}">
                                                        {{$row->genre}}
                                                    </a>
                                                </li>
                                            </ul>
                                            <div class="tg-booktitle">
                                                <h3>
                                                    <a href="{{ route('books.details', ['id'=>$row->id]) }}" title="{{$row->title}}">
                                                        {{$row->title}}
                                                    </a>
                                                </h3>
                                            </div>
                                            <span class="tg-bookwriter pb-3">
                                                By:
                                                <a href="javascript:void(0);">
                                                    {{$row->author}}
                                                </a>
                                            </span>
                                            <span class="tg-bookwriter pb-3">
                                                Status:
                                                <a href="javascript:void(0);">
                                                    {{$row->status}}
                                                </a>
                                            </span>
                                            <div class="btn-group-toggle d-flex action-btn">
                                                <a class="btn btn-outline-dark mr-1 py-1 px-2" href="{{ route('books.read', ['id'=>$row->id]) }}">
                                                    <i class="fa fa-eye"></i>
                                                </a>
                                                @if($row->status=='Available')
                                                <a class="btn btn-outline-dark mr-1 py-1 px-2" href="{{ route('books.edit', ['id'=>$row->id]) }}">
                                                    <i class="fa fa-edit"></i>
                                                </a>
                                                @endif
                                                @if($row->status=='Available' || $row->status=='Lost')
                                                <form method="POST" action="{{ route('books.delete') }}" onsubmit="return confirm('Are you really want to delete the book?')" enctype="multipart/form-data">
                                                    @csrf
                                                    <input Type="hidden" name="book_id" value="{{ $row->id }}" />
                                                    <button Type="submit" class="btn btn-outline-dark py-1 px-2">
                                                        <i class="fa fa-trash"></i>
                                                    </button>
                                                </form>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                        </div>
                        <div class="panel-footer border-0 pt-0 bg-transparent">
                            <div class="custom-pagination pagination">
                                {{ $list->links() }}
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
                                    <li>
                                        <a href="{{ route('books.mylist').'?genre='.urlencode($row->genre) }}">
                                            <span>{{$row->genre}}</span>
                                            <em>
                                                {{$row->total}}
                                            </em>
                                        </a>
                                    </li>
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
<script>
    $(document).ready(function() {
        $('.tg-formsearch').attr("action", "{{route('books.mylist')}}")
    });
</script>
@endsection