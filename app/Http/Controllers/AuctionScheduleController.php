<?php

namespace App\Http\Controllers;

use App\Models\AuctionSchedule;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AuctionScheduleController extends Controller
{
    public function index()
    {
        return  Inertia::render('Schedule/index', ['schedule' => AuctionSchedule::all()]);
    }
}
