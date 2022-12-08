@extends('layouts.adminLayout')
@section('content')
<div class="tg-sectionspace tg-haslayout">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-sectionhead border-0">
                    <h2>
                        Community
                    </h2>
                    <a href="{{ route('admin.community.add') }}" class="btn btn-dark pull-right">
                        Add Community
                    </a>
                </div>
            </div>
            <div class="col-xs-12">
                <div class="panel panel-warning panel-body"">
                        <div class=" table-responsive">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($communityList as $row)
                            <tr>
                                <td>{{ $row->community }}</td>
                                <td>{{ $row->description }}</td>
                                <td>{{ $row->created_at }}</td>
                                <td>
                                    <a href="{{ route('admin.community.edit', ['id' => $row->id]) }}" title="Edit" class="mr-1">
                                        <i class="fa fa-edit"></i>
                                        <!-- Edit -->
                                    </a>
                                    <a onclick="return confirm('Are you sure want to delete this community?')" href="{{ route('admin.community.delete', ['id' => $row->id]) }}" title="Delete" class="mr-1">
                                        <i class="fa fa-trash"></i>
                                        <!-- Delete -->
                                    </a>
                                    <!-- <a onclick="return confirm('Are you sure want to delete this community?')" href="{{ route('admin.community.delete', ['id' => $row->id]) }}" title="Active" class="mr-1">
                                        <i class="fa fa-check-square-o"></i>
                                    </a>
                                    <a onclick="return confirm('Are you sure want to delete this community?')" href="{{ route('admin.community.delete', ['id' => $row->id]) }}" title="Inactive">
                                        <i class="fa fa-user-times"></i>
                                    </a> -->
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                    {{ $communityList->links() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection