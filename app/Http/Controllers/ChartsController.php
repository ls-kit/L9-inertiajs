<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ChartsController extends Controller
{
    public function chartjs()
    {
        return inertia('Charts/Chartjs');
    }

    public function google()
    {
        return inertia('Charts/Google');
    }

    public function jqueryKnob()
    {
        return inertia('Charts/JqueryKnob');
    }

    public function morris()
    {
        return inertia('Charts/Morris');
    }

    public function sparkline()
    {
        return inertia('Charts/Sparkline');
    }
}
