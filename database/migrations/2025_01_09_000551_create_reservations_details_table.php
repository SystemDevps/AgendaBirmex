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
        Schema::create('reservations_details', function (Blueprint $table) {
           
            $table->id(); // Clave primaria 'id'
            $table->unsignedBigInteger('reservation_id'); // Clave foránea para la reserva
            $table->string('transaction_id')->nullable(); // ID de la transacción, permite nulos
            $table->string('payer_id')->nullable(); // ID del comprador, permite nulos
            $table->string('payer_email')->nullable(); // Email del comprador, permite nulos
            $table->string('payment_status')->nullable(); // Estado del pago, permite nulos
            $table->decimal('amount', 10, 2)->nullable(); // Monto del pago, permite nulos
            $table->text('response_json')->nullable(); // Respuesta completa del proveedor de pagos en formato JSON, permite nulos
            $table->timestamps(); // Campos para la fecha de creación y actualización

            // Clave foránea que relaciona con la tabla 'reservations'
            // Si se elimina una reserva, también se eliminan sus detalles de transacción (onDelete('cascade'))
            $table->foreign('reservation_id')->references('id')->on('reservations')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reservations_details');
    }
};
