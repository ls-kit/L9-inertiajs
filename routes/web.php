<?php

use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UIElementsController;
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
});

