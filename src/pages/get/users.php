<?php

    //UM OUTRO EXEMPLO BEM BESTINHA!
	$users = [

        0 => [
            "id"        => 1,
            "name"      => "Hállan",
            "lastname"  => "Costa"
        ],
        1 => [
            "id"        => 2,
            "name"      => "Valentina",
            "lastname"  => "Soares"
        ],
        2 => [
            "id"        => 3,
            "name"      => "Carlos",
            "lastname"  => "Valencio"
        ]
    ];

    echo json_encode($users);