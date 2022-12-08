<!DOCTYPE html>
<html>

<head>
    <title>LendingLibrary</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/webcamjs/1.0.25/webcam.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
    <style type="text/css">
        #results {
            padding: 20px;
            border: 1px solid;
            background: #ccc;
        }

        body {
            background-color: #eee;
        }

        .title {

            margin-bottom: 50px;
            text-transform: uppercase;
        }

        .card-block {
            font-size: 1em;
            position: relative;
            margin: 0;
            padding: 1em;
            border: none;
            border-top: 1px solid rgba(34, 36, 38, .1);
            box-shadow: none;

        }

        .card {
            font-size: 1em;
            overflow: hidden;
            padding: 5;
            border: none;
            border-radius: .28571429rem;
            box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
            margin-top: 20px;
        }

        .btn {
            margin-top: auto;
        }
    </style>
</head>

<body>

    <div class="container py-3">
        <div class="title h1 text-center">
            <a href="{{route('home')}}">
                <img src="{{ asset('/images/lending-library-logo.png')}}" style="width: 150px;height:100%;" class="img-fluid" alt="" />
            </a>
            <!-- <span> Lending Library </span> -->
        </div>
        <div class="card">
            <div class="card-block px-6">
                <form method="POST" action="{{ route('uploadcamimage.store') }}">
                    @csrf
                    <div class="row">
                        <div class="col-md-6 text-center h-100">
                            <div id="my_camera"></div>
                            <br />
                            <input type=button value="Take Snapshot" class="btn btn-primary" onClick="take_snapshot()" />
                            <input type="hidden" name="cam_image" class="image-tag">
                        </div>
                        <div class="col-md-6 h-100">
                            <div id="results">
                                <span> Your captured image will appear here... </span>
                            </div>
                        </div>
                        <div class="col-md-12 text-center pt-4 pb-1 border-top mt-3">
                            <button type="submit" class="btn btn-success">Submit</button>
                            <a href="{{url()->previous()}}">
                                <button type="button" class="btn btn-secondary">Cancel</button>
                            </a>
                        </div>

                        <input type="hidden" name="book_id" value="{{$book_id}}">
                        <input type="hidden" name="request_id" value="{{$request_id}}">
                        <input type="hidden" name="to_id" value="{{$to_id}}">

                    </div>
                </form>
            </div>
        </div>
    </div>

    <script language="JavaScript">
        Webcam.set({
            width: 490,
            height: 350,
            image_format: 'jpeg',
            jpeg_quality: 90
        });

        Webcam.attach('#my_camera');

        function take_snapshot() {
            Webcam.snap(function(data_uri) {
                $(".image-tag").val(data_uri);
                document.getElementById('results').innerHTML = '<img src="' + data_uri + '"/>';
            });
        }
    </script>

</body>

</html>