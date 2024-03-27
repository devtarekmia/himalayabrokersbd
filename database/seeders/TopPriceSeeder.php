<?php

namespace Database\Seeders;

use App\Models\AuctionSchedule;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class TopPriceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = Storage::disk('local')->get('/json/top_prices.json');
        $topPrices = json_decode($json, true);

        foreach ($topPrices as $price) {
            AuctionSchedule::where('sale_no', $price['sale_no'])->first()->top_prices()->create(
                [
                    'tea_type' => $price['tea_type'],
                    'mark' => $price['mark'],
                    'grade' => $price['grade'],
                    'price' => $price['price'],
                ]
            );
        }
    }
}
