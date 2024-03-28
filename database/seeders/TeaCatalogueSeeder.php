<?php

namespace Database\Seeders;

use App\Models\AuctionSchedule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class TeaCatalogueSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $json = Storage::disk('local')->get('/json/tea_catalogue.json');
        $catalogueInfo = json_decode($json, true);

        foreach ($catalogueInfo as $catalogue) {
            $modelCat = AuctionSchedule::where('sale_no', $catalogue['sale_no'])->first()->catalogue()->create(
                [
                    'offering_bags_leaf' => $catalogue['offering_bags_leaf'],
                    'offering_bags_dust' => $catalogue['offering_bags_dust'],
                    'offering_kgs_leaf' => $catalogue['offering_kgs_leaf'],
                    'offering_kgs_dust' => $catalogue['offering_kgs_dust'],
                    'sold_bags_leaf' => $catalogue['sold_bags_leaf'],
                    'sold_bags_dust' => $catalogue['sold_bags_dust'],
                    'sold_kgs_leaf' => $catalogue['sold_kgs_leaf'],
                    'sold_kgs_dust' => $catalogue['sold_kgs_dust'],
                ]
            );
            $catalogue_file_path = '/published_catalogues' . '/HBL-Tea Catalogue for Sale-' . $catalogue['sale_no'] . ' PANCHAGARH.pdf';
            $modelCat->addMediaFromDisk($catalogue_file_path, 'local')->preservingOriginal()->toMediaCollection('catalogue');
        }
    }
}
