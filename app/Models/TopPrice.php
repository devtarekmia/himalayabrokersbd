<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TopPrice extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'auction_schedule_id',
        'tea_type',
        'mark',
        'grade',
        'price',
    ];

    public function auction_schedule(): BelongsTo
    {
        return $this->belongsTo(AuctionSchedule::class);
    }
}
