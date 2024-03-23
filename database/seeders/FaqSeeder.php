<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faqs = array(
            [
                'question' => 'What is the tea auction system in Panchagarh?',
                'answer' => 'The tea auction takes place every other Wednesday, and the sale is conducted via e-auction by Tea Brokers. Under STGOTTAB, there are three authorized tea brokers: Himalaya Brokers, Indigo Brokers, and Mohanonda Brokers.'
            ],
            [
                'question' => 'How do I participate in the e-auction in Panchagarh?',
                'answer' => 'To participate, you need a valid Bidder license from the Bangladesh Tea Board and membership in the Small Tea Garden Owners and Tea Traders Association of Bangladesh (STGOTTAB).'
            ],
            [
                'question' => 'How do I obtain membership in STGOTTAB?',
                'answer' => "Contact STGOTTAB with your valid legal business documents to apply for membership. If you need assistance, feel free to reach out to us. We're here to help!"
            ],
            [
                'question' => 'How is the shipping process handled for teas purchased through e-auction?',
                'answer' => 'After the catalogues are completed, brokers prepare contracts and delivery orders for buyers for teas purchased through e-auction. Based on the credit rating of the buyer, buyers collect delivery orders from brokers and arrange transportation.'
            ],
        );

        foreach ($faqs as $faq) {
            Faq::create([
                'question' => $faq['question'],
                'answer' => $faq['answer']
            ]);
        }
    }
}
