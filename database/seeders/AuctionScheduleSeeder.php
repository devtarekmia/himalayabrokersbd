<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class AuctionScheduleSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = Storage::disk('local')->get('/json/schedules.json');
        $schedules = json_decode($json, true);

        foreach ($schedules as $schedule) {
            DB::table('auction_schedules')->insert([
                'season' => $schedule['season'],
                'sale_no' => $schedule['sale_no'],
                'catalogue_closing' => Carbon::create($schedule['cat_closing']),
                'sale_date' => Carbon::create($schedule['sale_date']),
                'prompt_date' => Carbon::create($schedule['prompt_date']),
                'remark' => $schedule['remark']
            ]);
        }
    }
}
