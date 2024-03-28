<?php

use App\Http\Controllers\AuctionScheduleController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NewsLetterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TeaCatalogueController;
use App\Http\Controllers\TopPriceController;
use App\Http\Resources\ThisSaleOverviewResource;
use App\Models\AuctionSchedule;
use App\Models\Faq;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $faqs = Faq::all('question', 'answer')->toArray();
    $groupedFaqs = Collection::make(array_chunk($faqs, 2));
    $sale_prices = AuctionSchedule::getCurrentSale()->load('top_prices', 'catalogue');

    return Inertia::render('Welcome', [
        Inertia::share([
            'sale' => new ThisSaleOverviewResource($sale_prices),
            'canLogin' => Route::has('login'),
            'faqs' => $groupedFaqs,
        ])
    ]);
});

Route::get('/contact', function () {
    return Inertia::render('Contact/index');
})->name('contact');
Route::post('/contact', [MessageController::class, 'store'])->name('message.send');
Route::post('/newsletter', [NewsLetterController::class, 'subscribe'])->name('newsletter.subscribe');

Route::get('/about-us', function () {
    return Inertia::render('AboutUs/index');
});

Route::get('/service', function () {
    return Inertia::render('Service/index');
});
Route::get('/catalogue', [TeaCatalogueController::class, 'index'])->name('catalogue');
Route::get('/schedule', [AuctionScheduleController::class, 'index'])->name('schedule');
Route::get('/sale-reports', [TopPriceController::class, 'index'])->name('sale.reports');
Route::get('/statistics', function () {
    return Inertia::render('Statistic/index', ['season' => AuctionSchedule::getCurrentSale()->season]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
