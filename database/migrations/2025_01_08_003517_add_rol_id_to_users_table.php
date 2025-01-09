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
        Schema::table('users', function (Blueprint $table) {
            
            $table->unsignedBigInteger('rol_id')->after('id'); // Se añade la columna 'rol_id' después del campo 'id'
            // Se establece una clave foránea para 'rol_id' que referencia el campo 'id' de la tabla 'roles'
            // Si un rol es eliminado, también se eliminarán los usuarios asociados a ese rol (onDelete('cascade'))
            $table->foreign('rol_id')->references('id')->on('roles')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};
