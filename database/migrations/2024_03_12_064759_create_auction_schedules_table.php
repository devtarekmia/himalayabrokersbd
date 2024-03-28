<?php

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

        Schema::create('auction_schedules', function (Blueprint $table) {
            $table->id();
            $table->string('season', 10);
            $table->unsignedSmallInteger('sale_no');
            $table->timestamp('catalogue_closing')->nullable();
            $table->timestamp('sale_date')->nullable();
            $table->timestamp('prompt_date')->nullable();
            $table->string('remark')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('auction_schedules');
    }
};
