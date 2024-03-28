<?php

namespace App\Http\Controllers;

use App\Models\AuctionSchedule;
use Inertia\Inertia;

class AuctionScheduleController extends Controller
{
    public function index()
    {
        return  Inertia::render('Schedule/index', ['schedule' => AuctionSchedule::all(), 'season' => AuctionSchedule::getCurrentSale()->season]);
    }
}
