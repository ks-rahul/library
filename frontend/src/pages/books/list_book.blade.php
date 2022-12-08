@extends('layouts.app')

@section('content')
<!--************************************
					News Grid Start
			*************************************-->
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div id="tg-twocolumns" class="tg-twocolumns">
                <div class="col-xs-12 col-sm-8 col-md-8 col-lg-9 pull-right">
                    <div id="tg-content" class="tg-content">
                        <div class="tg-products">
                            <div class="tg-sectionhead">
                                <h2><span></span>Available Books</h2>
                            </div>
                            <div class="tg-productgrid">
                                <!-- <div class="tg-refinesearch">
                                    <span>showing 1 to 8 of 20 total</span>
                                    <form class="tg-formtheme tg-formsortshoitems">
                                        <fieldset>
                                            <div class="form-group">
                                                <label>sort by:</label>
                                                <span class="tg-select">
                                                    <select>
                                                        <option>name</option>
                                                        <option>name</option>
                                                        <option>name</option>
                                                    </select>
                                                </span>
                                            </div>
                                            <div class="form-group">
                                                <label>show:</label>
                                                <span class="tg-select">
                                                    <select>
                                                        <option>8</option>
                                                        <option>16</option>
                                                        <option>20</option>
                                                    </select>
                                                </span>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div> -->
                                @foreach ($list as $key => $row)
                                <div class="col-xs-6 col-sm-6 col-md-4 col-lg-3">
                                    <div class="tg-postbook">
                                        <figure class="tg-featureimg">
                                            <div class="tg-bookimg">
                                                @if(trim($row->image)!='')
                                                    <div class="tg-frontcover">
                                                        <img src="{{asset('storage'.$row->image)}}" alt="image description">
                                                    </div>
                                                    <div class="tg-backcover">
                                                        <img src="{{asset('storage'.$row->image)}}" alt="image description">
                                                    </div>
                                                @else
                                                    @if(trim($row->supporting_images)!='' && count(json_decode($row->supporting_images))>0)
                                                    <div class="tg-frontcover">
                                                        <img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description">
                                                    </div>
                                                    <div class="tg-backcover">
                                                        <img src="{{asset('storage'.json_decode($row->supporting_images)[0])}}" alt="image description">
                                                    </div>
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
                                                <li><a href="{{ route('books.list').'?genre='.urlencode($row->genre) }}">{{$row->genre}}</a></li>
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
                        <div class="panel-footer border-0 pt-0 bg-transparent">
                            <div class="custom-pagination pagination">
                                {{ $list->links() }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 pull-left">
                    <aside id="tg-sidebar" class="tg-sidebar">
                        <!-- <div class="tg-widget tg-widgetsearch">
                            <form class="tg-formtheme tg-formsearch">
                                <div class="form-group">
                                    <button type="submit"><i class="icon-magnifier"></i></button>
                                    <input type="search" name="search" class="form-group" placeholder="Search by title, author, key...">
                                </div>
                            </form>
                        </div> -->
                        <div class="tg-widget tg-catagories">
                            <div class="tg-widgettitle">
                                <h3>Genres</h3>
                            </div>
                            <div class="tg-widgetcontent">
                                <ul>
                                    @foreach ($categories as $key => $row)
                                    <li><a href="{{ route('books.list').'?genre='.urlencode($row->genre) }}"><span>{{$row->genre}}</span><em>{{$row->total}}</em></a></li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>

                        <!-- <div class="tg-widget tg-widgettrending">
                            <div class="tg-widgettitle">
                                <h3>Trending Products</h3>
                            </div>
                            <div class="tg-widgetcontent">
                                <ul>
                                    <li>
                                        <article class="tg-post">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/products/img-04.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-postcontent">
                                                <div class="tg-posttitle">
                                                    <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                </div>
                                                <span class="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                            </div>
                                        </article>
                                    </li>
                                    <li>
                                        <article class="tg-post">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/products/img-05.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-postcontent">
                                                <div class="tg-posttitle">
                                                    <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                </div>
                                                <span class="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                            </div>
                                        </article>
                                    </li>
                                    <li>
                                        <article class="tg-post">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/products/img-06.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-postcontent">
                                                <div class="tg-posttitle">
                                                    <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                </div>
                                                <span class="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                            </div>
                                        </article>
                                    </li>
                                    <li>
                                        <article class="tg-post">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/products/img-07.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-postcontent">
                                                <div class="tg-posttitle">
                                                    <h3><a href="javascript:void(0);">Where The Wild Things Are</a></h3>
                                                </div>
                                                <span class="tg-bookwriter">By: <a href="javascript:void(0);">Kathrine Culbertson</a></span>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tg-widget tg-widgetinstagram">
                            <div class="tg-widgettitle">
                                <h3>Instagram</h3>
                            </div>
                            <div class="tg-widgetcontent">
                                <ul>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-01.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-02.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-03.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-04.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-05.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-06.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-07.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-08.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                    <li>
                                        <figure>
                                            <img src="{{ asset('images/instagram/img-09.jpg')}}" alt="image description">
                                            <figcaption><a href="javascript:void(0);"><i class="icon-heart"></i><em>50,134</em></a></figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="tg-widget tg-widgetblogers">
                            <div class="tg-widgettitle">
                                <h3>Top Bloogers</h3>
                            </div>
                            <div class="tg-widgetcontent">
                                <ul>
                                    <li>
                                        <div class="tg-author">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-03.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-authorcontent">
                                                <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                <span>21,658 Published Books</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tg-author">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-04.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-authorcontent">
                                                <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                <span>21,658 Published Books</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tg-author">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-05.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-authorcontent">
                                                <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                <span>21,658 Published Books</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="tg-author">
                                            <figure><a href="javascript:void(0);"><img src="{{ asset('images/author/imag-06.jpg')}}" alt="image description"></a></figure>
                                            <div class="tg-authorcontent">
                                                <h2><a href="javascript:void(0);">Jude Morphew</a></h2>
                                                <span>21,658 Published Books</span>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div> -->
                    </aside>
                </div>
            </div>
        </div>
    </div>
</div>
<a href="{{ url('chat') }}" class="btn btn-primary floating-chat-btn">
	<i class="fa fa-comments" aria-hidden="true"></i>
	Chat
</a>
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