<?php

namespace App\Http\Controllers;

use App\Models\AuctionSchedule;
use Inertia\Inertia;

class TeaCatalogueController extends Controller
{
    public function index()
    {
        $catalogue = AuctionSchedule::all('id', 'sale_no', 'sale_date', 'prompt_date')->load('catalogue');

        return Inertia::render('Catalogue/index', ['catalogue' => $catalogue, 'season' => AuctionSchedule::getCurrentSale()->season]);
    }
}
