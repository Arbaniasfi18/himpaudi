<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'landing_page']);
Route::get('/berita', [DashboardController::class, 'berita']);

Route::prefix('/profile')->controller(ProfileController::class)->group(function() {
    Route::get('/{page}', 'profile');
});
