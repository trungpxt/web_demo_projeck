$host="localhost";
$adm="root";
$pass=""
$base="projeck_1"
$cont = new mysqli($host, $adm, $pass, $base);
if ($cont->connect_errno) {
    echo "Failed to connect to MySQL: (" . $cont->connect_errno . ") " . $cont->connect_error;
}
