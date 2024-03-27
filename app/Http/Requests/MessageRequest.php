<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MessageRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'first_name' => 'nullable|string|min:3|max:55',
            'last_name' => 'nullable|string|min:3|max:55',
            'email' => 'email|required',
            'phone' => 'nullable|numeric',
            'subject' => 'string|max:255',
            'message' => 'string|max:6000',
            'terms_conditions' => 'accepted'
        ];
    }
}
