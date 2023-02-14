<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MapsController extends Controller
{
    public function googleMaps()
    {
        return inertia('Maps/GoogleMaps');
    }

    public function vectorMaps()
    {
        return inertia('Maps/VectorMaps');
    }
}
