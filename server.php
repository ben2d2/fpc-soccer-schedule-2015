<?php
$scriptInvokedFromCli =
	isset($_SERVER['argv'][0]) && $_SERVER['argv'][0] === 'server.php';

if($scriptInvokedFromCli) {
	$port = getenv('PORT');
	if (empty($port)) {
		$port = "3000";
	}

	echo 'starting server on port '. $port . PHP_EOL;
	exec('php -S localhost:'. $port . ' -t public server.php');
} else {
	return routeRequest();
}

function routeRequest()
{
	$games = file_get_contents('games.json');
	switch($_SERVER["REQUEST_URI"]) {
		case '/':
			echo file_get_contents('./public/index.html');
			break;
		case '/games.json':
			if($_SERVER['REQUEST_METHOD'] === 'POST') {
				$gamesDecoded = json_decode($games, true);
				$gamesDecoded[] = ['level'  => $_POST['level'],
									  'date'    => $_POST['date'],
									  'start_at'    => $_POST['start_at'],
									  'played_at'    => $_POST['played_at'],
									  'away'    => $_POST['away'],
									  'home'    => $_POST['home']
									  ];

				$games = json_encode($gamesDecoded, JSON_PRETTY_PRINT);
				file_put_contents('games.json', $games);
			}
			header('Content-Type: application/json');
			header('Cache-Control: no-cache');
			echo $games;
			break;
		default:
			return false;
	}
}

