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
        Schema::create('top_prices', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(AuctionSchedule::class)->nullable()
                ->constrained()
                ->cascadeOnDelete()
                ->cascadeOnUpdate();
            $table->string('tea_type', 20)->nullable();
            $table->string('mark', 60)->nullable();
            $table->string('grade', 20)->nullable();
            $table->string('price', 20)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('top_prices');
    }
};
