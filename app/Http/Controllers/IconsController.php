<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IconsController extends Controller
{
    public function materialDesign()
    {
        return inertia('Icons/MaterialDesign');
    }

    public function fontAwesome()
    {
        return inertia('Icons/FontAwesome');
    }

    public function dripicons()
    {
        return inertia('Icons/Dripicons');
    }

    public function featherIcons()
    {
        return inertia('Icons/FeatherIcons');
    }
}
