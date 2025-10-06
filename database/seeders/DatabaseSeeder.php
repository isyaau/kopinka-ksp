<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Anggota;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => env('USER_NAME', 'admin'),
            'email' => env('USER_EMAIL','admin@admin.com'),
            'password' => Hash::make(env('USER_PASSWORD','admin123'))
        ]);

        Anggota::factory()->count(100)->create();
    }
}
