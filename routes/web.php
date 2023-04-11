<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/Management_event', function () {
    return Inertia::render('Event');
})->middleware(['auth', 'verified'])->name('Management_event');

Route::get('/Daftar_peserta', function () {
    return Inertia::render('Peserta');
})->middleware(['auth', 'verified'])->name('Daftar_peserta');

Route::get('/Laporan', function () {
    return Inertia::render('Laporan');
})->middleware(['auth', 'verified'])->name('Laporan');

Route::get('/Management_Link', function () {
    return Inertia::render('Link');
})->middleware(['auth', 'verified'])->name('Management_Link');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
