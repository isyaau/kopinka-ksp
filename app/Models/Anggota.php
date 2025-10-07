<?php

namespace App\Models;

use DateTime;
use Throwable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Anggota extends Model
{
    /** @use HasFactory<\Database\Factories\AnggotaFactory> */
    use HasFactory;
    protected $fillable =[
        'nomor_anggota',
        'nama_lengkap',
        'alamat',
        'nomor_telepon',
        'jenis_kelamin',
        'tanggal_lahir',
        'pekerjaan',
        'nomor_ktp',
    ];

public static function nomorAnggota()
{
    $maxId = self::max('id');
    $kode = sprintf("%04d", $maxId ? $maxId + 1 : 1);
    return 'PSN-' . date('Y') . $kode;
}

public static function getUsia($tanggalLahir){
    try{
        $tanggalLahir = new DateTime($tanggalLahir);
        $today = new DateTime();
        $usia = $today->diff($tanggalLahir);
        return $usia->y . ' Tahun '. $usia->m . ' Bulan ';  
    }catch(Throwable $th){
        return null;

    }
}

protected static function booted()
{
    static::created(function ($anggota){
        $anggota->nomor_anggota = self::nomorAnggota();
        $anggota->save();
    });

    // static::creating(function($pasien){
    //     $pasien->nomo_anggota = self::nomorAnggota();
    // })
}

}

