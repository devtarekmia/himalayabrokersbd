<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\Message;

class MessageController extends Controller
{
    public function store(MessageRequest $request)
    {
        Message::create([
            'first_name' => $request['first_name'],
            'last_name' => $request['last_name'],
            'email' => $request['email'],
            'phone' => $request['phone'],
            'subject' => $request['subject'],
            'message' => $request['message'],
        ]);

        $greeting = 'Hi ' . $request['first_name'] . ' ' . $request['last_name'] . '. ';
        $message = 'Thank you for your message. We\'ll contact with you soon!';
        $responseStr = isset($request['first_name']) || isset($request['last_name'])  ? $greeting . $message : $message;

        return to_route('contact')->with('message', ['type' => 'success', 'body' =>  $responseStr]);
    }
}
