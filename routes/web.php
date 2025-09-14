<?php

use App\Http\Controllers\BeritaController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GaleriController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

Route::get('/', [DashboardController::class, 'landing_page']);

Route::prefix('/profile')->controller(ProfileController::class)->group(function() {
    Route::get('/{page}', 'profile');
});

Route::prefix('/berita')->controller(BeritaController::class)->group(function() {
    Route::get('/', 'berita');
    Route::get('/{uuid}', 'berita_detail');
});

Route::prefix('/galeri')->controller(GaleriController::class)->group(function() {
    Route::get('/{type}', 'galeri');
    Route::get('/{type}/get-data', 'galeri_get_data');
});
