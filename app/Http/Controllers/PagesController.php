<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function invoice()
    {
        return inertia('Pages/Invoice');
    }

    public function starterPage()
    {
        return inertia('Pages/StarterPage');
    }

    public function maintenance()
    {
        return inertia('Pages/Maintenance');
    }

    public function faqs()
    {
        return inertia('Pages/FAQs');
    }

    public function pricing()
    {
        return inertia('Pages/Pricing');
    }

    public function login()
    {
        return inertia('Pages/Login');
    }

    public function register()
    {
        return inertia('Pages/Register');
    }

    public function recoverPassword()
    {
        return inertia('Pages/RecoverPassword');
    }

    public function lockScreen()
    {
        return inertia('Pages/LockScreen');
    }

    public function error404()
    {
        return inertia('Pages/Error404');
    }

    public function error500()
    {
        return inertia('Pages/Error500');
    }

    public function calendar()
    {
        return inertia('Calendar');
    }
}
