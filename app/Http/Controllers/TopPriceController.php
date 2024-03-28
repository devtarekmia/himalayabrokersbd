<?php

namespace App\Http\Controllers;

use App\Models\AuctionSchedule;
use Inertia\Inertia;

class TopPriceController extends Controller
{
    public function index()
    {
        $top_prices = AuctionSchedule::all('id', 'sale_no')->load('top_prices');
        return Inertia::render('SaleReports/index', ['top_prices' => $top_prices, 'season' => AuctionSchedule::getCurrentSale()->season]);
    }
}
