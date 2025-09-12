<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function profile($page)
    {
        return Inertia::render('Profile', [
            'page' => $page,
        ]);
    }
}
