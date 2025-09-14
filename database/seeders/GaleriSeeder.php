<?php

namespace Database\Seeders;

use App\Models\Galeri;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Ramsey\Uuid\Uuid;

class GaleriSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/1.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/2.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/1.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/2.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/1.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/2.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/1.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/2.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/1.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/2.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/1.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/2.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/3.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
            [
                'uuid' => Uuid::uuid4(),
                'type' => 'image',
                'data' => '/assets/images/4.jpg',
                'title' => 'Lorem Ipsum Dolor Sit Amet',
                'desc' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin portti',
            ],
        ];
        Galeri::insert($data);
    }
}
