<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UIElementsController extends Controller
{
    public function buttons()
    {
        return inertia('UIElements/Buttons');
    }

    public function cards()
    {
        return inertia('UIElements/Cards');
    }

    public function carousel()
    {
        return inertia('UIElements/Carousel');
    }

    public function embeds()
    {
        return inertia('UIElements/Embeds');
    }

    public function general()
    {
        return inertia('UIElements/General');
    }

    public function grid()
    {
        return inertia('UIElements/Grid');
    }

    public function mediaObjects()
    {
        return inertia('UIElements/MediaObjects');
    }

    public function modals()
    {
        return inertia('UIElements/Modals');
    }

    public function progressBars()
    {
        return inertia('UIElements/ProgressBars');
    }

    public function tabs()
    {
        return inertia('UIElements/Tabs');
    }

    public function typography()
    {
        return inertia('UIElements/Typography');
    }

    public function toasts()
    {
        return inertia('UIElements/Toasts');
    }

    public function tooltipsAndPopovers()
    {
        return inertia('UIElements/TooltipsAndPopovers');
    }

    public function scrollspy()
    {
        return inertia('UIElements/Scrollspy');
    }

    public function spinners()
    {
        return inertia('UIElements/Spinners');
    }

    public function sweetAlerts()
    {
        return inertia('UIElements/SweetAlerts');
    }
}
