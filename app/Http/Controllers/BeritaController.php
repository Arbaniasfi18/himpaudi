<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class BeritaController extends Controller
{
    public function berita() 
    {
        return Inertia::render('Berita');
    }
   
    public function berita_detail($uuid) 
    {
        return Inertia::render('BeritaDetail', [
            'uuid' => $uuid
        ]);
    }
}
