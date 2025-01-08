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
        Schema::create('reservations', function (Blueprint $table) {
            $table->id();

            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Clave foránea para 'user_id', relacionada con la tabla 'users', con eliminación en cascada
            $table->foreignId('consultand_id')->constrained('users')->onDelete('cascade'); // Clave foránea 'consultand_id', relacionada también con 'users', con eliminación en cascada
            $table->date('reservation_date'); // Fecha de la reserva
            $table->time('start_time'); // Hora de inicio de la reserva
            $table->time('end_time'); // Hora de finalización de la reserva
            $table->enum('status',['pendiente','confirmada','cancelada'])->default('pendiente'); // Estado de la reserva, por defecto 'pendiente'
            $table->decimal('total_amount',8,2)->nullable(); // Monto total de la reserva, permite valores nulos
            $table->enum('payment_status',['pendiente','pagado','fallido'])->default('pendiente'); // Estado del pago, por defecto 'pendiente'
            $table->text('cancellation_reason')->nullable(); // Razón de la cancelación, permite valores nulos

            $table->timestamps();
        });
    } 
  

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations');
    }
};
