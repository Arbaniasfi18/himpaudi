<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function landing_page() 
    {
        return Inertia::render('LandingPage', [
            'cur_url' => url()->current(),
        ]);
    }
    
    public function berita() 
    {
        return Inertia::render('Berita', [
            'cur_url' => url()->current(),
        ]);
    }
}
