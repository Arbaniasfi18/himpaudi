<?php

namespace App\Http\Controllers;

use App\Models\Galeri;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GaleriController extends Controller
{
    public function galeri($type)
    {
        return Inertia::render('Galeri', [
            'type' => $type,
        ]);
    }

    public function galeri_get_data($type, Request $req)
    {
        $data = [
            'total_data' => Galeri::where('type', $type)->count(),
            'data' => Galeri::where('type', $type)->limit($req->limit)->offset($req->offset)->get(),
        ];

        return response()->json($data);
    }
}
