<?php

namespace App\Http\Controllers;

use Spatie\Newsletter\Facades\Newsletter;
use Illuminate\Http\Request;

class NewsLetterController extends Controller
{
    public function subscribe(Request $request)
    {
        $wantToSubscribe = $request->validate([
            'email' => 'email',
        ]);

        Newsletter::subscribeOrUpdate($wantToSubscribe['email']);

        return back()->with('message', ['type' => 'success', 'body' => 'Thanks for subscribing.']);
    }
}
