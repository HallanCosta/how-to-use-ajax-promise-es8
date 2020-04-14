<?php

	//UM EXEMPLO BEM BESTINHA!
	$user = [
        0 => [
            "id"        => 1,
            "name"      => $_POST['name'],
            "lastname"  => $_POST['lastname']
        ]
    ];


    echo json_encode($user[0]);