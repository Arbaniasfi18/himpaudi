<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function landing_page() 
    {
        return Inertia::render('LandingPage');
    }
    
    public function berita() 
    {
        return Inertia::render('Berita');
    }
}
