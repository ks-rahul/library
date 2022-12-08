@extends(!empty($user) ? 'layouts.app' : 'layouts.beforeLoginApp')

@section('content')
<!--************************************
        Inner Banner Start
      *************************************-->
<div class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner" data-z-index="-100" data-appear-top-offset="600" data-parallax="scroll" data-image-src="{{ asset('/images/contact-us-page-banner.jpg') }}">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-innerbannercontent">
                </div>
            </div>
        </div>
    </div>
</div>
<!--************************************
        Inner Banner End
      *************************************-->
<!--************************************
         Contact Us Start
       *************************************-->
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="tg-contactus">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div class="tg-sectionhead">
                        <h2><span>Say Hello!</span>Get In Touch With Us</h2>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <div class="tg-contactdetail">
                        <ul class="tg-contactinfo">
                            <li>
                                <i class="icon-apartment"></i>
                                <address>{{trans('message.footer.address')}}</address>
                            </li>
                            <li>
                                <i class="icon-phone-handset"></i>
                                <span>
                                    <em>{{trans('message.footer.phone_1')}}</em>
                                    <em>{{trans('message.footer.phone_2')}}</em>
                                </span>
                            </li>
                            <li>
                                <i class="icon-clock"></i>
                                <span>{{trans('message.footer.available')}}</span>
                            </li>
                            <li>
                                <i class="icon-envelope"></i>
                                <span>
                                    <em><a href="mailto:{{trans('message.footer.email_support')}}">{{trans('message.footer.email_support')}}</a></em>
                                    <em><a href="mailto:{{trans('message.footer.email_info')}}">{{trans('message.footer.email_info')}}</a></em>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
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
                    <form id="contactForm" method="POST" action="{{ route('postcontact') }}" class="tg-formtheme tg-formcontactus">
                        <fieldset>
                            @csrf
                            <!-- add csrf field on your form -->

                            <div class="form-group">
                                <input id="first_name" type="text" class="form-control @error('first_name') is-invalid @enderror" name="first_name" value="{{ old('first_name') }}" placeholder="First Name" autocomplete="first_name" autofocus>

                                @error('first_name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input id="last_name" type="text" class="form-control @error('last_name') is-invalid @enderror" name="last_name" value="{{ old('last_name') }}" placeholder="Last Name" autocomplete="last_name" autofocus>

                                @error('last_name')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" placeholder="Email" autocomplete="email">

                                @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <input id="subject" type="text" placeholder="Subject (optional)" class="form-control @error('subject') is-invalid @enderror" name="subject" value="{{ old('subject') }}" autocomplete="subject" autofocus>

                                @error('subject')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-group tg-hastextarea">
                                <textarea id="comment" name="comment" placeholder="Comment" class="form-control @error('comment') is-invalid @enderror" autocomplete="subject" autofocus>{{ old('comment') }}</textarea>
                                @error('comment')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                            <div class="form-group">
                                <button type="submit" class="tg-btn tg-active">Submit</button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $(document).ready(function() {
        $("#contactForm").submit(function() {
            var formData = {
                first_name: $("#first_name").val(),
                last_name: $("#last_name").val(),
                email: $("#email").val(),
                subject: $("#subject").val(),
                comment: $("#comment").val(),
            };

            if (formData.first_name == '') {
                alert("Please fill the first name!");
                return false;
            }
            if (formData.last_name == '') {
                alert("Please fill the last name!");
                return false;
            }
            if (formData.email == '') {
                alert("Please fill the email!");
                return false;
            }
            if (formData.comment == '') {
                alert("Please fill thecomment.");
                return false;
            }
        });

    });
</script>
@endsection