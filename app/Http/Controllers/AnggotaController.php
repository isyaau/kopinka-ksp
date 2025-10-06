<?php

namespace App\Http\Controllers;

use App\Http\Resources\AnggotaResource;
use Inertia\Inertia;
use App\Models\Anggota;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    public function index()
    {
        $perPage = request()->query('perPage',25);
        $query = Anggota::query();
        
        $query->orderBy('nama_lengkap','ASC');

        $anggotas = AnggotaResource::collection($query->paginate($perPage));

        return Inertia::render('anggota/Index', compact('anggotas'));
    }
}
