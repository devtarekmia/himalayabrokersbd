<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class AuctionSchedule extends Model
{

    public $timestamps = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'season',
        'sale_no',
        'catalogue_closing',
        'sale_date',
        'prompt_date',
        'remark',
    ];

    protected $appends = [
        'status'
    ];

    public function getStatusAttribute()
    {
        $status = '';
        $status =  Carbon::create($this->prompt_date)->isPast() ? 'closed' : (Carbon::create($this->sale_date)->isFuture() ? 'upcoming' : 'current');
        return $status;
    }

    public function top_prices(): HasMany
    {
        return $this->hasMany(TopPrice::class);
    }

    /**
     * Get the current sale from the AuctionSchedule model.
     *
     * @return \App\Models\AuctionSchedule|null
     */
    public static function getCurrentSale()
    {
        $currentDate = Carbon::now();

        return self::where('sale_date', '<=', $currentDate)
            ->where('prompt_date', '>=', $currentDate)
            ->orderBy('sale_no', 'desc')
            ->first();
    }
}
