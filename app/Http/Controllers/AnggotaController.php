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
    $search = request()->query('search');
    $perPage = request()->query('perPage', 25);

    $query = Anggota::query();

    if (!empty($search)) {
        $query->where('nama_lengkap', 'like', '%' . $search . '%')
        ->orWhere('nomor_anggota', 'like', '%' . $search . '%');
    }

    $query->orderBy('nama_lengkap', 'ASC');

    // Tambahkan withQueryString agar search & perPage tetap ada saat pindah halaman
    $anggotas = AnggotaResource::collection(
        $query->paginate($perPage)->withQueryString()
    );

    return Inertia::render('anggota/Index', compact('anggotas'));
}

}
