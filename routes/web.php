<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnggotaController;

Route::get('/', function () {
    return Inertia::render('auth/login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    Route::prefix('data-anggota')->controller(AnggotaController::class)->group(function(){
        Route::get('/','index');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
