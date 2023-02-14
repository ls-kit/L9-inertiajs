<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormsController extends Controller
{
    public function elements()
    {
        return inertia('Forms/Elements');
    }

    public function plugins()
    {
        return inertia('Forms/Plugins');
    }

    public function validation()
    {
        return inertia('Forms/Validation');
    }

    public function masks()
    {
        return inertia('Forms/Masks');
    }

    public function quilljs()
    {
        return inertia('Forms/Quilljs');
    }

    public function fileUploads()
    {
        return inertia('Forms/FileUploads');
    }
}
