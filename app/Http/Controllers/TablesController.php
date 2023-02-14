<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TablesController extends Controller
{
    public function basicTables()
    {
        return inertia('Tables/BasicTables');
    }

    public function dataTables()
    {
        return inertia('Tables/DataTables');
    }
}
