<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UIElementsController;
use App\Http\Controllers\TablesController;
use App\Http\Controllers\ChartsController;
use App\Http\Controllers\FormsController;
use App\Http\Controllers\IconsController;
use App\Http\Controllers\PagesController;
use App\Http\Controllers\MapsController;
use Illuminate\Support\Facades\Route;

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function () {
    Route::get('dashboard', DashboardController::class)->name('dashboard');
    Route::post('logout', [LoginController::class, 'destroy'])->name('logout');

    Route::apiResource('users', UserController::class);

    Route::get('profile', ProfileController::class)->name('profile');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'create'])->name('login');
    Route::post('login', [LoginController::class, 'store']);

    Route::get('register', [RegisterController::class, 'create'])->name('register');
    Route::post('register', [RegisterController::class, 'store']);

    Route::get('auth/google', [GoogleController::class, 'redirectToGoogle'])->name('auth.google');
    Route::get('auth/google/callback', [GoogleController::class, 'handleGoogleCallback']);

    // XERO TEMPLATE ROUTES
    Route::group(['as' => 'uielements.'], function () {
        Route::get('buttons', [UIElementsController::class, 'buttons'])->name('buttons');
        Route::get('cards', [UIElementsController::class, 'cards'])->name('cards');
        Route::get('carousel', [UIElementsController::class, 'carousel'])->name('carousel');
        Route::get('embeds', [UIElementsController::class, 'embeds'])->name('embeds');
        Route::get('general', [UIElementsController::class, 'general'])->name('general');
        Route::get('grid', [UIElementsController::class, 'grid'])->name('grid');
        Route::get('media-objects', [UIElementsController::class, 'mediaObjects'])->name('mediaObjects');
        Route::get('modals', [UIElementsController::class, 'modals'])->name('modals');
        Route::get('progress-bars', [UIElementsController::class, 'progressBars'])->name('progressBars');
        Route::get('tabs', [UIElementsController::class, 'tabs'])->name('tabs');
        Route::get('typography', [UIElementsController::class, 'typography'])->name('typography');
        Route::get('toasts', [UIElementsController::class, 'toasts'])->name('toasts');
        Route::get('tooltips-and-popovers', [UIElementsController::class, 'tooltipsAndPopovers'])->name('tooltipsAndPopovers');
        Route::get('scrollspy', [UIElementsController::class, 'scrollspy'])->name('scrollspy');
        Route::get('spinners', [UIElementsController::class, 'spinners'])->name('spinners');
        Route::get('sweet-alerts', [UIElementsController::class, 'sweetAlerts'])->name('sweetAlerts');
    });

    Route::group(['as' => 'tables.'], function () {
        Route::get('basic-tables', [TablesController::class, 'basicTables'])->name('basicTables');
        Route::get('data-tables', [TablesController::class, 'dataTables'])->name('dataTables');
    });

    Route::group(['as' => 'charts.'], function () {
        Route::get('chartjs', [ChartsController::class, 'chartjs'])->name('chartjs');
        Route::get('google', [ChartsController::class, 'google'])->name('google');
        Route::get('jquery-knob', [ChartsController::class, 'jqueryKnob'])->name('jqueryKnob');
        Route::get('morris', [ChartsController::class, 'morris'])->name('morris');
        Route::get('sparkline', [ChartsController::class, 'sparkline'])->name('sparkline');
    });

    Route::group(['as' => 'forms.'], function () {
        Route::get('elements', [FormsController::class, 'elements'])->name('elements');
        Route::get('plugins', [FormsController::class, 'plugins'])->name('plugins');
        Route::get('validation', [FormsController::class, 'validation'])->name('validation');
        Route::get('masks', [FormsController::class, 'masks'])->name('masks');
        Route::get('quilljs', [FormsController::class, 'quilljs'])->name('quilljs');
        Route::get('file-uploads', [FormsController::class, 'fileUploads'])->name('fileUploads');
    });

    Route::group(['as' => 'icons.'], function () {
        Route::get('material-design', [IconsController::class, 'materialDesign'])->name('materialDesign');
        Route::get('font-awesome', [IconsController::class, 'fontAwesome'])->name('fontAwesome');
        Route::get('dripicons', [IconsController::class, 'dripicons'])->name('dripicons');
        Route::get('feather-icons', [IconsController::class, 'featherIcons'])->name('featherIcons');
    });

    Route::group(['as' => 'pages.'], function () {
        Route::get('invoice', [PagesController::class, 'invoice'])->name('invoice');
        Route::get('starter-page', [PagesController::class, 'starterPage'])->name('starterPage');
        Route::get('maintenance', [PagesController::class, 'maintenance'])->name('maintenance');
        Route::get('faqs', [PagesController::class, 'faqs'])->name('faqs');
        Route::get('pricing', [PagesController::class, 'pricing'])->name('pricing');
        Route::get('login', [PagesController::class, 'login'])->name('login');
        Route::get('register', [PagesController::class, 'register'])->name('register');
        Route::get('recover-password', [PagesController::class, 'recoverPassword'])->name('recoverPassword');
        Route::get('lock-screen', [PagesController::class, 'lockScreen'])->name('lockScreen');
        Route::get('error-404', [PagesController::class, 'error404'])->name('error404');
        Route::get('error-500', [PagesController::class, 'error500'])->name('error500');
    });

    Route::get('calendar', [PagesController::class, 'calendar'])->name('calendar');

    Route::group(['as' => 'maps.'], function () {
        Route::get('google-maps', [MapsController::class, 'googleMaps'])->name('googleMaps');
        Route::get('vector-maps', [MapsController::class, 'vectorMaps'])->name('vectorMaps');
    });
});

