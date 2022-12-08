@component('mail::message')
Hello {{ $first_name}},<br/>
<p>Please click on below button to create your password.</p>
@component('mail::button', ['url' => $link])
Active User
@endcomponent
<p>This link will be valid for 24 hours.</p>

<p>Please contact LendingLibrary Support at support@lendinglibrary.in and if you did not initiate this registration or if you need further assistance.</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent