<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class TeaCatalogue extends Model implements HasMedia
{
    use InteractsWithMedia;

    public $timestamps = false;

    public $fillable = [
        'auction_schedule_id',
        'offering_bags_leaf',
        'offering_bags_dust',
        'offering_kgs_leaf',
        'offering_kgs_dust',
        'sold_bags_leaf',
        'sold_bags_dust',
        'sold_kgs_leaf',
        'sold_kgs_dust',
    ];

    protected $appends = [
        'catalogue_file',
        'catalogue_file_name'
    ];

    public function auction_schedule(): BelongsTo
    {
        return $this->belongsTo(AuctionSchedule::class);
    }

    public function registerMediaCollections(): void
    {
        $this
            ->addMediaCollection('catalogue')
            ->singleFile();
    }

    public function getCatalogueFileAttribute()
    {
        return $this->getFirstMediaUrl('catalogue');
    }

    public function getCatalogueFileNameAttribute()
    {
        return $this->getFirstMedia('catalogue')->file_name;
    }
}
