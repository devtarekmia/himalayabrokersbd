<?php

namespace Database\Seeders;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Tarek Mia',
            'email' => 'tarek@hbl.com',
        ]);

        Message::factory(10);

        $this->call([
            FaqSeeder::class,
            AuctionScheduleSeeder::class,
            TopPriceSeeder::class,
            TeaCatalogueSeeder::class,
        ]);
    }
}
