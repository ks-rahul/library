@component('mail::message')
Hello Admin,<br/>
<p>Book is damaged by user. Please check.</p>


<p>Please contact LendingLibrary Support at support@lendinglibrary.in for further assistance.</p>

Thanks,<br>
{{ config('app.name') }}
@endcomponent