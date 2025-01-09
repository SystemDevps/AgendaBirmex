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

        DB::statement("ALTER TABLE reservations CHANGE status reservation_status ENUM('pendiente', 'confirmada', 'cancelada') NOT NULL DEFAULT 'pendiente'");
        //Schema::table('reservations', function (Blueprint $table) {
            //$table->renameColumn('status','reservation_status');
        //});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        DB::statement("ALTER TABLE reservations CHANGE reservation_status status ENUM('pendiente', 'confirmada', 'cancelada') NOT NULL DEFAULT 'pendiente'");
        /*Schema::table('reservations', function (Blueprint $table) {
            //$table->renameColumn('reservation_status','status');
        });*/
    }
};
