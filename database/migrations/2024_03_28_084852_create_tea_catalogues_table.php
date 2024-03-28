<?php

use App\Models\AuctionSchedule;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tea_catalogues', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AuctionSchedule::class)->nullable()
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->smallInteger('offering_bags_leaf')->default(0);
            $table->smallInteger('offering_bags_dust')->default(0);
            $table->decimal('offering_kgs_leaf')->default(0);
            $table->decimal('offering_kgs_dust')->default(0);
            $table->smallInteger('sold_bags_leaf')->default(0);
            $table->smallInteger('sold_bags_dust')->default(0);
            $table->decimal('sold_kgs_leaf')->default(0);
            $table->decimal('sold_kgs_dust')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tea_catalogues');
    }
};
