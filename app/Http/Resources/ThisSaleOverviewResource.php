<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThisSaleOverviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'season' => $this->season,
            'sale_no' => $this->sale_no,
            'sale_date' => Carbon::create($this->sale_date)->toFormattedDateString(),
            'top_prices' => $this->restructureTopPrices($this->top_prices),
            'overview' => [
                'offering_kgs_leaf' => $this->catalogue->offering_kgs_leaf,
                'offering_kgs_dust' => $this->catalogue->offering_kgs_dust,
                'sold_kgs_leaf' => $this->catalogue->sold_kgs_leaf,
                'sold_kgs_dust' => $this->catalogue->sold_kgs_dust,
            ],
        ];
    }

    /**
     * Restructure the top prices array.
     *
     * @param  \Illuminate\Database\Eloquent\Collection  $topPrices
     * @return array
     */
    private function restructureTopPrices($topPrices)
    {
        return $topPrices->groupBy('tea_type')->map(function ($items) {
            return $items->first()->only('mark', 'grade', 'price');
        })->toArray();
    }
}
