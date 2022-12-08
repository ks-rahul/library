@component('mail::message')
Hello ,<br/>
<p>{{$message}}</p>


<p>Please contact LendingLibrary Support at support@lendinglibrary.in for further assistance.</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent