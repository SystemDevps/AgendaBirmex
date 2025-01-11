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
        Schema::table('reservations', function (Blueprint $table) {
            $table->renameColumn('consultand_id', 'consultant_id'); // Renombra la columna 'consultand_id' a 'consultant_id'
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('reservations', function (Blueprint $table) {
            $table->renameColumn('consultant_id', 'consultand_id'); // Renombra de vuelta la columna 'consultant_id' a 'consultand_id'
        });
    }
};
