<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nombres' => $this->faker->firstName, // Genera un nombre aleatorio
            'apellidos' => $this->faker->lastName, // Genera un apellido aleatorio
            'teléfono' => $this->faker->phoneNumber, // Genera un número de teléfono aleatorio
            'email' => $this->faker->unique()->safeEmail, // Genera un correo electrónico único
            'foto' => null, // Deja el campo 'foto' como nulo por defecto
            'password' => bcrypt('password'), // Genera una contraseña predeterminada 'password'
            'email_verified_at' => now(), // Marca el email como verificado con la fecha actual
            'remember_token' => Str::random(10), // Genera un token de sesión aleatorio
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
